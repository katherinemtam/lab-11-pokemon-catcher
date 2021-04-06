import { generateThreePokemon } from './data-utils.js';

function createPokemonDOM() {
    const poke1Label = document.querySelector('#poke1-label');
    const poke2Label = document.querySelector('#poke2-label');
    const poke3Label = document.querySelector('#poke3-label');

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

    poke1Label.append(poke1Img);
    poke2Label.append(poke2Img);
    poke3Label.append(poke3Img);

    poke1Radio.value = threePokemon[0].pokemon;
    poke2Radio.value = threePokemon[1].pokemon;
    poke3Radio.value = threePokemon[2].pokemon;
}

createPokemonDOM();
