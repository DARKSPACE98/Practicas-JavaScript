// Variables y constantes 
// const pueden ser variables que no van a cambiar

const nombre ='Enrique';
const  apellido = 'Barraza'
//No es necesario volver a poner un let para actualizar la informacion de la variable
let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado)
// Si creas un if y utilizar un console log para la variable ya declarada solo existe dentro del IF 
if (true) {
    const nombre ='Peter';
    console.log(nombre)
}

console.log(valorDado)