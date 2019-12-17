import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.item.img} alt={this.props.item.id}></img>
        <p>{this.props.item.id}</p>
      </div>
    );
  }
}

export default Product;
