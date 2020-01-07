import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { storeProductData, deleteProduct } from "../actions";

class Product extends React.Component {

  handleOnClickEdit = () => {

    const id = this.props.item._id;
    const name = this.props.item.name;
    const image = this.props.item.image;
    this.props.dispatch(storeProductData({ _id: id, name, image }
    ));
    this.props.history.push("/edit");

  }

  handleOnClickDelete = () => {
    console.log(this.props.item.id, this.props.item.name, this.props.item.image)
    const id = this.props.item._id;
    const name = this.props.item.name;
    const image = this.props.item.image;
    this.props.dispatch(deleteProduct({ id, name, image }));
    this.props.history.push("/");

  }

  render() {

    return (
      <div className="Product">
        <img src={this.props.item.image} alt={this.props.item.name} />
        <p className="id">{this.props.item.name}</p>
        <button onClick={this.handleOnClickEdit} className="product-button">Edit</button>
        <button onClick={this.handleOnClickDelete} className="product-button">Delete</button>
      </div>
    );
  }
}

export default withRouter(connect()(Product));

