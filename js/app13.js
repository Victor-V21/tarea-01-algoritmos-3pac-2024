/*
Cambio de moneda:
Pida al usuario una cantidad en dólares y convertirla a lempiras utilizando el tipo de
cambio actual.
*/

let dolares = 0;
let lempiras = 0;

dolares = parseFloat(prompt('Ingrese una cantidad de dolares'));

lempiras = dolares * 24.84;     //Conversion del dia 13 de octubre del 2024

console.log(`${dolares}\$ = Lps.${lempiras}`);