import React, {Component, PropTypes} from 'react';

class EditRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      title: this.props.recipe.title,
      ingredients: this.props.recipe.ingredients
    });

    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
  }

  closeModal() {
    this.props.close({'title': this.state.title, 'ingredients': this.state.ingredients});
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeIngredients(e) {
    this.setState({ 'ingredients': e.target.value.split(',') });
  }

  render() {
    return (
      <div>
        <h2 ref={subtitle => this.subtitle = subtitle}>Edit Recipe</h2>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title" placeholder="Enter Recipe Name" name="title"
                value={this.state.title} ref="title" onChange={this.onChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="text" className="form-control" id="ingredients" placeholder="Enter Recipe details" name="ingredients"
              value={this.state.ingredients} ref="ingredients" onChange={this.onChangeIngredients}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this.closeModal}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
};

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  close: PropTypes.func
};

export default EditRecipeForm;
