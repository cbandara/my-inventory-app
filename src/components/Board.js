import React from "react";
import Menu from "./Menu.js";
import ProductList from "./ProductList.js";
import "./Board.css";

class Board extends React.Component {
  render() {
    return (
      <div className="Board">
        <Menu></Menu>
        <ProductList></ProductList>
      </div>
    );
  }
}

export default Board;
