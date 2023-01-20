//import { heroes} from './data/heroes'

import heroes, {owners} from "../data/heroes";
//console.log(owners);

//console.log( heroes );

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);


//console.log( getHeroeById(2) );

//FIND NO SIRVE cambiar por FILTER
export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

//console.log( getHeroesByOwner ('Marvel') );

//export default getHeroeById;