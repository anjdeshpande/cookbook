import React, {Component, PropTypes} from "react";
import RecipeList from "./recipe-list";
import AddRecipeForm from './add-recipe-form';
import EditRecipeForm from './edit-recipe-form';

import * as actions from '../actions/recipeAction';
import { createStore, applyMiddleware, bindActionCreators } from "redux";
import {connect} from "react-redux";

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '60%'
  }
};

class Cookbook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this._addRecipe = this._addRecipe.bind(this);
    this._editRecipe = this._editRecipe.bind(this);
    this._modifyRecipe = this._modifyRecipe.bind(this);
  }

  _addRecipe(item) {
    this.setState({modalIsOpen: false});
    this.props.actions._addRecipe(item);
  }

  openModal() {
    this.setState({modalIsOpen: true, itemAdd: true});
  }

  _modifyRecipe(recipe) {
    this.setState({modalIsOpen: true, itemAdd: false, recipe: recipe});
  }

  _editRecipe(recipe) {
    this.setState({modalIsOpen: false});
    this.props.actions._editRecipe(recipe);
  }

  render(){
    let form = null;
    let { recipes } = this.props;
    if (this.state.itemAdd) {
      form = <AddRecipeForm _addRecipe={this._addRecipe}/>;
    } else {
      form = <EditRecipeForm recipe={this.state.recipe} close={this._editRecipe}/>;
    }

    return (
      <div>
        <RecipeList recipes={recipes} _modifyRecipe={this._modifyRecipe}/>
        <button onClick={this.openModal}>Add Recipe</button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          {form}
        </Modal>
      </div>
    )
  }
};

Cookbook.propTypes = {
  recipes: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipe.recipes ? state.recipe.recipes : []
  };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookbook);
