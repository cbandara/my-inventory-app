import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.item.img}></img>
        <p>{this.props.item.id}</p>
      </div>
    );
  }
}

export default Product;

// Hook up Product to ProductList
// Connect ProductList to Store