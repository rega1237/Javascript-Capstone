/* eslint-disable no-await-in-loop */

const container = document.querySelector(".items-container");
const pokemonList = "https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0";
const likeApi =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/likes";
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

const likesShow = async () => {
  const likes = await getData(likeApi);
  const pokemons = await pokemnData();
  for (let i = 0; i < likes.length; i += 1) {
    for (let x = 0; x < pokemons.length; x += 1) {
      if (likes[i].item_id == pokemons[x].id) {
        pokemons[x].likes = likes[i].likes;
      }
    }
  }
  return pokemons;
}

const pokemonShow = async () => {
  const pokemons = await likesShow();
  container.innerHTML = "";
  for (let i = 0; i < pokemons.length; i += 1) {
    container.innerHTML += `<article class="pokemon-card">
        <img src="${pokemons[i].img}" alt="${
      pokemons[i].name
    }" class="pokemon-img"/>
        <h2 class="pokemon-name">${pokemons[i].name.toUpperCase()}</h2>
        <p class="likes-counter">${pokemons[i].likes} likes</p>
        <a href="#" class="comment" id="${
          pokemons[i].id
        }">Comment</a></article>`;
  }
};

export default pokemonShow;
// dXDIQAnIOHUjELoXSV9S;
