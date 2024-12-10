// --------------- AUTENTIFICACION DE USUARIO ---------------

// Variables del DOM para autentificacion de usuario
const modalAutenticacion = document.getElementById("modalAutenticacion");
const btnSesion = document.querySelector(".btn-sesion");
const btnCerrarModal = document.getElementById("btnCerrarModal");
const btnAccion = document.getElementById("btnAccion");
const btnAlternar = document.getElementById("btnAlternar");
const formAutenticacion = document.getElementById("formAutenticacion");
const modalTitulo = document.getElementById("modalTitulo");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");
const correoInput = document.getElementById("correo");
const nombreUsuario = document.getElementById("nombreUsuario");
const menuUsuario = document.getElementById("menuUsuario");
const cerrarSesion = document.getElementById("cerrarSesion");

// Datos
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || null;

// Mostrar modal de autenticación
btnSesion.addEventListener("click", () => {
    modalAutenticacion.classList.remove("oculto");
    usuarioInput.value = "";
    contrasenaInput.value = "";
});

// Cerrar modal de autenticación
btnCerrarModal.addEventListener("click", () => {
    modalAutenticacion.classList.add("oculto");
});

// Alternar entre iniciar sesión y registrar
btnAlternar.addEventListener("click", (e) => {
    e.preventDefault();
    const esRegistro = btnAccion.textContent === "Iniciar Sesión";
    btnAccion.textContent = esRegistro ? "Registrar" : "Iniciar Sesión";
    modalTitulo.textContent = esRegistro ? "Registrar Usuario" : "Iniciar Sesión";
    correoInput.classList.toggle("oculto");
    correoLabel.classList.toggle("oculto");

    // Cambiar texto de alternar
    alternarTexto.innerHTML = esRegistro
        ? `¿Ya tienes cuenta? <a href="#" id="btnAlternar" class="texto-enlace">Iniciar Sesión</a>`
        : `¿No tienes cuenta? <a href="#" id="btnAlternar" class="texto-enlace">Registrarme</a>`;

    // Reasignar evento para mantener funcionalidad
    document.getElementById("btnAlternar").addEventListener("click", (e) => {
        e.preventDefault();
        btnAlternar.click();
    });
});

// Evento para registrar/iniciar sesión
formAutenticacion.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = usuarioInput.value.trim();
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (btnAccion.textContent === "Registrar") {
        if (usuarios.some(u => u.usuario === usuario)) {
            Swal.fire({
                icon: 'error',
                title: 'Registro fallido',
                text: 'Este usuario ya existe. Intenta con otro nombre de usuario.',
            });
        } else if (usuarios.some(u => u.correo === correo)) {
            Swal.fire({
                icon: 'error',
                title: 'Registro fallido',
                text: 'Este correo ya está registrado.',
            });
        } else {
            const nuevoUsuario = { usuario, correo, contrasena, carrito: [] };
            usuarios.push(nuevoUsuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            usuarioActivo = nuevoUsuario;
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
            actualizarInterfazUsuario();
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: `¡Bienvenido, ${usuario}!`,
                timer: 3000,
                showConfirmButton: false
            });
            modalAutenticacion.classList.add("oculto");
        }
    } else {
        const usuarioEncontrado = usuarios.find(
            u => (u.usuario === usuario || u.correo === usuario) && u.contrasena === contrasena
        );
        if (usuarioEncontrado) {
            usuarioActivo = usuarioEncontrado;
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
            actualizarInterfazUsuario();
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: `¡Bienvenido de nuevo, ${usuarioActivo.usuario}!`,
                timer: 3000,
                showConfirmButton: false
            });
            modalAutenticacion.classList.add("oculto");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Inicio de sesión fallido',
                text: 'Usuario o contraseña incorrectos. Por favor, verifica tus datos.',
            });
        }
    }
});

// Actualizar la interfaz cuando el usuario está activo
function actualizarInterfazUsuario() {
    if (usuarioActivo) {
        nombreUsuario.textContent = usuarioActivo.usuario; 
        nombreUsuario.parentElement.style.display = "flex"; 
        btnSesion.style.display = "none"; 
    } else {
        nombreUsuario.parentElement.style.display = "none";
        btnSesion.style.display = "block";
    }
}

// Cerrar sesión
cerrarSesion.addEventListener("click", () => {
    usuarioActivo = null;
    localStorage.removeItem("usuarioActivo");
    actualizarInterfazUsuario();
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    actualizarInterfazUsuario();
});

// --------------- PRODUCTOS Y CARRITO ----------------

// Variables y elementos del DOM
const contenedorProductos = document.getElementById("contenedorProductos");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const verCarrito = document.getElementById("verCarrito");
const carritoPanel = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const buscadorProductos = document.getElementById("buscadorProductos");
const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
const finalizarCompraBtn = document.getElementById("finalizarCompra");
let productosJSON = []; 

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para cargar productos desde JSON
async function cargarProductos() {
    try {
        const respuesta = await fetch("./productos.json");
        if (!respuesta.ok) {
            throw new Error("Error al cargar los datos");
        }
        productosJSON = await respuesta.json();
        mostrarProductos(productosJSON);
    } catch (error) {
        console.error("Error al cargar los productos:", error);
        contenedorProductos.innerHTML = `<p class="error-carga">Error al cargar los productos. Intenta nuevamente más tarde.</p>`;
    }
}

// Función para mostrar productos
function mostrarProductos(productos) {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");

        // Elementos de control de cantidad
        let cantidad = 1;
        const cantidadElemento = document.createElement("span");
        cantidadElemento.classList.add("cantidad-producto");
        cantidadElemento.textContent = cantidad;

        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.categoria}</p>
            <p>Precio: $${producto.precio.toLocaleString()} COP</p>
        `;

        const botonesCantidad = document.createElement("div");
        botonesCantidad.classList.add("botones-cantidad");

        const botonMenos = document.createElement("button");
        botonMenos.textContent = "-";
        botonMenos.onclick = () => {
            if (cantidad > 1) {
                cantidad--;
                cantidadElemento.textContent = cantidad;
            }
        };

        const botonMas = document.createElement("button");
        botonMas.textContent = "+";
        botonMas.onclick = () => {
            cantidad++;
            cantidadElemento.textContent = cantidad;
        };

        botonesCantidad.appendChild(botonMenos);
        botonesCantidad.appendChild(cantidadElemento);
        botonesCantidad.appendChild(botonMas);
        divProducto.appendChild(botonesCantidad);

        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("agregar-carrito");
        botonAgregar.textContent = "Agregar al carrito";
        botonAgregar.onclick = () => agregarAlCarrito(producto.id, cantidad);
        divProducto.appendChild(botonAgregar);

        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar productos al carrito con cantidad
function agregarAlCarrito(id, cantidad) {
    const producto = productosJSON.find(prod => prod.id === id);
    const productoEnCarrito = carrito.find(prod => prod.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();

    // Actualizar cantidad total en el carrito
    const totalProductos = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    cantidadCarrito.textContent = totalProductos;
}

// Función para mostrar el carrito
function mostrarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
        
        const itemCarrito = document.createElement("li");
        itemCarrito.classList.add("carrito-item");
        itemCarrito.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="carrito-item-detalles">
                <span>${producto.nombre}</span>
                <span>Precio: $${producto.precio.toLocaleString()} COP</span>
                <div class="carrito-item-cantidad">
                    <button onclick="cambiarCantidad(${producto.id}, -1)">-</button>
                    <span>${producto.cantidad}</span>
                    <button onclick="cambiarCantidad(${producto.id}, 1)">+</button>
                </div>
            </div>
            <button onclick="eliminarDelCarrito(${producto.id})" class="btn-cerrar-carrito">X</button>
        `;

        listaCarrito.appendChild(itemCarrito);
    });

    totalCarrito.textContent = `$${total.toLocaleString()} COP`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(prod => prod.id !== id);
    actualizarCarrito();
}

// Función para cambiar la cantidad de productos
function cambiarCantidad(id, cantidad) {
    const producto = carrito.find(prod => prod.id === id);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(prod => prod.id !== id);
        }
        actualizarCarrito();
    }
}

// Evento para mostrar/ocultar el carrito
verCarrito.addEventListener("click", () => {
    carritoPanel.classList.add("activo");
});

cerrarCarrito.addEventListener("click", () => {
    carritoPanel.classList.remove("activo");
});

// Cargar productos al inicio
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    mostrarCarrito();
});

// Filtrar y ordenar productos
document.getElementById("filtroCategoria").addEventListener("change", (e) => {
    const categoria = e.target.value;
    const productosFiltrados = categoria === "todos"
        ? productosJSON
        : productosJSON.filter(prod => prod.categoria === categoria);
    mostrarProductos(productosFiltrados);
});

document.getElementById("ordenarPor").addEventListener("change", (e) => {
    const orden = e.target.value;
    const productosOrdenados = [...productosJSON];
    if (orden === "precioAsc") {
        productosOrdenados.sort((a, b) => a.precio - b.precio);
    } else if (orden === "precioDesc") {
        productosOrdenados.sort((a, b) => b.precio - a.precio);
    }
    mostrarProductos(productosOrdenados);
});

// Función de búsqueda
buscadorProductos.addEventListener("input", (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    const productosFiltrados = productosJSON.filter(prod =>
        prod.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarProductos(productosFiltrados);
});

// Función para vaciar el carrito
vaciarCarritoBtn.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
    Swal.fire({
        icon: 'success',
        title: 'Carrito vaciado',
        text: 'El carrito ha sido vaciado correctamente.',
        timer: 2000,
        showConfirmButton: false
    });
});

// Función para finalizar la compra
finalizarCompraBtn.addEventListener("click", () => {
    if (carrito.length > 0) {
        carrito = [];
        actualizarCarrito();
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: '💪 Gracias por tu compra. ¡Esperamos verte pronto! 🤝',
            timer: 3000,
            showConfirmButton: false
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Carrito vacío',
            text: 'El carrito está vacío. Agrega productos antes de finalizar la compra.',
            timer: 3000,
            showConfirmButton: false
        });
    }
});

// Función para actualizar el contador de productos en el carrito
function actualizarContadorCarrito() {
    const totalProductos = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    cantidadCarrito.textContent = totalProductos;
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    actualizarContadorCarrito();
    cargarProductos();
    mostrarCarrito();
});

// Modificar la función de actualizarCarrito para que también actualice el contador
function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContadorCarrito();
}



