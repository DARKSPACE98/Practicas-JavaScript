
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

/* console.log(personajes [0]);
console.log(personajes [1]);
console.log(personajes [2]); */

//Tarea
// 1 El primer valor arr se llamara nombre
//2 se llamara setNombre
const usestate = (valor) => {
    return[ valor, ()=>{ console.log('Hola Mundo') } ];

}

const [nombre, setNombre] = usestate('Goku');
console.log( nombre)
setNombre();