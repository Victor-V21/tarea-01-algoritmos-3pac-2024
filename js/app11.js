/*
Verificación de un número primo:
Pida un número y verifique si es primo o no.
*/

let numero = 0;

numero = Math.abs(parseInt(prompt('Ingrese un numero: ')));


for ( let i = 2; i < numero; i++)
{
    if ( numero % i == 0){
        console.log(`El numero ${numero} NO ES primo`);
        break;

    }else if ( numero - 1 == i)
    {
        console.log(`El numero ${numero} ES primo`)
    }
}