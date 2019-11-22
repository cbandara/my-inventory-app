import React from "react";
import Product from "./Product";
import "./ProductList.css";

class ProductList extends React.Component {
  render() {
    const products = this.props.productList.map(prod => {
      return (
        <li>
          <Product item={prod}></Product>
        </li>
      );
    });
    return (
      <div className="ProductList">
        <ul>{products}</ul>
      </div>
    );
  }
}

export default ProductList;
