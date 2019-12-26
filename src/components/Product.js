import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { storeProductData } from "../actions";

class Product extends React.Component {
  // handleOnClick() {
  //   console.log(this.props.item.id)
  //   // this.props.dispatch(storeProductData({ id, name, img }));
  // 
  handleOnClick = () => {
    console.log(this.props.item.id, this.props.item.name, this.props.item.img)
    const id = this.props.item.id;
    const name = this.props.item.name;
    const img = this.props.item.img;
    this.props.dispatch(storeProductData({ id, name, img }
    ));
    this.props.history.push("/edit");
    // return (<Redirect to="/edit" />)
  }
  render() {
    const itemlink = `/edit/${this.props.item.id}`
    return (
      <div className="Product">
        <img src={this.props.item.img} alt={this.props.item.name}></img>
        <p className="id">{this.props.item.id}</p>
        <p className="id">{this.props.item.name}</p>
        {/* <Link to={itemlink} onClick={this.handleOnClick}><button>Edit</button></Link> */}
        <button onClick={this.handleOnClick}>Edit</button>
      </div>
    );
  }
}

export default withRouter(connect()(Product));


// onClick edit button, create function to dispatch an action
// Create an action and reducer
// Redirect to edit form page