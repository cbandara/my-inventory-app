import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import EditForm from "./EditForm";
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
          <Route path="/addProduct" component={ProductForm} />
          <Route path='/editProduct/edit:itemID' component={EditForm} />
        </Switch>
      </div>
    );
  }
}

export default Board;
