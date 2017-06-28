import React, { Component, PropTypes } from "react";
import RecipeDetail from "./recipe-detail";
import { Accordion, AccordionItem } from 'react-sanfona';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.editRecipe = this.editRecipe.bind(this);
  }

  deleteRecipe(id) {
    this.props._removeRecipe(id);
  }

  editRecipe(recipe) {
    this.props._modifyRecipe(recipe);
  }

  render(){
    let { recipes } = this.props;
    return (
      <div>
        <h3>Recipe List</h3>
        <div>
          <Accordion>
            {recipes.map((item) => {
                return (
                  <AccordionItem title={item.title} key={item}>
                    <RecipeDetail recipe={item} _editRecipe={this.editRecipe} key={item}/>
                  </AccordionItem>
                );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  _modifyRecipe: PropTypes.func
}

export default RecipeList;
