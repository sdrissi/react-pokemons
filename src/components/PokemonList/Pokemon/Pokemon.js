import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

const Pokemon = ({ name, img, onClick, children }) => {
    return (
        <div className='Pokemon'>
            <img className='Pokemon__img'
                 src={img}
                 alt={`${name}_img`}
                 onClick={onClick} />
            {children}
        </div>
    );
};

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element
}

const PokemonWithInfo = ({ id, name, img, type, onClick }) => {
    return (
        <Pokemon img={img}
                 name={name}
                 onClick={onClick}>
            <div className='Pokemon__info'>
                <div>
                    <label>ID:</label>
                    <span>{id}</span>
                </div>
                <div>
                    <label>Name:</label>
                    <span>{name}</span>
                </div>
                <div>
                    <label>Type:</label>
                    <span>{type}</span>
                </div>
            </div>
        </Pokemon>
    );
};

PokemonWithInfo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pokemon;

export {
  PokemonWithInfo
};

