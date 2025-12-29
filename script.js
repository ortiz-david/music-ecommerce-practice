// CLASE 1: VARIABLES Y SELECTORES

// 1. Variables para guardar información
let productosEnCarrito = 0;
let totalCarrito = 0;

// 2. Seleccionar elementos del HTML
const contadorCarrito = document.getElementById('contador-carrito');
const totalElemento = document.getElementById('total-carrito');
const botonVaciar = document.getElementById('vaciar-carrito');

// 3. Seleccionar TODOS los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.producto_boton');

// CLASE 2: FUNCIONES BÁSICAS
// Función para actualizar el carrito en pantalla
function actualizarCarrito() {
    contadorCarrito.textContent = `Productos: ${productosEnCarrito}`;
    totalElemento.textContent = `Total: $${totalCarrito.toFixed(2)}`;
}

// Función para agregar producto
function agregarAlCarrito(precio) {
    productosEnCarrito++;  // Aumentar contador
    totalCarrito += precio; // Sumar precio
    
    // Mostrar mensaje en consola (para probar)
    console.log(`✅ Producto agregado! Precio: $${precio}`);
    console.log(`🛒 Total en carrito: $${totalCarrito}`);
    
    actualizarCarrito(); // Actualizar pantalla
}

// Función para vaciar carrito
function vaciarCarrito() {
    productosEnCarrito = 0;
    totalCarrito = 0;
    alert("🗑️ Carrito vaciado!");
    actualizarCarrito();
}

// CLASE 3: EVENT LISTENERS (ESCUCHAR EVENTOS)

// 4. Agregar evento a CADA botón
botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', function() {
        // Precios fijos para cada producto (por ahora)
        const precios = [399.99, 599.99, 799.99, 899.99, 699.99, 299.99];
        agregarAlCarrito(precios[index]);
    });
});

// 5. Evento para vaciar carrito
botonVaciar.addEventListener('click', vaciarCarrito);

// Mensaje inicial
console.log("🎸 Tienda Allegro lista!");
console.log("🖱️ Haz clic en cualquier producto para agregarlo al carrito");