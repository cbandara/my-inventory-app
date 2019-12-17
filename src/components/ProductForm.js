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
    const img = this.img.value;
    this.props.dispatch(addProduct({ id, img }));
    this.props.history.push("/"); // Redirects to the root path
  }

  render() {
    return (
      // Convert to Redux Form when using API
      <div class="formWrapper">
        <form class="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="id">ID</label>
          <input
            name="id"
            id="id"
            type="number"
            ref={id => (this.id = id)}
            required
          ></input>
          <br />
          <label htmlFor="img">Image</label>
          <input
            name="img"
            id="img"
            type="text"
            ref={img => (this.img = img)}
            required
          ></input>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>

    );
  }
}

export default connect()(ProductForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
