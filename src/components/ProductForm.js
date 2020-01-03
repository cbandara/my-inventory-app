import React from "react";
import { connect } from "react-redux";
// import Input from "./Input";
// import { reduxForm, Field } from 'redux-form';
import { addProduct } from "../actions";
import "./ProductForm.css";

class ProductForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const name = this.name.value;
    const image = this.image.value;
    this.props.dispatch(addProduct({ name, image }));
    this.image.value = '';
    this.props.history.push("/"); // Redirects to the root path
  }

  render() {

    return (
      // Convert to Redux Form when using API or skip
      <div className="formWrapper">
        <form className="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            ref={name => (this.name = name)}
            required
          ></input>
          <br />
          <label htmlFor="image">Image</label>
          <input
            name="image"
            id="image"
            type="text-area"
            ref={image => (this.image = image)}
            required
          ></input>
          <br />
          <button type="submit" className="form-button">Add</button>
        </form>
      </div>

    );
  }
}

export default connect()(ProductForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
