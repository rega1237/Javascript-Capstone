/* eslint-disable no-await-in-loop */

const container = document.querySelector('.items-container');
const pokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0';
let pokemons = [];

const getData = async (Api) => {
  const stored = await fetch(Api);
  const data = stored.json();
  return data;
};

const pokemnData = async () => {
  const data = await getData(pokemonList);
  pokemons = data.results;
  for (let i = 0; i < pokemons.length; i += 1) {
    const pokemonURL = pokemons[i].url;
    const pokemonDetails = await getData(pokemonURL);
    pokemons[i].id = pokemonDetails.id;
    pokemons[i].img = pokemonDetails.sprites.other.dream_world.front_default;
  }
  return pokemons;
};

const pokemonShow = async () => {
  const pokemons = await pokemnData();
  container.innerHTML = '';
  for (let i = 0; i < pokemons.length; i += 1) {
    container.innerHTML += `<article class="pokemon-card">
        <img src="${pokemons[i].img}" alt="${pokemons[i].name}" class="pokemon-img"/>
        <h2 class="pokemon-name">${pokemons[i].name}</h2>
        <a href="#" class="comment" id="${pokemons[i].id}">Comment</a></article>`;
  }
};

export default pokemonShow;
