/*
Celsius a Fahrenheit:
Pida una temperatura en grados Celsius y convierta a grados Fahrenheit.
*/

let tempCelsius =  .0;
let tempFahrenheit = .0;

tempCelsius = parseFloat(prompt('Ingrese la temperatura en grados celcsius °C'));

tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log(`La temperatura ${tempCelsius.toFixed(2)}°C equivale a ${tempFahrenheit.toFixed(2)}°F `);
