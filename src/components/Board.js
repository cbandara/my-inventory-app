import React from "react";
import { connect } from "react-redux";
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
        <ProductList productList={this.props.productList}></ProductList>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(mapStateToProps)(Board);
