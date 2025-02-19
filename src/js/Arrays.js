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
console.log(arrayVacio2); */

//REMPLAZO DE DATOS EN UN ARRAY
/*
const arrayEmpleado = ["Perla", "Katy", "Keyla", "Kenia"];
arrayEmpleado[1] = "Maria";
arrayEmpleado.push("Marcos");
arrayEmpleado[6] = "Esther";
arrayEmpleado.push("Jose");

for (let i = 0; i < arrayEmpleado.length; i++) {
  console.log(arrayEmpleado[i]);
}*/

// const frutas = ["pera", "melon", "sandia"];
// frutas[1] = "pinia";
// console.log(frutas);

// let frutas2 = [...frutas];
// frutas2[3] = "Banana";
// //console.log(frutas2);
// //console.log(frutas);

// for (let i = 0; i < frutas2.length; i++) {
//   console.log(frutas2[i]);
// }
// frutas2.forEach((element) => {
//   console.log(element);
// });

let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 5],
  [4, 8, 2, 5, 6],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    console.log(i, j);
  }
}

let matrix2 = [
  ["a", "b", "c"],
  [1, 2, 3],
  [
    function () {
      console.log("Hola!!");
    },
  ],
];
//matrix2[2][0]();
matrix2.forEach((arrayUni) => {
  arrayUni.forEach((element) => {});
  console.log(element);
});
