import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 *
 * Additional tests on App container belongs here.
 * To test this container which update the state one should use a framework such as Enzyme.
 * Using Enzyme, we shallow render App with a mock function fetchPokemon and get the two PokemonList (wild and caught) components.
 * Instead of testing the container state we should test the props 'pokemons' (which is derived from the container's state) passed to the two PokemonList components.
 * Testing App container include testing the following methods:
 *  - componentDidMount():
 *      - verify that the mock function fetchPokemon has been called th right number of time (with jest.useFakeTimers() and jest.advanceTimersByTime(3000), fetchPokemon should have been called 6 times)
 *  - onFetchPokemonSuccess(pokemon):
 *      - verify that pokemons props passed to PokemonList (wild) contains pokemon
 *      - verify that pokemons props passed to PokemonList (wild) is sorted in increasing order of pokemon id
 *  - catchPokemon(id):
 *      - verify that pokemons props passed to PokemonList (wild) does not contain a pokemon with id=id
 *      - verify that pokemons props passed to PokemonList (wild) is sorted in increasing order of pokemon id
 *      - verify that pokemons props passed to PokemonList (caught) contains a pokemon with id=id
 *      - verify that pokemon with id=id is append at the end of pokemons props list passed to PokemonList (caught)
 *  - releasePokemon(id):
 *      - verify that pokemons props passed to PokemonList (caught) does not contain a pokemon with id=id
 *      - verify that pokemons props passed to PokemonList (wild) contains a pokemon with id=id
 *      - verify that pokemons props passed to PokemonList (wild) is sorted in increasing order of pokemon id
 *  - render():
 *      - verify that two components PokemonList are rendered and have category wild and caught
 */
