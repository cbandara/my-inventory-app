import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from "react-router-dom";

import { reduxForm, Field } from 'redux-form';

class ProductForm extends React.Component {
  render() {
    return (
      <form
      // onSubmit={this.props.handleSubmit(values =>
      //   this.onSubmit(values)
      // )}
      >
        <label htmlFor="id">ID</label>
        <Field name="id" id="id" type="number" component="input" />
        <label htmlFor="picture">Picture</label>

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