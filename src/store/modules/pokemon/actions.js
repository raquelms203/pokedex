export const selectPokemon = (pokemon) => {  
  return {  
    type: "@pokemon/SELECT",
    pokemon
  }
}