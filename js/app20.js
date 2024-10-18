/*
El combustible:
Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
por su carro y el número de litros consumidos . El script debe mostrar el consumo de
combustible por kilómetro.
*/

let kmRecorridos = 0;
let ltsConsumidos = 0;
let consumoPorKm = 0;

kmRecorridos = parseFloat(prompt('Ingrese la cantidad de kilometros recorridos'))
ltsConsumidos = parseFloat(prompt('Ingrese la cantidad de litros de combustible consumidos'))

consumoPorKm = ltsConsumidos / kmRecorridos

console.log(`Combustible consumido por kilometro: ${consumoPorKm} lts.`)