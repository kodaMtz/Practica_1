//ESTRUCTURAS DE CONTROL
const diaSemana = {
  lunes: 1,
  martes: 2,
  miercoles: 3,
  Jueves: 4,
  Viernes: 5,
  Sabado: 6,
  Domingo: 7,
};
/*
const diaActual = new Date().getDay();
if (diaActual === diaSemana.miercoles) {
  console.log("No te cases ni te embarques");
} else {
  console.log("Animo, es una buena semana!!!");
}*/
/*
const diaActual = new Date().getDay();

if (diaActual === diaSemana.Jueves) {
  console.log("Martes no te cases ni te embarques");
} else if (diaActual === diaSemana.Jueves) {
  console.log("Animo, es una buena semana");
} else {
  console.log("Felicidades te mereces una buena semana");
}*/

/**
 * Crear una calculadora Basica.
 */
/*
const num1 = 34;
const num2 = 12;
const operador = "+";

switch (operador) {
  case "+":
    let suma = num1 + num2;
    console.log(`${num1} + ${num2} = ${suma}`);
    break;

  case "-":
    let resta = num1 - num2;
    console.log(`${num1} + ${num2} = ${resta}`);
    break;

  case "*":
    let Multi = num1 * num2;
    console.log(`${num1} + ${num2} = ${Multi}`);
    break;

  case "/":
    let division = num1 / num2;
    console.log(`${num1} + ${num2} = ${division}`);
    break;

  case "%":
    let Modulo = num1 % num2;
    console.log(`${num1} + ${num2} = ${Modulo}`);
    break;

  default:
    console.log("Operador invalido");
    break;
}*/

const valor = 5;

switch (valor) {
  case "2":
    console.log(2);
    break;

  default:
    console.log("Default");
    break;

  case 1:
    console.log("1");
}
