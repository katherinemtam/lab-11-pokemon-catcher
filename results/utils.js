export function createTableRow(pokemon) {
    const tr = document.createElement('tr');
    const tdPokemon = document.createElement('td');
    const tdEncountered = document.createElement('td');
    const tdCaptured = document.createElement('td');

    tdPokemon.textContent = pokemon.pokemon;
    tdEncountered.textContent = pokemon.encountered;
    tdCaptured.textContent = pokemon.captured;

    tr.append(tdPokemon, tdEncountered, tdCaptured);

    return tr;
}