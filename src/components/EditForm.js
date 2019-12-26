import React from "react";
import { connect } from "react-redux";
import { editProduct } from "../actions";
import { withRouter } from "react-router";
import "./ProductForm.scss";

class EditForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const name = this.name.value;
    const img = this.img.value;
    const id = this.props.editFormData.id
    console.log(id)
    this.props.dispatch(editProduct({ id, name, img }));
    this.props.history.push("/"); // Redirects to the root path
  }

  handleChange(e) {
    // Should I change this?
    console.log(e.target.value);
  }

  render() {
    // Get product from redux state
    // let productId = this.match.params.id
    console.log(this.props.editFormData)
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
          <label htmlFor="img">Image</label>
          <input
            name="img"
            id="img"
            type="text"
            ref={img => (this.img = img)}
            defaultValue={this.props.editFormData.img}
            required
          ></input>
          <br />
          <button type="submit" className="menu-button">Add</button>
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
