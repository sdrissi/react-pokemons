import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import PokemonList from './components/PokemonList';

const POKEMON_CAUGHT_LIMIT = 6;
const POKEMON_LAST_ID = 151;

class App extends Component {

    state = {
        wildPokemons: {
            byId: {},
            allIds: []
        },
        caughtPokemons: {
            byId: {},
            allIds: []
        }
    }

  componentDidMount() {
        let id = 1;
        this.intervalId = setInterval(() => {
            if (id <= POKEMON_LAST_ID) {
                this.props.fetchPokemon(id, this.onFetchPokemonSuccess);
                id++;
            }
        }, 500);
  }

  componentWillUnmount() {
        clearInterval(this.intervalId);
  }

  onFetchPokemonSuccess = (newPokemon) => {
      this.setState((state) => {
          return {
              ...state,
              wildPokemons: {
                  byId: {
                      ...state.wildPokemons.byId,
                      [newPokemon.id]: newPokemon
                  },
                  allIds: [ ...state.wildPokemons.allIds, newPokemon.id ].sort((id1, id2) => id1 -id2)
              }
          };
      });
  }

  catchPokemon = (id) => {
      this.setState((state) => {
          if (state.caughtPokemons.allIds.length === POKEMON_CAUGHT_LIMIT) return;
          let wildPokemonsById = { ...state.wildPokemons.byId };

          delete wildPokemonsById[id]

          return {
              wildPokemons: {
                  byId: wildPokemonsById,
                  allIds: state.wildPokemons.allIds.filter((pId) => pId !== id)
              },
              caughtPokemons: {
                  byId: {
                      ...state.caughtPokemons.byId,
                     [id]: state.wildPokemons.byId[id]
                  },
                  allIds: [ ...state.caughtPokemons.allIds, id ]
              }
          };
      });
  }

  releasePokemon = (id) => {
        this.setState((state) => {
            let caughtPokemonsById = { ...state.caughtPokemons.byId };

            delete caughtPokemonsById[id];

            return {
                wildPokemons: {
                    byId: {
                        ...state.wildPokemons.byId,
                        [id]: state.caughtPokemons.byId[id]
                    },
                    allIds: [ ...state.wildPokemons.allIds, id ].sort((id1, id2) => id1 - id2)
                },
                caughtPokemons: {
                    byId: caughtPokemonsById,
                    allIds: state.caughtPokemons.allIds.filter((pId) => pId !== id)
                }
            }
        })
  }

  render() {
        const {
            wildPokemons,
            caughtPokemons
        } = this.state;
        return (
            <div className="App">
                <PokemonList category='wild'
                             pokemons={wildPokemons.allIds.map((id) => wildPokemons.byId[id])}
                             onClickPokemon={this.catchPokemon} />
                <PokemonList category='caught'
                             pokemons={caughtPokemons.allIds.map((id) => caughtPokemons.byId[id])}
                             onClickPokemon={this.releasePokemon} />
            </div>
        )
  }
}

App.propTypes = {
    fetchPokemon: PropTypes.func.isRequired
}

export default App;
