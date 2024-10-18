/* 
Suma de dos números:
Escriba un programa que solicite al usuario dos números y muestre la suma de los
mismos.
*/

let numero1 = 0;
let numero2 = 0;
let suma = 0;

numero1 = parseFloat(prompt("Ingrese el primer numero numero: "));
numero2 = parseFloat(prompt("Ingrese un segundo numero: "));

suma = numero1 + numero2;
console.log(`La suma de los numeros es: ${numero1} + ${numero2} = ${suma}`);