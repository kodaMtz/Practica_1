//TIPOS DE ERRORES
//console.log(y); // La variable y no esta definida

//const num = 10;
//num();  // El num no es una funcion

//const miArray = new Array(-3); // range Error

// RefereneceError
/*
function scope(x, y) {
  if (x > 0) {
    let res = x - y;
  }
  return res;
}

console.log(scope(4, 5));    */
/*
let miObjeto = {
  nombre: "juan",
};
console.log(miObjeto.nombre);
*/
/*
try {
  throw new Error("Este es un error!");
  //Todo codigo que exista de bajo de un objeto error, ya no se ejecuta
} catch (Error) {
  console.error(Error.)
}*/
/*
try {
  throw new Error("Este es un error!");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Se ejecuta exista o no un error!");
}

try {
  try {
    throw new Error("Este es un error interno");
  } catch (error) {
    console.error(error.message);
    throw new Error("Este es un error externo");
  } finally {
    console.log("Yo me ejecuto haya o no un error");
  }
} catch (errorExterno) {
  console.error(errorExterno.message);
}
*/

/**
 * length
 * to Upper Case
 * to Lower Case
 * IndexOff
 * LastIndexOff
 * Includes
 * startWith
 * EndWith
 * slice
 * substring
 * codePonAt
 * trim
 * repeat
 */

let frase = "El respeto al derecho ajeno es la paz.";
console.log(frase.repeat());
