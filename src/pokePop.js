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
  const sectionCard = document.querySelector('.pokemon-pop');
  sectionCard.innerHTML = null;
  sectionCard.insertAdjacentHTML('afterbegin', `
  <div class="fixed-item">
        <div class="body-card">
          <i class="fa-solid fa-xmark"></i>
          <div class="poke-img-div">
            <img src="${img}" alt="" class="poke-img">
          </div>
          <div class="poke-data">
            <h2 class="poke-name">${nameUp}</h2>
            <div class="poke-description-card">
              <ul>
                <li class="description-title">Type:</li>
                <li class="poke-type li">${typeUp}</li>
              </ul>
              <ul>
                <li class="description-title">Abilities</li>
                <li class="ability-one li">${abilitieOneUp}</li>
                <li class="ability-two li">${abilitieTwoUp}</li>
              </ul>
              <ul>
                <li class="description-title">Basic Stats</li>
                <li class="hp li"><strong>HP:</strong> ${hp}</li>
                <li class="attack li"><strong>Attack:</strong> ${attack}</li>
                <li class="defense li"><strong>Defense</strong>: ${defense}</li>
                <li class="speed li"><strong>Speed</strong>: ${speed} </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`);
  const closeBtn = document.querySelector('.fa-solid');
  const blurWindow = document.querySelector('.fixed-item');
  closeBtn.addEventListener('click', () => {
    sectionCard.style.display = 'none';
  });
  blurWindow.addEventListener('click', () => {
    sectionCard.style.display = 'none';
  });
};

export default displayPokemon;