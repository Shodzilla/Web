document.addEventListener('DOMContentLoaded', () => {
  const selectProducto = document.getElementById('producto');
  const inputCantidad = document.getElementById('cantidad');
  const carritoLista = document.getElementById('listaCarrito');
  const totalDisplay = document.getElementById('total');
  const botonAgregar = document.getElementById('agregar');
  const botonProcesarVenta = document.getElementById('procesarVenta');
  let total = 0;

  // Función para agregar productos al carrito
  botonAgregar.addEventListener('click', () => {
    const productoSeleccionado =
      selectProducto.options[selectProducto.selectedIndex];
    const cantidad = parseInt(inputCantidad.value);

    if (!productoSeleccionado.value || cantidad <= 0) {
      alert('Por favor, seleccione un helado y una cantidad válida.');
      return;
    }

    const nombreProducto = productoSeleccionado.textContent;
    const precio = parseFloat(productoSeleccionado.dataset.precio);
    const subtotal = precio * cantidad;

    // Agregar el producto al carrito (lista visual)
    const li = document.createElement('li');
    li.textContent = `${nombreProducto} - Cantidad: ${cantidad} - Subtotal: $${subtotal.toFixed(
      2,
    )}`;
    carritoLista.appendChild(li);

    // Actualizar el total
    total += subtotal;
    totalDisplay.textContent = total.toFixed(2);

    // Limpiar campos
    selectProducto.selectedIndex = 0;
    inputCantidad.value = '';
  });

  // Función para procesar la venta y generar la factura
  botonProcesarVenta.addEventListener('click', () => {
    const carritoItems = carritoLista.querySelectorAll('li');
    if (carritoItems.length === 0) {
      alert('No hay productos en el carrito.');
      return;
    }

    const factura = document.getElementById('factura');
    const detalleFactura = document.getElementById('detalleFactura');
    detalleFactura.innerHTML = '';

    // Copiar los items del carrito a la factura
    carritoItems.forEach((item) => {
      const p = document.createElement('p');
      p.textContent = item.textContent;
      detalleFactura.appendChild(p);
    });

    // Mostrar el total en la factura
    const totalFactura = document.createElement('p');
    totalFactura.textContent = `Total a pagar: $${total.toFixed(2)}`;
    detalleFactura.appendChild(totalFactura);

    // Mostrar la sección de factura
    factura.style.display = 'block';

    // Limpiar s carrito
    carritoLista.innerHTML = '';
    total = 0;
    totalDisplay.textContent = total.toFixed(2);
  });
});
