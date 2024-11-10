// Simulación de productos en JSON
const productosJSON = [
    { id: 1, nombre: "Proteína Whey", categoria: "suplementos", precio: 80000, imagen: "./assets/img/proteina.jpg" },
    { id: 2, nombre: "Camiseta Deportiva", categoria: "ropa", precio: 40000, imagen: "./assets/img/camiseta.jpg" },
    { id: 3, nombre: "Mancuernas 10 kg", categoria: "accesorios", precio: 120000, imagen: "./assets/img/mancuernas.jpg" },
    { id: 4, nombre: "Creatina Monohidratada", categoria: "suplementos", precio: 70000, imagen: "./assets/img/creatina.jpg" },
    { id: 5, nombre: "Short Deportivo", categoria: "ropa", precio: 35000, imagen: "./assets/img/short.jpg" },
    { id: 6, nombre: "Cuerda para Saltar", categoria: "accesorios", precio: 15000, imagen: "./assets/img/cuerda.jpg" },
    { id: 7, nombre: "BCAA en Polvo", categoria: "suplementos", precio: 60000, imagen: "./assets/img/bcaa.jpg" },
    { id: 8, nombre: "Leggings Deportivos", categoria: "ropa", precio: 50000, imagen: "./assets/img/leggings.jpg" },
    { id: 9, nombre: "Esterilla de Yoga", categoria: "accesorios", precio: 45000, imagen: "./assets/img/esterilla.jpg" },
    { id: 10, nombre: "Glutamina", categoria: "suplementos", precio: 55000, imagen: "./assets/img/glutamina.jpg" },
    { id: 11, nombre: "Top Deportivo", categoria: "ropa", precio: 30000, imagen: "./assets/img/top.jpg" },
    { id: 12, nombre: "Rodillera Deportiva", categoria: "accesorios", precio: 25000, imagen: "./assets/img/rodillera.jpg" },
    { id: 13, nombre: "Proteína Vegana", categoria: "suplementos", precio: 85000, imagen: "./assets/img/proteina_vegana.jpg" },
    { id: 14, nombre: "Guantes de Entrenamiento", categoria: "ropa", precio: 25000, imagen: "./assets/img/guantes.jpg" },
    { id: 15, nombre: "Kit de Bandas de Resistencia", categoria: "accesorios", precio: 35000, imagen: "./assets/img/bandas.jpg" },
    { id: 16, nombre: "Pre-entrenamiento", categoria: "suplementos", precio: 75000, imagen: "./assets/img/pre_entrenamiento.jpg" },
    { id: 17, nombre: "Sudadera Deportiva", categoria: "ropa", precio: 60000, imagen: "./assets/img/sudadera.jpg" },
    { id: 18, nombre: "Pelota de Pilates", categoria: "accesorios", precio: 30000, imagen: "./assets/img/pelota.jpg" },
    { id: 19, nombre: "Omega 3", categoria: "suplementos", precio: 40000, imagen: "./assets/img/omega3.jpg" },
    { id: 20, nombre: "Mallas Cortas", categoria: "ropa", precio: 25000, imagen: "./assets/img/mallas.jpg" },
    { id: 21, nombre: "Disco de Peso 5 kg", categoria: "accesorios", precio: 20000, imagen: "./assets/img/disco.jpg" },
    { id: 22, nombre: "Multivitamínico", categoria: "suplementos", precio: 35000, imagen: "./assets/img/multivitaminico.jpg" },
    { id: 23, nombre: "Gorra Deportiva", categoria: "ropa", precio: 15000, imagen: "./assets/img/gorra.jpg" },
    { id: 24, nombre: "Balón Medicinal", categoria: "accesorios", precio: 50000, imagen: "./assets/img/balon.jpg" },
    { id: 25, nombre: "Proteína Hidrolizada", categoria: "suplementos", precio: 90000, imagen: "./assets/img/proteina_hidrolizada.jpg" },
    { id: 26, nombre: "Chaqueta Impermeable Deportiva", categoria: "ropa", precio: 75000, imagen: "./assets/img/chaqueta.jpg" },
    { id: 27, nombre: "Rueda Abdominal", categoria: "accesorios", precio: 20000, imagen: "./assets/img/rueda.jpg" },
    { id: 28, nombre: "Aminoácidos Esenciales", categoria: "suplementos", precio: 60000, imagen: "./assets/img/aminoacidos.jpg" },
    { id: 29, nombre: "Pantalón Deportivo", categoria: "ropa", precio: 55000, imagen: "./assets/img/pantalon.jpg" },
    { id: 30, nombre: "Tobillera con Peso", categoria: "accesorios", precio: 15000, imagen: "./assets/img/tobillera.jpg" },
    { id: 31, nombre: "Proteína Caseína", categoria: "suplementos", precio: 70000, imagen: "./assets/img/caseina.jpg" },
    { id: 32, nombre: "Bermudas Deportivas", categoria: "ropa", precio: 30000, imagen: "./assets/img/bermudas.jpg" },
    { id: 33, nombre: "Soporte para Muñeca", categoria: "accesorios", precio: 10000, imagen: "./assets/img/soporte.jpg" },
    { id: 34, nombre: "Proteína Isolate", categoria: "suplementos", precio: 95000, imagen: "./assets/img/isolate.jpg" },
    { id: 35, nombre: "Camiseta de Compresión", categoria: "ropa", precio: 35000, imagen: "./assets/img/compresion.jpg" },
    { id: 36, nombre: "Soga para Escalar", categoria: "accesorios", precio: 120000, imagen: "./assets/img/soga.jpg" },
    { id: 37, nombre: "Proteína con Colágeno", categoria: "suplementos", precio: 85000, imagen: "./assets/img/colageno.jpg" },
    { id: 38, nombre: "Pantaloneta de Correr", categoria: "ropa", precio: 20000, imagen: "./assets/img/pantaloneta.jpg" },
    { id: 39, nombre: "Set de Mancuernas Ajustables", categoria: "accesorios", precio: 250000, imagen: "./assets/img/set_mancuernas.jpg" },
    { id: 40, nombre: "Proteína para Ganar Masa", categoria: "suplementos", precio: 95000, imagen: "./assets/img/ganar_masa.jpg" },
    { id: 41, nombre: "Camiseta sin Mangas", categoria: "ropa", precio: 30000, imagen: "./assets/img/sin_mangas.jpg" },
    { id: 42, nombre: "Saco de Arena", categoria: "accesorios", precio: 80000, imagen: "./assets/img/saco.jpg" },
    { id: 43, nombre: "Glutamina en Cápsulas", categoria: "suplementos", precio: 60000, imagen: "./assets/img/glutamina_capsulas.jpg" },
    { id: 44, nombre: "Gorra Reflectante", categoria: "ropa", precio: 20000, imagen: "./assets/img/gorra_reflectante.jpg" },
    { id: 45, nombre: "Rodillo de Espuma", categoria: "accesorios", precio: 30000, imagen: "./assets/img/rodillo.jpg" },
    { id: 46, nombre: "Proteína para Mujeres", categoria: "suplementos", precio: 85000, imagen: "./assets/img/proteina_mujeres.jpg" },
    { id: 47, nombre: "Calcetines Deportivos", categoria: "ropa", precio: 10000, imagen: "./assets/img/calcetines.jpg" },
    { id: 48, nombre: "Tapete Antideslizante", categoria: "accesorios", precio: 25000, imagen: "./assets/img/tapete.jpg" },
    { id: 49, nombre: "Proteína Post-Entreno", categoria: "suplementos", precio: 70000, imagen: "./assets/img/post_entreno.jpg" },
    { id: 50, nombre: "Sudadera Impermeable", categoria: "ropa", precio: 80000, imagen: "./assets/img/sudadera_impermeable.jpg" }
];

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

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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

// Función para actualizar el carrito y guardarlo en el Storage
function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();

// Actualizar la cantidad total de productos en el botón de Carrito
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

// Cargar los productos al inicio
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productosJSON);
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
    alert("El carrito ha sido vaciado.");
});

// Función para finalizar la compra
finalizarCompraBtn.addEventListener("click", () => {
    if (carrito.length > 0) {
        carrito = [];
        actualizarCarrito();
        alert("💪Gracias por tu compra. ¡Esperamos verte pronto!🤝");
    } else {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
    }
});
