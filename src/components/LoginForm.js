import React from "react";
import { connect } from "react-redux";
// import Input from "./Input";
// import { reduxForm, Field } from 'redux-form';
import { loginUser } from "../actions";
import "./ProductForm.css";

class LoginForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    this.props.dispatch(loginUser({ email, password }));
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
            name="email"
            id="email"
            type="text"
            ref={email => (this.email = email)}
            required
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            ref={password => (this.password = password)}
            required
          ></input>
          <br />
          <button type="submit" class="form-button">Add</button>
        </form>
      </div>

    );
  }
}

export default connect()(LoginForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
