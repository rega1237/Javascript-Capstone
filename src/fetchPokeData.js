const getArray = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=9';
  const data = await fetch(url);
  return data.json();
};

const getDataLink = async () => {
  const data = await getArray();
  const dataLink =data.results[0].url;
  const pokeDataLink = await fetch(dataLink);
  return pokeDataLink.json();
};

export const displayPokemon = async () => {
  const data = await getDataLink();
  const name = data.name
  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);
  const img = data.sprites.other.home.front_default;
  const type = data.types[0].type.name;
  const typeUp = type.charAt(0).toUpperCase() + type.slice(1);
  const abilities = data.abilities;
  const abilitieOneUp = abilities[0].ability.name.charAt(0).toUpperCase() + abilities[0].ability.name.slice(1);
  const abilitieTwoUp = abilities[1].ability.name.charAt(0).toUpperCase() + abilities[1].ability.name.slice(1);
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const speed = data.stats[5].base_stat;
  const sectionCard = document.querySelector('.pokemon-card')
  sectionCard.innerHTML = null;
  sectionCard.insertAdjacentHTML("beforeend",  `  <div class="fixed-item">
  <div class="body-card">
    <div class="poke-img">
      <img src=${img} alt="pokemon ${name}">
    </div>
    <div class="poke-data">
      <h2>${nameUp}</h2>
      <div class="poke-description">
        <ul>
          <h4 class="description-title">Type:</h4>
          <li>${typeUp}</li>
        </ul>
        <ul><h4 class="description-title">Abilities</h4>
          <li>${abilitieOneUp}</li>
          <li>${abilitieTwoUp}</li>
        </ul>
        <ul><h4 class="description-title">Basic Stats</h4>
          <li><strong>HP</strong>: ${hp}</li>
          <li><strong>Attack</strong>: ${attack}</li>
          <li><strong>Defense</strong>: ${defense}</li>
          <li><strong>Speed</strong>: ${speed}</li>
        </ul>
      </div>
    </div>
  </div>
</div>`)
}
