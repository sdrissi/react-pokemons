import React from 'react';
import PropTypes from 'prop-types';
import './PokemonList.css';

import { Pokemon, PokemonWithInfo } from "./Pokemon";

const PokemonList = ({ category, pokemons, onClickPokemon }) => (
    <div className='PokemonList'>
        <h2 className='PokemonList__header'>{`${category.charAt(0).toUpperCase() + category.slice(1)} Pokémons`}</h2>
        <div className={`PokemonList__list PokemonList__list--${category}`}>
            {
                pokemons.map((pokemon) => {
                    const {
                        id,
                        name,
                        sprite,
                        type
                    } = pokemon;
                  return category === 'wild' ?
                      <Pokemon key={id}
                               name={name}
                               img={sprite}
                               onClick={() => onClickPokemon(id)}/> :
                      <PokemonWithInfo key={id}
                                       id={id}
                                       name={name}
                                       img={sprite}
                                       type={type}
                                       onClick={() => onClickPokemon(id)}/>
                })
            }
        </div>
    </div>
);

PokemonList.propTypes = {
    category: PropTypes.string.isRequired,
    pokemons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            img: PropTypes.string,
            type: PropTypes.string,
            onclick: PropTypes.func
        })
    ).isRequired,
    onClickPokemon: PropTypes.func.isRequired
}

export default PokemonList;
