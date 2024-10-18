/*
Área de un triángulo:
Pida la base y la altura de un triángulo y calcula su área.
*/

let altura = 0;
let base = 0;
let area = 0;

altura = parseFloat(prompt("Ingrese la altura del triangulo: "));
base = parseFloat(prompt("Ingrese la base del triangulo: "));

area = base * altura / 2;

console.log("El Área del triángulo es: " + area)