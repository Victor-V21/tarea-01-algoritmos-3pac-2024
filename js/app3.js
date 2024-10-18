/*
Multiplicación y División:
Solicite dos números al usuario y muestra el resultado de la multiplicación y división de
los mismos.
*/


let numero1 = 0;
let numero2 = 0;
let multiplicacion = 0;
let division = 0;

numero1 = parseFloat(prompt("Ingrese el primer numero numero: "));
numero2 = parseFloat(prompt("Ingrese un segundo numero: "));

multiplicacion = numero1 * numero2;
division = numero1 / numero2;

console.log(`La multiplicación de los numeros es: ${numero1} * ${numero2} = ${multiplicacion}`);
console.log(`La división de los numeros es: ${numero1} / ${numero2} = ${division}`);