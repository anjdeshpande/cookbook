import * as types from './actionTypes';

export const incNumber = () => {
  return {
    type: "INC_NUMBER"
  };
};

export function _addRecipe(item) {
  return {type: types.ADD_RECIPE, item};
};

export function _editRecipe(recipe) {
  return {type: types.EDIT_RECIPE, recipe};
};

export function _deleteRecipe(title) {
  return {type: types.DELETE_RECIPE, title};
};
