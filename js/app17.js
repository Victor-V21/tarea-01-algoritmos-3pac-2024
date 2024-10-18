/*
Unidades de medida:
Dada una cantidad expresada en pies, y otra en metros. Determinar la suma pero
convertida a pulgadas, a yardas, a metros y a millas por separado. Considere las
siguientes equivalencias.
1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas.
*/

let piesA = 0;
let metrosB = 0;

piesA = parseFloat(prompt('Ingrese la primera medida en pies ft'))
metrosB = parseFloat(prompt('Ingrese la segunda medida en metros m'))

let pulgadasA = piesA * 12
let pulgadasB = metrosB /0.0254 

let sumaMetros = (pulgadasA * 0.0254) + metrosB   // metros = metrosA + metrosB
let sumaPulgadas = pulgadasA + pulgadasB
let sumaYardas = (piesA / 3) + ((pulgadasB / 12) / 3)   // yardas = (yardasA) + ((piesB) / 3)
let sumaMillas = (pulgadasA * 0.0254) / 1609 + metrosB / 1609   // Millas = (metrosA)/1609 + millasB

console.log('Suma en Metros: '+sumaMetros+' m');
console.log('Suma en Pulgadas: '+sumaPulgadas+' "');
console.log('Suma en Yardas: '+sumaYardas+' yd');
console.log('Suma en Millas: '+sumaMillas+' mi');
