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

const pokemonNames = [];
const encountered = [];
const captured = [];

for (let pokemon of pokedex) {
    pokemonNames.push(pokemon.pokemon);
    encountered.push(pokemon.encountered);
    captured.push(pokemon.captured);
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: pokemonNames,
        datasets: [{
            label: 'Pokemon encountered',
            data: encountered,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Pokemon captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});