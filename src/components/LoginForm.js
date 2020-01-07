import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions";
import "./ProductForm.css";

class LoginForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    this.props.dispatch(loginUser({ email, password }));
    this.password.value = '';
    this.props.history.push("/");
  }

  render() {

    return (
      // Convert to Redux Form when using API or skip
      <div className="formWrapper">

        <div className="register-btn-wrapper">
          <img src={require('../img/myinventory.png')} className="logo-img" alt="Logo"></img>
          <p>MyInventory allows you to add and modify products in our database. In order to use this app you must register and login.</p>
          <Link to="/register"><button className="menu-button">Register</button></Link></div>
        <form className="productForm" onSubmit={e => this.onSubmit(e)}>
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
          <button type="submit" className="form-button">Login</button>
        </form>
      </div>

    );
  }
}

export default connect()(LoginForm);

