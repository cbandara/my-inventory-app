import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Menu";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import EditForm from "./EditForm";
import Product from "./Product";
import "./Board.css";

const PrivateRoute = ({ component: Component, path, ...rest }) => {

  if (!window.localStorage.getItem('auth-token')) {
    return <Redirect to="/login" />
  } else {
    return <>
      <Menu></Menu>
      <Route path={path} component={Component} {...rest} />
    </>
  }

}
class Board extends React.Component {

  render() {
    return (
      <div className="Board">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute exact path="/product" component={Product} />
          <PrivateRoute exact path="/" component={ProductList} />
          <PrivateRoute path="/addProduct" component={ProductForm} />
          <PrivateRoute path='/edit' component={EditForm} />
        </Switch>
      </div>
    );
  }
}

export default Board;
