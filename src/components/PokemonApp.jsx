import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonData } from '../reducers/pokemonSlice';
import PokemonGrid from './PokemonGrid';

const PokemonApp = () => {
    const [pokemonId, setPokemonId] = useState(1); // ID inicial del Pokémon
    const dispatch = useDispatch();

    // Actualizar el Pokémon cada vez que el ID cambie
    useEffect(() => {
        dispatch(fetchPokemonData(pokemonId));
    }, [dispatch, pokemonId]);

    // Función para incrementar el ID del Pokémon
    const handleNextPokemon = () => {
        setPokemonId((prevId) => prevId + 1);
    };

    // Función para decrementar el ID del Pokémon
    const handlePreviousPokemon = () => {
        setPokemonId((prevId) => (prevId > 1 ? prevId - 1 : 1)); // Evita que el ID sea menor que 1
    };

    return (
        <div>
            <h1>Pokémon Finder</h1>
            <p>ID del Pokémon actual: {pokemonId}</p> {/* Mostrar el ID actual del Pokémon */}
            <button onClick={handlePreviousPokemon}>Anterior Pokémon</button> {/* Botón para decrementar el ID */}
            <button onClick={handleNextPokemon}>Siguiente Pokémon</button> {/* Botón para incrementar el ID */}
            <PokemonGrid />
        </div>
    );
};

export default PokemonApp;
