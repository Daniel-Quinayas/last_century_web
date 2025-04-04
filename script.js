let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    lista.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toLocaleString()} COP`;
        lista.appendChild(li);
    });
    totalElemento.textContent = total.toLocaleString();
}
