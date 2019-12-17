import React from "react";
import Input from './Input';
import { reduxForm, Field } from 'redux-form';
import { addProduct } from "../actions";

class ProductForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const id = this.id.value;
    const img = this.img;

    this.props.dispatch(addProduct({ id, img }));
    // this.input.value = '';
    // this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor="id">ID</label>
        <Field name="id" id="id" type="number" ref="id" component={Input} />
        <label htmlFor="img">Image</label>
        <Field name="img" id="img" type="text" component={Input} />

        <button type="submit">Add</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'product'//is this correct?
})(ProductForm);

// Create React Form
// Implement action and reducer for add form
// onSubmit, dispatch action and go to the root path
// this.props.history.push("/");