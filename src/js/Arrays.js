/*
const arrayTipos = [
  "Leon",
  { genero: "Hembra" },
  function () {
    console.log("Hola mundo");
  },
  false,
  43,
];

console.log(arrayEmpleado);
console.log(arrayTipos[2]);

//CREACION DE ARRAYS VACIOS

let arrayVacio = new Array();
let arrayVacio2 = [];
console.log(arrayVacio);
console.log(arrayVacio2);*/

//REMPLAZO DE DATOS EN UN ARRAY
const arrayEmpleado = ["Perla", "Katy", "Keyla", "Kenia"];
arrayEmpleado[1] = "Maria";
arrayEmpleado.push("Marcos");
arrayEmpleado[6] = "Esther";
arrayEmpleado.push("Jose");

for (let i = 0; i < arrayEmpleado.length; i++) {
  console.log(arrayEmpleado[i]);
}
