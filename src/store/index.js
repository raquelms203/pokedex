import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer  from "./pokemon/reducer";


export default configureStore({
  reducer: {pokemon: pokemonReducer},
});