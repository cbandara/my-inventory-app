import React from "react";
import { connect } from "react-redux";
// import Input from "./Input";
// import { reduxForm, Field } from 'redux-form';
import { registerUser } from "../actions";
import "./ProductForm.css";

class ProductForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    this.props.dispatch(registerUser({ email, password }));
    this.password.value = '';
    this.props.history.push("/"); // Redirects to the root path
  }

  render() {

    return (
      // Convert to Redux Form when using API or skip
      <div classemail="formWrapper">
        <form classemail="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="text"
            ref={email => (this.email = email)}
            required
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={password => (this.password = password)}
            required
          ></input>
          <br />
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            id="password"
            name="confirm password"
            type="password"
            ref={password => (this.password = password)}
            required
          ></input>
          <button type="submit" class="form-button">Submit</button>
        </form>
      </div>

    );
  }
}

export default connect()(ProductForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
