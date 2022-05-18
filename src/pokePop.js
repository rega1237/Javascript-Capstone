const getArray = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=9';
  const data = await fetch(url);
  return data.json();
};

const getDataLink = async (id) => {
  const data = await getArray();
  const dataLink = data.results[id - 1].url;
  const pokeDataLink = await fetch(dataLink);
  return pokeDataLink.json();
};

const displayPokemon = async (e) => {
  const data = await getDataLink(e.target.id);
  const { name } = data;
  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);
  const img = data.sprites.other.dream_world.front_default;
  const type = data.types[0].type.name;
  const typeUp = type.charAt(0).toUpperCase() + type.slice(1);
  const { abilities } = data;
  const abilitieOneUp = abilities[0].ability.name.charAt(0).toUpperCase()
  + abilities[0].ability.name.slice(1);
  const abilitieTwoUp = abilities[1].ability.name.charAt(0).toUpperCase()
  + abilities[1].ability.name.slice(1);
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const speed = data.stats[5].base_stat;
  const pokeImg = document.querySelector('.poke-img');
  const pokeName = document.querySelector('.poke-name');
  const pokeType = document.querySelector('.poke-type');
  const abilityOne = document.querySelector('.ability-one');
  const abilityTwo = document.querySelector('.ability-two');
  const hpLi = document.querySelector('.hp');
  const attackLi = document.querySelector('.attack');
  const defenseLi = document.querySelector('.defense');
  const speedLi = document.querySelector('.speed');
  pokeImg.setAttribute('src', `${img}`);
  pokeImg.setAttribute('alt', `${nameUp} picture`);
  pokeName.textContent = `${nameUp}`;
  pokeType.textContent = `${typeUp}`;
  abilityOne.textContent = `${abilitieOneUp}`;
  abilityTwo.textContent = `${abilitieTwoUp}`;
  hpLi.innerHTML = `<strong>HP</strong>: ${hp}`;
  attackLi.innerHTML = `<strong>Attack</strong>: ${attack}`;
  defenseLi.innerHTML = `<strong>Defense</strong>: ${defense}`;
  speedLi.innerHTML = `<strong>Speed</strong>: ${speed}`;
};

export default displayPokemon;