/*
Concatenación de cadenas:
Capture de forma separada los 2 nombres y los dos apellidos de una persona y luego
almacene en una variable los valores por medio de una concatenación y muéstrelo en la
consola.
*/

let nombre1 = ''
let nombre2 = ''
let apellido1 = ''
let apellido2 = ''
let nombreCompleto = ''

nombre1 = prompt("Ingrese su primer nombre: ");
nombre2 = prompt("Ingrese su segundo nombre: ");
apellido1 = prompt("Ingrese su primer apellido: ");
apellido2 = prompt("Ingrese su segundo apellido: ");

nombreCompleto = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`;

console.log(`Su nombre completo es: ${nombreCompleto}`);