import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
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
          <Route path="/addProduct" component={AddProduct} />
        </Switch>
      </div>
    );
  }
}

export default Board;
