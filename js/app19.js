/*
La compra:
Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
calcule el precio total a pagar por la compra.
*/

let precioProducto = 0;
let valorIVA = 0;
let IVA = 0;
let total = 0;

precioProducto = parseFloat(prompt('Ingrese el precio del producto en Lempiras: '))
valorIVA =parseFloat(prompt('Ingrese el porsentaje(%) del IVA:'))

IVA = precioProducto * valorIVA/100;

total = precioProducto + IVA;

console.log(`Precio del producto: Lps.${precioProducto.toFixed(2)}`);
console.log(`IVA del producto: ${valorIVA.toFixed(2)} %`);
console.log(`El total de la compra es: Lps.${total.toFixed(2)}`);
