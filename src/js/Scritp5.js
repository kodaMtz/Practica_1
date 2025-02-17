/**
 * CREAR UN PROGRAMA EN JAVASCRIPT5
 * QUE PERMITA CALCULAR EL AREA DE
 * UN TRIANGULO;
 */
/*const base = parseFloat(prompt("Ingresa la base de triangulo:"));
const altura = parseFloat(prompt("Ingresa la altura de triangulo:"));
console.log(base + altura);*/
//////////////////////////////////////////////////////////////////////////
//Convertir cadena JSON en un objeto
let jsonString =
  '{"Nombre": "Bulbasor", "Poder":"hoja afilada", "habilidad": "absorber" }';
let objPokemon = JSON.parse(jsonString);

//console.log(objPokemon.Nombre);

//Parse int
let edad = parseInt("45");
//console.log(edad);

//Parse float
let altura = parseFloat("1.70");
//console.log(altura);

//Fecha en milisegundos
const birthday = "2001/05/14";
let fecha = Date.parse(birthday);
//console.log(fecha);

let msg = " ";
if (msg != null && msg.length === 1 && msg != " ") {
  let caracter = msg.charAt(0);
  console.log("Tu caracter es: ", caracter);
} else {
  console.log("Ingresa un valor valido");
}
