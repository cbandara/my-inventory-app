import React from "react";
import { connect } from "react-redux";
// import Input from "./Input";
// import { reduxForm, Field } from 'redux-form';
import { addProduct } from "../actions";
import "./ProductForm.css";

class ProductForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const id = this.id.value;
    const name = this.name.value;
    const img = this.img.value;
    this.props.dispatch(addProduct({ id, name, img }));
    this.id.value = '';
    this.img.value = '';
    this.props.history.push("/"); // Redirects to the root path
  }

  render() {

    return (
      // Convert to Redux Form when using API
      <div className="formWrapper">
        <form className="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="id">ID</label>
          <input
            name="id"
            id="id"
            type="number"
            ref={id => (this.id = id)}
            required
          ></input>
          <br />
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            ref={name => (this.name = name)}
            required
          ></input>
          <br />
          <label htmlFor="img">Image</label>
          <input
            name="img"
            id="img"
            type="text-area"
            ref={img => (this.img = img)}
            required
          ></input>
          <br />
          <button type="submit" class="form-button">Add</button>
        </form>
      </div>

    );
  }
}

export default connect()(ProductForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
