

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip: 232435,
        lat: 14.234,
        log: 54.123445
    }
    
};

//console.table( {persona} );
//Spread linea de abajo---
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)