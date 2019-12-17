import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.item.img} alt={this.props.item.id}></img>
        <p>{this.props.item.id}</p>
        <Link to="/addProduct"><button>Edit</button></Link>
      </div>
    );
  }
}

export default Product;
