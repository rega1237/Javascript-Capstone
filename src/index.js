import { getData, pokemnData, pokemonShow } from './home';
import './style.css';

let pokemons = pokemnData();
console.log(pokemons)
pokemonShow(pokemons);