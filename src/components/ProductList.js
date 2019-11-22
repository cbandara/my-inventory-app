import React from "react";
import Product from "./Product.js";
import "./ProductList.css";

class ProductList extends React.Component {
  render() {
    return (
      <div className="ProductList">
        <ul>
          <li>
            <Product></Product>
          </li>
          <li>0231</li>
          <li>6653</li>
          <li>2443</li>
          <li>7888</li>
        </ul>
      </div>
    );
  }
}

export default ProductList;
