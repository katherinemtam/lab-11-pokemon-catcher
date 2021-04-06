import { generateThreePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findPokemonByName } from './utils.js';

const catchButton = document.querySelector('#catch-button');
const pokemonCaught = document.querySelector('#pokemon-caught');

function createPokemonDOM() {
    const poke1Radio = document.querySelector('#poke1-radio');
    const poke2Radio = document.querySelector('#poke2-radio');
    const poke3Radio = document.querySelector('#poke3-radio');

    const poke1Img = document.querySelector('#poke1-img');
    const poke2Img = document.querySelector('#poke2-img');
    const poke3Img = document.querySelector('#poke3-img');

    const threePokemon = generateThreePokemon();

    poke1Img.src = threePokemon[0].url_image;
    poke2Img.src = threePokemon[1].url_image;
    poke3Img.src = threePokemon[2].url_image;

    poke1Radio.value = threePokemon[0].pokemon;
    poke2Radio.value = threePokemon[1].pokemon;
    poke3Radio.value = threePokemon[2].pokemon;
}

createPokemonDOM();

let counter = 0;

catchButton.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input:checked');
    const pokemonValue = findPokemonByName(selectedPokemon.value);
    capturePokemon(pokemonValue);
    createPokemonDOM();

    if (counter < 10) {
        counter++;
        pokemonCaught.textContent = counter;
    } else {
        alert("You've caught 10 pokemon! Let's see what's in your Pokedex.");
        window.location = './results/index.html';
    }
});


