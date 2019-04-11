const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

// TODO: Use fetch API cross-browser compatible

const fetchPokemon = (id, onSuccess) => {
    fetch(`${API_URL}${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("An error occurred while fetching pokemon with id " + id);
            }
        })
        .then(data => {
            const pokemon = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                type: data.types[0].type.name
            };
            onSuccess(pokemon);
        });
};

export default {
    fetchPokemon
};