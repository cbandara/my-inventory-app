import React from "react";
// import { Route } from "react-router-dom";
import Product from "./Product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from '../actions';
import "./ProductList.css";


class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts())
  }
  render() {
    console.log(this.props.productList)
    const products = this.props.productList.map(prod => {
      return (
        <li key={prod._id}>
          <Product item={prod}></Product>
        </li>
      );
    });
    return (
      <div className="ProductList">
        <ul>{products}</ul>
        <Link to="/addProduct"><button className="menu-button">Add Product</button></Link>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(mapStateToProps)(ProductList);
