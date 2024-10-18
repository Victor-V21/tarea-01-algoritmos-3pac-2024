/*
Cálculo del promedio:
Solicite tres números y calcule su promedio.
*/

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let promedio = .0;

numero1 = parseFloat(prompt('Ingrese el primer numero:'))
numero2 = parseFloat(prompt('Ingrese el segundo numero:'))
numero3 = parseFloat(prompt('Ingrese el tercer numero:'))

promedio = (numero1 + numero2 + numero3) / 3;

console.log(`El promedio de los numeros (${numero1}, ${numero2}, ${numero3}) es : ${promedio.toFixed(2)}`);
