import React from "react";
import { connect } from "react-redux";
// import Input from "./Input";
// import { reduxForm, Field } from 'redux-form';
import { registerUser } from "../actions";
import "./ProductForm.css";

class RegisterForm extends React.Component {
  state = {}

  onSubmit(event) {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords must match")
      this.password.value = '';
      this.confirmPassword.value = '';
      return
    }
    if (password.length < 8) {
      alert("Passwords must be longer than 8 characters")
      this.password.value = '';
      this.confirmPassword.value = '';
      return
    }
    this.props.dispatch(registerUser({ email, password }));
    this.password.value = '';
    this.props.history.push("/"); // Redirects to the root path
  }

  render() {

    return (
      // Convert to Redux Form when using API or skip
      <div className="formWrapper">
        <form className="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="email">Email</label>
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
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            ref={confirmPassword => (this.confirmPassword = confirmPassword)}
            required
          ></input>
          <button type="submit" className="form-button">Register</button>
        </form>
      </div>

    );
  }
}

export default connect()(RegisterForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
