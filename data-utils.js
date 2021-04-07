import pokeData from './data.js';
import { encounterPokemon } from './local-storage-utils.js';
import { last_encountered } from './app.js';

function getRandomIndex() {
    return Math.floor(Math.random() * pokeData.length);
}

function getUnencounteredIndex() {
    let new_index = getRandomIndex();

    while (last_encountered.includes(new_index)) {
        new_index = getRandomIndex();
    }
    return new_index;
}

export function generateThreePokemon() {

    let randomNumber1 = getUnencounteredIndex();
    last_encountered.push(randomNumber1);

    let randomNumber2 = getUnencounteredIndex();
    last_encountered.push(randomNumber2);

    let randomNumber3 = getUnencounteredIndex();
    last_encountered.push(randomNumber3);

    while (last_encountered.length > 3) {
        last_encountered.pop();
    }

    last_encountered[0] = randomNumber1;
    last_encountered[1] = randomNumber2;
    last_encountered[2] = randomNumber3;

    const poke1 = pokeData[randomNumber1];
    const poke2 = pokeData[randomNumber2];
    const poke3 = pokeData[randomNumber3];

    encounterPokemon(poke1);
    encounterPokemon(poke2);
    encounterPokemon(poke3);

    return [poke1, poke2, poke3];
}

