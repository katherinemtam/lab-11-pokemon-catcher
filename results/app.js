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


var ctx2 = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(ctx2, { // eslint-disable-line
    type: 'doughnut',
    data: {
        labels: pokemonNames,
        datasets: [{
            label: 'Encountered',
            data: encountered,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'indigo',
                'violet',
            ],
            hoverOffset: 4
        },
        {
            label: 'Captured',
            data: captured,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'lightblue',
                'pink',
                'orange',
                'lightgreen',
                'purple',
                'red',
            ],
            hoverOffset: 4
        }]
    }
});

var ctx3 = document.getElementById('polarChart').getContext('2d');
var polarChart = new Chart(ctx3, { // eslint-disable-line
    data: {
        labels: pokemonNames,
        datasets: [{
            label: 'Encountered',
            data: encountered,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'lightblue',
                'pink',
                'orange',
                'lightgreen',
                'purple',
                'red',
            ]
        },
        {
            label: 'Captured',
            data: captured,
            backgroundColor: [
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'indigo',
                'violet',
            ]
        }]
    },
    type: 'polarArea',
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart'
            }
        }
    }
});