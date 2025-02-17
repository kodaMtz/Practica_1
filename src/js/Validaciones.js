// VALIDACIONES DE NUMEROS

const edad = "22";

if (edad.trim() != "") {
  if (isNaN(edad)) {
    console.log("Debes ingresar un valor numerico!");
  } else {
    console.log("Felicidades tu edad es: " + parseInt(edad));
  }
} else {
  console.log("Ingresa un valor");
}
