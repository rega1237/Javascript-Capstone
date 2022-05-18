import displayPokemon from './pokePop.js';
import pokemonShow from './home.js';
import './style.css';

const displayPop = async () => {
  await pokemonShow();
  const commentBtn = document.querySelectorAll('.comment');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const pokePop = document.querySelector('.pokemon-pop');
      pokePop.style.display = 'block';
      displayPokemon(e);
    });
  });
};

const deletePop = () => {
  const closeBtn = document.querySelector('.fa-solid');
  const popWindow = document.querySelector('.pokemon-pop');
  const blurWindow = document.querySelector('.fixed-item');
  closeBtn.addEventListener('click', () => {
    popWindow.style.display = 'none';
  });
  blurWindow.addEventListener('click', () => {
    popWindow.style.display = 'none';
  });
};

pokemonShow();
displayPop();
deletePop();
