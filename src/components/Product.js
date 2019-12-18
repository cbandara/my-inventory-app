import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { storeProductData } from "../actions";

class Product extends React.Component {
  handleOnClick(id, name, img) {

    this.props.dispatch(storeProductData({ id, name, img }));
  }
  render() {
    const itemlink = `/edit/${this.props.item.id}/${this.props.item.name}/${this.props.item.img}`
    return (
      <div className="Product">
        <img src={this.props.item.img} alt={this.props.item.name}></img>
        <p className="id">{this.props.item.id}</p>
        <p className="id">{this.props.item.name}</p>
        <button onClick={this.handleOnClick(this.props.item.id, this.props.item.name, this.props.item.img)}>Edit</button>
      </div>
    );
  }
}

export default connect()(Product);


// onClick edit button, create function to dispatch an action
// Create an action and reducer
// Redirect to edit form page