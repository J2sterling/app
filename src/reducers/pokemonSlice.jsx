import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemonData = createAsyncThunk(
    'pokemon/fetchPokemonData',
    async (pokemonIdentifier) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();
        return data;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonData: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPokemonData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemonData = action.payload;
            })
            .addCase(fetchPokemonData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pokemonSlice.reducer;
