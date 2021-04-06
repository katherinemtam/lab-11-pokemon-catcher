import { generateThreePokemon } from './data-utils.js';
import { capturePokemon, getPokedex } from './local-storage-utils.js';
import { findById, findPokemonByName } from './utils.js';

const catchButton = document.querySelector('#catch-button');
const pokemonCaught = document.querySelector('#pokemon-caught');

function createPokemonDOM() {
    const poke1Radio = document.querySelector('#poke1-radio');
    const poke2Radio = document.querySelector('#poke2-radio');
    const poke3Radio = document.querySelector('#poke3-radio');

    const poke1Img = document.querySelector('#poke1-img');
    const poke2Img = document.querySelector('#poke2-img');
    const poke3Img = document.querySelector('#poke3-img');

    const poke1Encountered = document.querySelector('#poke1-encountered');
    const poke2Encountered = document.querySelector('#poke2-encountered');
    const poke3Encountered = document.querySelector('#poke3-encountered');

    const poke1Captured = document.querySelector('#poke1-captured');
    const poke2Captured = document.querySelector('#poke2-captured');
    const poke3Captured = document.querySelector('#poke3-captured');

    const threePokemon = generateThreePokemon();

    poke1Img.src = threePokemon[0].url_image;
    poke2Img.src = threePokemon[1].url_image;
    poke3Img.src = threePokemon[2].url_image;

    poke1Radio.value = threePokemon[0].pokemon;
    poke2Radio.value = threePokemon[1].pokemon;
    poke3Radio.value = threePokemon[2].pokemon;

    const pokedex = getPokedex();

    const matchingPokemon1 = findById(pokedex, poke1Radio.value);

    if (matchingPokemon1) {
        poke1Encountered.textContent = matchingPokemon1.encountered;
        poke1Captured.textContent = matchingPokemon1.captured;
    }

    const matchingPokemon2 = findById(pokedex, poke2Radio.value);
    if (matchingPokemon2) {
        poke2Encountered.textContent = matchingPokemon2.encountered;
        poke2Captured.textContent = matchingPokemon2.captured;
    }

    const matchingPokemon3 = findById(pokedex, poke3Radio.value);
    if (matchingPokemon3) {
        poke3Encountered.textContent = matchingPokemon3.encountered;
        poke3Captured.textContent = matchingPokemon3.captured;
    }
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
