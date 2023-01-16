//Template string


const nombre ='Enrique';
const apellido = 'Barraza';


//const nombreCompleto1 = 1 + 1;
const nombreCompleto = `${nombre} ${apellido}`;


console.log(nombreCompleto);

//console.log(nombreCompleto1);
function  getSaludo(nombre){
    return ' Hola ' + nombre;

}

console.log(`Este es un texto: ${getSaludo (nombre)}`);