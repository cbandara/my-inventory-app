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

    if(password !== confirmPassword){
      this.setState({
        error: 'passwords does not match'
      })
      return
    }
    if(password.length < 8){
      this.setState({
        error: "password must be a minimum of 8 characters"
      })
    }
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
            ref={confirmPassword => (this.confirmPassword = confirmPassword)}
            required
          ></input>
          <button type="submit" class="form-button">Submit</button>
        </form>
      </div>

    );
  }
}

export default connect()(RegisterForm);

// export default reduxForm({
//   form: 'product'
// })(ProductForm);
