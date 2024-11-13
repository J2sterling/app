// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoSlice';
import pokemonReducer from '../reducers/pokemonSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        pokemon: pokemonReducer,
    },
});

export default store;

