/*
Resta de dos números:
Cree un programa que pida dos números y muestre la resta del primero menos el
segundo.
*/

let numero1 = 0;
let numero2 = 0;
let resta = 0;

numero1 = parseFloat(prompt("Ingrese el primer numero numero: "));
numero2 = parseFloat(prompt("Ingrese un segundo numero: "));

resta = numero1 - numero2;

console.log(`La resta de los numeros es: ${numero1} - ${numero2} = ${resta}`);