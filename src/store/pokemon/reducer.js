import { createSlice } from "@reduxjs/toolkit";

export const pokemonReducer = createSlice({
  name: "pokemon",
  initialState: {
   
  },
  reducers: {
    select: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { select } = pokemonReducer.actions;

export const selectPokemon = (state) => state.pokemon.value;


export default pokemonReducer.reducer;
