//ESTRUCTURAS DE CONTROL CICLICAS
/*
for (let i = 2; i < 15; i += 2) {
  console.log(i);
}

const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];

for (let i = 0; i < nombreFruta.length; i += 2) {
  console.log(nombreFruta[i]);
}

//REALIZAR LA SUMA DE LOS NUMEROS DEL 1 AL 10
// MOSTRANDO EL RESULTADO AL FINAL.
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}
console.log(suma);*/

/**
 * CREAR UN PROGRAMA
 */
/*
let nombre = "pinia";
const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];

for (let i = 0; i < nombreFruta.length; i++) {
  if (nombreFruta[i] === nombre) {
    console.log("Encontrado");
    continue;
  }
  console.log(nombreFruta[i]);
}

let suma = 0;
for (let i = 2; i <= 10; i += 2) {
  if (i % 2 !== 0) {
    continue;
  }
  suma += i;
}
console.log(suma);
*/

//FOR IN
/*
const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];

for (const fruta in nombreFruta) {
  if (Object.prototype.hasOwnProperty.call(nombreFruta, fruta)) {
    console.log(` ${fruta} => ${nombreFruta[fruta]}`);
  }
}

const ciudades = {
  MEX: "MEXICO",
  EU: "ESTADOS UNIDOS",
  ES: "ESPANIA",
  JS: "JAPON",
  CA: "CANADA",
};

for (const nombrePais in ciudades) {
  if (Object.prototype.hasOwnProperty.call(ciudades, nombrePais)) {
    console.log(`${nombrePais} --> ${ciudades[nombrePais]}`);
  }
}
*/

//FOR OFF
/*
const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];

for (const fruta of nombreFruta) {
  console.log(fruta);
}

const ciudades = {
  MEX: "MEXICO",
  EU: "ESTADOS UNIDOS",
  ES: "ESPANIA",
  JS: "JAPON",
  CA: "CANADA",
};
// FOR OR SOLO ME PODRA SER UTILIZABLE CUANDO LOS DATOS SEAN ITERABLES.
/*for (const nombreCiu of ciudades) {
  console.log(nombreCiu);
}*/
/*
nombreFruta.forEach((element) => {
  console.log(element);
});*/

//WHILE
/*
const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];
let i = 1;
while (i < nombreFruta.length) {
  console.log(nombreFruta[i]);
  i += 2;
}*/
/*
const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];
let i = 0;
do {
  console.log(nombreFruta[i]);
  i++;
} while (i < nombreFruta.length);
*/
/**
 * ESCRIBIR UN PROGRAMA
 * QUE PREGUTE AL USUARIO SU EDAD
 * Y LE DIGA AL USUARIO QUE YA PUEDE VOTAR
 * CUANDO YA TENGA 18
 */
/*
const edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >= 18) {
  alert("Usted ya puede votar");
} else {
  alert("Usted aun es menor de edad");
}*/

/**
 * ESCRIBIR UN PROGRAMA QUE ALMACENE LA
 * CONTRASENIA EN UNA VARIABLE,
 * PREGUNTE AL USUARIO POR LA CONTRASENIA
 * E IMPRIMA POR PANTALLA SI LA CONTRASENIA
 * INTRODUCIDAD POR EL USUARIO COINCIDA.
 */
/*
const password = "macaco90";

if (password.trim() === "macaco90") {
  console.log("listo");
} else {
  console.log(`Vayase de aqui prro`);
}
*/
/**
 * ESCRIBA EN PROGRAMA
 * QUE PIDA AL USUARIO DOS NUMEROS
 * Y MUESTRE POR PANTALLA SU DIVISION,
 * VALIDANDO QUELE NUMERO 2 NO SEA CERO
 */

/*
const num1 = prompt("Ingrese su num1");
const num2 = prompt("Ingrese su num2");
let resultado = 0;
if (num2 == 0) {
  alert("El numero 2 no puede ser 0");
} else {
  resultado = num1 / num2;
  alert(` tu resultado es ${resultado}`);
}*/

/**
 * ESCRIBIR EN PANTALLA QUE PIDA
 * AL USUARIO UN NUMERO ENTERO
 * Y MUESTRE POR PANTALLA SI ES IMPAR O PAR
 */

/*
const num1 = 2;
const numEnteros = [34, 67, 2, 8, 9, 4];

for (let i = 0; i < numEnteros.length; i++) {
  if (numEnteros[i] % 2 === 0) {
    console.log(`El numero ${numEnteros[i]} => par`);
  } else {
    console.log(`El numero ${numEnteros[i]} => impar`);
  }
}

numEnteros.forEach((element) => {
  console.log(
    element % 2 === 0 ? `${element} => es par` : `${element} => es impar`
  );
});*/

/**
 * Repetir la palabra 10 veces
 */

/*
const word = "Hola";

console.log(word.repeat(10));
*/

/**
 * Escribir un programa
 * que un usuario escriba su edad
 * y que indique todos los anios
 * que han cumplido
 */
/*
const edad = 21;
for (let index = 1; index <= edad; index++) {
  console.log(` Usted a cumplido ${index}`);
}
*/
/**
 * escribir un programa
 * que pida al usuario un numero entero positivo
 * y muestre por pantalla todos los numeros
 * impares desde 1 hasta dicho numero
 * separado por comas.
 */
/*
let numero = 45;
let resultado = "";

for (let index = 1; index < numero; index++) {
  if (index % 2 !== 0) {
    resultado += index + ", ";
  }
}
console.log(resultado.slice(0, -2));
*/
/**
 * escriba por pantalla
 * la tabla de multiplicar
 * de un numero
 */

/*
let numero = 2;
let resultado = 0;
for (let index = 0; index <= 10; index += 2) {
  resultado = numero * index;
  console.log(`${numero} * ${index} = ${resultado}`);
}
*/

/**
 * escribir un programa
 * que pida al usuario una paabra
 * y que imprima
 */

let palabra = "BIENVENIDO A NUEVA YOL";
let Num = palabra.length;
let palabrModif = palabra.substring(1) + palabra.charAt(Num);
console.log(palabrModif);
