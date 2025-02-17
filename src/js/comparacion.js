//OPERADORES DE COMPARACION
/*
console.log(4 == 4); //True
console.log(4 == "4"); // True
console.log(4 === "4"); //false
console.log(4 === 4);*/
/*
console.log(4 !== "4"); //Si son iguales
console.log(4 !== 4); //No son iguales
*/
/*
const a = 35;
const b = 23;

console.log(a >= b);
*/

//OPERADORES LOGICOS
/*
const on = true;
const open = false;

console.log(on && open);
console.log(on || open);
console.log(!open);
*/

//OPERADORES BINARIOS

/**
 * && AND
 * | OR
 * ^ XOR
 * ~ NOT
 * << LEFT SHIFT
 * >> RIGHT SHIFT
 * >>>RIGHT SHIFT SIGNO
 */

/**
 * TALADE DE VERDAD
 *
 * A   B   AND     OR  XOR  NOT-AND  NOT-OR  NOT-XOR
 * 0   0    0      0    0      1        1       1
 * 0   1    0      1    1      1        0       0
 * 1   0    0      1    1      1        0       0
 * 1   1    1      1    0      0        0       1
 *
 *
 */
/*
let num1 = 4;
console.log(num1 << 2);
*/

//OPERADOR (COMA) (,)
/*
let arrayEstatura = [156, 198, 148, 178];
console.log(arrayEstatura.length);
console.log(arrayEstatura.push(134, 166), arrayEstatura.length);
let a = 3 + 4,
  b = 7 + 2,
  c = 12 + 1;

console.log(((a **= 2), `valor de a = ${a}`));
*/
/*
//OPERADOR TERNARIO
let a = 45,
  b = 23;

if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${b} es mayor que ${a}`);
}

// condicion ? valor1: valor2
let resultado = a > b ? `${a} es mayor que ${b} ` : `${b} es mayor que ${a}`;
console.log(resultado);
*/

//OPERADOR NULLISH COALESCING
/*
let a = 48;
let z = 12;

let result = a ?? z;
console.log(result);
*/

//Cliente.edad != null         v||v||v||v
//cliente.edad !== ""          v||v||v
//cliente.edad !== " "         v||v
//cliente.edad !== undefined   v

const cliente = {
  nombre: "Jorge",
  edad: 22,
  direccion: "",
  numeroTelefono: "9512224788",
};

const datosClienteFinal = {
  nombre: cliente.nombre ?? "invitado",
  edad:
    Cliente.edad != null &&
    cliente.edad !== "" &&
    cliente.edad !== " " &&
    cliente.edad !== undefined
      ? cliente.edad
      : 18,
  direccion: cliente.direccion ?? "xoxocotlan",
  numeroTelefono: cliente.numeroTelefono ?? "S/N",
};

console.log(datosClienteFinal);
