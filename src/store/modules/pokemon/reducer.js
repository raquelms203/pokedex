import produce from "immer";

const pokemon = (state = {}, action) => {  
  switch(action.type) {  
    case "@pokemon/SELECT":
      return produce(state, (draft) => {  
        draft = action.pokemon
      })
      default: return state;
  }
}

export default pokemon;