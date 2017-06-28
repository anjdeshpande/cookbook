import React, {Component, PropTypes} from "react";
import { Accordion, AccordionItem } from 'react-sanfona';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../actions/recipeAction';
import Modal from 'react-modal';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  deleteRecipe() {
    this.props.actions._deleteRecipe(this.props.recipe.title);
  }

  editRecipe() {
    this.props._editRecipe(this.props.recipe);
  }

  render() {
    return (
        <div>
          { this.props.recipe.ingredients.map((item, index) => {
            return (
              <div key={item}>
                {item}
              </div>
            );
          })}
          <div>
            <button type="submit" onClick={this.deleteRecipe.bind(this)}>DELETE</button>
            <button type="submit" onClick={this.editRecipe.bind(this)}>EDIT</button>
          </div>
        </div>
    );
  }
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object.isRequired,
  _editRecipe: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(RecipeDetail);
