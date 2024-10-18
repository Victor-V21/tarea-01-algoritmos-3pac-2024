/*
Verificación de contraseña:
Pida al usuario que ingrese una contraseña y verifique si coincide con una contraseña
predefinida.
*/

const contraseñaPredef = "chanchito123";

let contraseña = prompt('Ingrese la contraseña: ');

if ( contraseña == contraseñaPredef)
{
    console.log('Ha ingresado correctamente su contraseña')
}else{
    console.log('Ha ingresado erroneamente su contraseña')
}