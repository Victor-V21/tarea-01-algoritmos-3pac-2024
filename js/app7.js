/*
Verificación de par o impar:
Pida un número al usuario y determina si es par o impar.
*/

let numero = 0;

numero = parseInt(prompt('Ingrese un numero:'))

if ( numero % 2 == 0){
    console.log(`El numero ${numero} es PAR`);
}else{
    console.log(`El numero ${numero} es IMPAR`);
}