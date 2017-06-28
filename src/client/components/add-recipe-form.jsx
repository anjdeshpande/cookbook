import React, {Component, PropTypes} from 'react';

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  closeModal() {
    this.props._addRecipe({'title': this.refs.recipeName.value, 'ingredients': this.refs.details.value.split(',')});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  render() {
    return (
      <div>
        <h2 ref={subtitle => this.subtitle = subtitle}>Add Recipe</h2>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" placeholder="Enter Recipe Name" name="name"
                  ref="recipeName" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" className="form-control" id="details" placeholder="Enter Recipe details" name="details"
                ref="details" />
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

AddRecipeForm.propTypes = {
  _addRecipe: PropTypes.func
};

export default AddRecipeForm;
