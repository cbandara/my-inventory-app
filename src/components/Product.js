import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    console.log(this.props.item)
    return (
      <div className="Product">
        <img src={this.props.item.img} alt={this.props.item.id}></img>
        <p className="id">{this.props.item.id}</p>
        <Link to="editProduct" prod={this.props.item}><button>Edit</button></Link>
      </div>
    );
  }
}

export default Product;
