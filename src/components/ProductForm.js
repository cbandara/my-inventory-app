import React from "react";
import { connect } from 'react-redux';
import Input from './Input';
// import { reduxForm, Field } from 'redux-form';
import { addProduct } from "../actions";

class ProductForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    console.log(this.id.value)
    const id = this.id.value;
    const img = this.img.value;

    this.props.dispatch(addProduct({ id, img }))
  }

  render() {
    return (
      // Must convert from Redux form to React Form?
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor="id">ID</label>
        <input name="id" id="id" type="number" ref={id => (this.id = id)} required></input>
        <label htmlFor="img">Image</label>
        <input name="img" id="img" type="text" ref={img => (this.img = img)} required></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect()(ProductForm);

// export default reduxForm({
//   form: 'product'//is this correct?
// })(ProductForm);

// Create React Form
// Implement action and reducer for add form
// onSubmit, dispatch action and go to the root path
// this.props.history.push("/");