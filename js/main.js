
const inventarioPlantas = ["Cactus", "Suculenta", "Helecho", "Orquídea", "Rosa"];

inventarioPlantas.push("Bambú de la suerte");

inventarioPlantas.unshift("Lavanda");

const plantaEliminada = inventarioPlantas.pop();
console.log("Se ha eliminado el elemento: " + plantaEliminada);

function mostrarInventario(array) {
  console.log("--- Inventario actual de Mis Plantitas ---");
  for (const planta of array) {
    console.log("Producto: " + planta);
  }
}

mostrarInventario(inventarioPlantas);

const plantaBuscada = prompt("¿Qué planta querés buscar en el inventario?");

if (inventarioPlantas.includes(plantaBuscada)) {
  const posicionEncontrada = inventarioPlantas.indexOf(plantaBuscada);
  console.log(
    "La planta \"" + plantaBuscada + "\" está en el inventario, en la posición " + posicionEncontrada + "."
  );
} else {
  console.log("La planta \"" + plantaBuscada + "\" no está en el inventario.");
}

const indiceAActualizar = Number(
  prompt("Ingresá el índice del inventario que querés actualizar (0 a " + (inventarioPlantas.length - 1) + "):")
);

if (indiceAActualizar >= 0 && indiceAActualizar < inventarioPlantas.length) {
  const nuevoValor = prompt("Ingresá el nuevo nombre para esa posición:");
  inventarioPlantas.splice(indiceAActualizar, 1, nuevoValor);
  console.log("Se actualizó la posición " + indiceAActualizar + " con: " + nuevoValor);
  mostrarInventario(inventarioPlantas);
} else {
  console.log("Índice fuera de rango, no se realizó ninguna actualización.");
}

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

  if (inventarioPlantas.includes(nombrePlanta)) {
    console.log(nombrePlanta + " está disponible en el inventario.");
  } else {
    console.log(nombrePlanta + " no figura en el inventario, pero se registra la compra igual.");
  }

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