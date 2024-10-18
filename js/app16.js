/*
Atletas:
Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y
segundos. Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos
y segundos.
*/

let segAtleta1 = 0
let minAtleta1 = 0
let segAtleta2 = 0
let minAtleta2 = 0

let hh=0, mm=0, ss=0;

segAtleta1 = parseInt(prompt('Ingrese Los SEGUNDOS del primer atleta: '));
minAtleta1 = parseInt(prompt('Ingrese Los MINUTOS del primer atleta: '));
segAtleta2 = parseInt(prompt('Ingrese Los SEGUNDOS del segundo atleta: '));
minAtleta2 = parseInt(prompt('Ingrese Los MINUTOS del segundo atleta: '));

ss = segAtleta1 + segAtleta2;
mm = minAtleta1 + minAtleta2;

//Calculos de las horas, minutos y segundos totales
mm = mm + Math.floor(ss/60)
ss = ss % 60;

hh = Math.floor(mm/60)
mm = mm % 60;

/*  // Algoritmo Extenso para calcular horas, minutos y segundos en total
let flag = 0;

do {
    if (ss>=60){
        mm++;
        ss -= 60;
    }else (
        flag = 1
    )
} while (flag == 0);

flag = 0;
do {
    if (mm>=60){
        hh++;
        mm -= 60;
    }else (
        flag = 1
    )
} while (flag == 0);
*/
console.log(`Datos del Atleta 1, min:${minAtleta1}, seg:${segAtleta1}`);
console.log(`Datos del Atleta 2, min:${minAtleta2}, seg:${segAtleta2}`);

console.log(`El tiempo total que suman los dos es de: ${hh}:${mm}:${ss}`);
