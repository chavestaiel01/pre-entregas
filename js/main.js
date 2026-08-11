
const CAPACIDAD = 3;
let ingresaron = 0;

while (ingresaron < CAPACIDAD) {
  const edad = Number(prompt("Ingresá tu edad:"));
  const entrada = prompt("¿Tenés entrada válida? (si/no)");
 
  if (edad < 18) {
    console.log("Acceso denegado: sos menor de edad");
  } else if (entrada !== "si") {
    console.log("Acceso denegado: no tenés entrada válida");
  } else {
    ingresaron++;
    console.log("Bienvenido al recital. Ingresaron: ${ingresaron}/${CAPACIDAD}");
  }
}

console.log("Cupo completo. Se cerraron las puertas");