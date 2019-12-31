import React from "react";
import "./Product.css";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { storeProductData, deleteProduct } from "../actions";

class Product extends React.Component {
  // handleOnClick() {
  //   console.log(this.props.item.id)
  //   // this.props.dispatch(storeProductData({ id, name, image }));
  // 
  handleOnClickEdit = () => {
    // console.log(this.props.item.id, this.props.item.name, this.props.item.image)
    const id = this.props.item._id;
    const name = this.props.item.name;
    const image = this.props.item.image;
    this.props.dispatch(storeProductData({ _id: id, name, image }
    ));
    this.props.history.push("/edit");
    // return (<Redirect to="/edit" />)
  }

  handleOnClickDelete = () => {
    console.log(this.props.item.id, this.props.item.name, this.props.item.image)
    const id = this.props.item._id;
    const name = this.props.item.name;
    const image = this.props.item.image;
    this.props.dispatch(deleteProduct({ id, name, image }));
    this.props.history.push("/");
    // return (<Redirect to="/edit" />)
  }

  render() {
    const itemlink = `/edit/${this.props.item._id}`
    return (
      <div className="Product">
        <img src={this.props.item.image} alt={this.props.item.name} />
        <p className="id">{this.props.item._id}</p>
        <p className="id">{this.props.item.name}</p>
        {/* <Link to={itemlink} onClick={this.handleOnClick}><button>Edit</button></Link> */}
        <button onClick={this.handleOnClickEdit}>Edit</button>
        <button onClick={this.handleOnClickDelete}>Delete</button>
      </div>
    );
  }
}

export default withRouter(connect()(Product));


// onClick edit button, create function to dispatch an action
// Create an action and reducer
// Redirect to edit form page