import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipe(state = {recipes: initialState.recipes}, action) {
  switch (action.type) {
    case "ADD_RECIPE": {
      let newArr = Object.assign([], state.recipes);
      newArr.push(action.item);
      return {...state, recipes: newArr};
    }

    case "EDIT_RECIPE": {
      let newArr = Object.assign([], state.recipes);
      const indexOfRecipeToReplace = newArr.findIndex(recipe => {return recipe.title == action.recipe.title})
      newArr.splice(indexOfRecipeToReplace, 1, action.recipe);
      return {...state, recipes: newArr};
    }

    case "DELETE_RECIPE": {
      let newArr = Object.assign([], state.recipes);
      const indexOfRecipeToDelete = newArr.findIndex(recipe => {return recipe.title == action.title})
      newArr.splice(indexOfRecipeToDelete, 1);
      return {...state, recipes: newArr};
    }

    default:
      return state;
  }
}
