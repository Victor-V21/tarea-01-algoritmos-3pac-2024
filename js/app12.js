/*
Calculadora simple:
Cree una calculadora que permita al usuario realizar operaciones básicas (suma, resta,
multiplicación, división) con dos números.
*/

let numero1 = 0;
let numero2 = 2;
let operacion = '';
let resultado = 0;

numero1 = parseFloat(prompt('Ingrese el primer numero'));
operacion = prompt('Ingrese la operacion a realizar digitando cualquiera de esto simbolos (+, -, *, /)');
numero2 = parseFloat(prompt('Ingrese el segundo numero'));

switch (operacion) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    default:
        break;
}

console.log(`El resultado de su operacion es: ${resultado}`);
