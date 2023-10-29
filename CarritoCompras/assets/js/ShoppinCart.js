let carrito = [];
let total = 0;

function agregarProducto(precio) {
    const cantidad = parseInt(prompt('Ingrese la cantidad de productos:', 1)) || 1;
    const subtotal = precio * cantidad;
    carrito.push({ precio, cantidad, subtotal });
    total += subtotal;
    actualizarCarrito();
}

function modificarProducto() {
    const index = parseInt(prompt('Ingrese el número del producto que desea modificar:', 1)) - 1;
    if (index >= 0 && index < carrito.length) {
        const nuevaCantidad = parseInt(prompt(`Ingrese la nueva cantidad para el Producto ${index + 1}:`, 1)) || 1;
        const nuevoSubtotal = carrito[index].precio * nuevaCantidad;
        total += nuevoSubtotal - carrito[index].subtotal;
        carrito[index] = { ...carrito[index], cantidad: nuevaCantidad, subtotal: nuevoSubtotal };
        actualizarCarrito();
    } else {
        alert('Número de producto inválido');
    }
}

function quitarProducto(index) {
    total -= carrito[index].subtotal;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoList = document.getElementById('carrito-list');
    const totalElement = document.getElementById('total');
    carritoList.innerHTML = '';
    carrito.forEach((producto, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Producto ${index + 1} - $${producto.precio} x ${producto.cantidad} = $${producto.subtotal}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = function() {
            modificarProducto(index);
        };
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            quitarProducto(index);
        };
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        carritoList.appendChild(listItem);
    });
    totalElement.textContent = total;
}
