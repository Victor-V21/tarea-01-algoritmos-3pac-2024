/*
Área de un círculo:
Solicite el radio de un círculo y calcule su área.
*/

let radio = 0;
let area = 0;

radio = parseFloat(prompt('Ingrese el radio del circulo: '));

area = Math.pow(radio, 2) * Math.PI

console.log(`El area del circulo es : ${area.toFixed(2)} unidaddes^2`);
