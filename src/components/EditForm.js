import React from "react";
import { connect } from "react-redux";
import { editProduct } from "../actions";
import { withRouter } from "react-router";
import "./ProductForm.css";

class EditForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const name = this.name.value;
    const image = this.image.value;
    const id = this.props.editFormData._id
    console.log(id)
    this.props.dispatch(editProduct(id, { name, image }));
    this.props.history.push("/"); // Redirects to the root path
  }

  handleChange(e) {
    // Should I change this?
    console.log(e.target.value);
  }

  render() {
    // Get product from redux state
    // let productId = this.match.params.id
    console.log("EditForm.render this.props", this.props)
    return (
      // Convert to Redux Form when using API
      <div className="formWrapper">
        <form className="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="name">name</label>
          <input
            name="name"
            id="name"
            type="text"
            ref={name => (this.name = name)}
            onChange={this.handleChange}
            defaultValue={this.props.editFormData.name}
            required
          ></input>
          <br />
          <label htmlFor="image">Image</label>
          <input
            name="image"
            id="image"
            type="text-area"
            ref={image => (this.image = image)}
            defaultValue={this.props.editFormData.image}
            required
          ></input>
          <br />
          <button type="submit" class="form-button">Add</button>
        </form>
      </div>

    );
  }
}

export const mapStateToProps = state => ({
  productList: state.productList,
  editFormData: state.editFormData
});

export default withRouter(connect(mapStateToProps)(EditForm));
