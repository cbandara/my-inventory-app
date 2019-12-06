import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu.js";
import ProductList from "./ProductList";
import "./Board.css";

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // const productList = props.productList;
  // }

  render() {
    return (
      <div className="Board">
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={ProductList} />
        </Switch>
      </div>
    );
  }
}

export default connect(Board);
