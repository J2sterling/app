import React from 'react';
import { useSelector } from 'react-redux';

const PokemonGrid = () => {
    const { pokemonData, status, error } = useSelector((state) => state.pokemon);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    if (!pokemonData) {
        return <p>No Pokémon data available.</p>;
    }

    return (
        <div>
            <h3>{pokemonData.name.toUpperCase()}</h3>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Base experience: {pokemonData.base_experience}</p>
        </div>
    );
};

export default PokemonGrid;
