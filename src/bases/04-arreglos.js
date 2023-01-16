
//Arreglos en 25
//const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
//Ya no se utiliza push para ordenar y ahora se utiliza Spread
//arreglo.push( 1 )
//arreglo.push( 2 )
//arreglo.push( 3 )
//arreglo.push( 4 )

let arreglo2 = [...arreglo, 5];
//arreglo2.push( 5 );
// El METODO MAP copia y modifica el array anterior y crea uno completamente nuevo modificado
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2 ;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );


