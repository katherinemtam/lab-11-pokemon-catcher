// import pokeData from '../data.js';
import { getPokedex } from '../local-storage-utils.js';
import { createTableRow } from './utils.js';
// import { findById } from '../utils.js';

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


var ctx = document.getElementById('resultsChart').getContext('2d');
var resultsChart = new Chart(ctx, { // eslint-disable-line
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


// const pokemonType1 = [];
// const pokemonType2 = [];

// for (let pokemon of pokedex) {
//     const matchingPokemon = findById(pokeData, pokemon.pokemon);
//     pokemonType1.push(matchingPokemon.type_1);
//     pokemonType2.push(matchingPokemon.type_2);
// }

// var ctx2 = document.getElementById('typeChart').getContext('2d');
// var typeChart = new Chart(ctx2, { // eslint-disable-line
//     type: 'doughnut',
//     data: {
//         labels: pokemonType1,
//         datasets: [{
//             label: 'Pokemon Types',
//             data: pokemonType1,
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     }
// });