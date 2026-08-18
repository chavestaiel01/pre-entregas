
function calcularDescuento(precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  const precioFinal = precio - descuento;
  return precioFinal;
}

function obtenerPorcentaje(tipoCliente) {
  if (tipoCliente === "vip") {
    return 20;
  } else if (tipoCliente === "regular") {
    return 10;
  } else {
    return 0;
  }
}

const mostrarResultado = (mensaje) => {
  console.log(mensaje);
  alert(mensaje);
};

let totalCompras = 0;
const cantidadPlantas = 3; 

for (let i = 1; i <= cantidadPlantas; i++) {
  const nombrePlanta = prompt("Ingresá el nombre de la planta " + i + ":");
  const precio = Number(prompt("Ingresá el precio de " + nombrePlanta + ":"));
  const tipoCliente = prompt("¿Qué tipo de cliente sos? (vip / regular / nuevo)");

  const porcentaje = obtenerPorcentaje(tipoCliente);
  const precioFinal = calcularDescuento(precio, porcentaje);

  totalCompras = totalCompras + precioFinal;

  mostrarResultado(
    nombrePlanta + ": descuento " + porcentaje + "%, precio final " + precioFinal
  );
}

mostrarResultado("Compra finalizada en Mis Plantitas. Total: " + totalCompras);