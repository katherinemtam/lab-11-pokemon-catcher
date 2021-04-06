import { getPokedex } from '../local-storage-utils.js';
import { createTableRow } from './utils.js';

const playAgain = document.querySelector('#play-again-button');
const table = document.querySelector('#table');
const pokedex = getPokedex();

playAgain.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});

for (let pokemon of pokedex) {
    const tr = createTableRow(pokemon);
    table.append(tr);
}
