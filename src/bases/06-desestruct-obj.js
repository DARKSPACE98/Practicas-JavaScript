
//Desestruracion 
//Asignacion desestructurante
const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//entra en juego AD

//const {nombre, edad, clave} = persona

/* console.log(nombre);
console.log(edad);
console.log(clave); */

//-----------------------------------------

/* console.log(persona.edad);
console.log(persona.clave);
 */
// En este caso le da prioridad al rango creado dentro del scoupe
const usecontext = ( {clave, nombre, edad, rango = 'Capitan'} ) => {

    //const {nombre, edad, clave} = usuario;

    //console.log(nombre,edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -12.3423
        }
    }

}

const {nombreClave, anios, latlng:{ lat, lng}} = usecontext( persona );
//const { lat, lng} = latlng;
;console.log(nombreClave, anios);
console.log(lat,lng);