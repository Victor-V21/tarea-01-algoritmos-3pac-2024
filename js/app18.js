/*
Tanques de agua:
Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas
cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
25% se dedica al riego. Diseñe un programa que haga lo siguiente:

Determine la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.
Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27
pies cúbicos.
*/

let tanqueALitros = 100;        //Tanque A en litros
let tanqueBYardasCubicas = 100;     //Tanque B en Yardas Cubicas

tanqueALitros = parseFloat(prompt('Ingrese la cantidad del tanque A en litros:'))
tanqueBYardasCubicas = parseFloat(prompt('Ingrese la cantidad del tanque B en yardas cubicas:'))

let tanqueAMtsCubicos = tanqueALitros / 1000;
let tanqueBMtsCubicos = (tanqueBYardasCubicas / 27) * 0.0283

//  Se calcula el total del agua y calcula el agua de riego y doméstica (mts^3, fts^3)
let aguaTotal = tanqueBMtsCubicos + tanqueAMtsCubicos;

let riegoMtsCubicos = aguaTotal * 0.25;
let riegoPiesCubicos =  (aguaTotal / 0.0283) *.25;

let domésticoMtsCubicos = aguaTotal * 0.75;
let domésticoPiesCubicos =  (aguaTotal / 0.0283) *0.75;

console.log(`El agua del Tanque A es: ${tanqueALitros} lts | ${tanqueAMtsCubicos} mts^3`)
console.log(`El Agua del tanque B es: ${tanqueBYardasCubicas} yds^3 | ${tanqueBMtsCubicos.toFixed(1)} mts^3`);

console.log(`\nAgua en total por ambos tanques: ${aguaTotal.toFixed(2)} mts^3`)

console.log(`\nAgua dedicada al reigo: ${riegoMtsCubicos.toFixed(3)} mts^3 | ${riegoPiesCubicos.toFixed(3)} fts^3`);
console.log(`Agua dedicada al consumo doméstico: ${domésticoMtsCubicos.toFixed(3)} mts^3 | ${domésticoPiesCubicos.toFixed(3)} fts^3`);
