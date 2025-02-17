const objDate = new Date();
//Fecha completa con hora estandar central
console.log(`Fecha completa: ${objDate}`);
//Solo fecha
console.log(`Solo fecha: ${objDate.toDateString()}`);
//Recuperacion solo con el año
console.log(`Solo año: ${objDate.getFullYear()}`);
//Recuperacion de mes
console.log(`Solo mes: ${objDate.getMonth() + 1}`);
//Recuperar el num del dia de la semana
console.log(`Num de dia: ${objDate.getDay()}`);
//Recuperar el dia
console.log(`dia: ${objDate.getDate()} `);
//Recuperar hora
console.log(`Hora/min/seg: ${objDate.toLocaleTimeString()}`);

//FORMATO PARA LAS FECHAS
// YYYY - MM - DD
// YYYY / MM / DD

const date1 = new Date("2025-02-11");
console.log(date1);

const date2 = new Date("2025/02/11");
console.log(date2);
