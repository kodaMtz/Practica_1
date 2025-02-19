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

const nombreFruta = ["mango", "pinia", "Melocoton", "durazno", "nanche"];
let i = 0;
do {
  console.log(nombreFruta[i]);
  i++;
} while (i < nombreFruta.length);
