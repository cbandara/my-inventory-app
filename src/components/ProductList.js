import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./Product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductList.css";


class ProductList extends React.Component {
  render() {
    const products = this.props.productList.map(prod => {
      return (
        <li key={prod.id}>
          <Route
            path='/'
            render={(props) => <Product item={prod} />}
          />
          {/* <Product item={prod}></Product> */}
        </li>
      );
    });
    return (
      <div className="ProductList">
        <ul>{products}</ul>
        <Link to="/addProduct"><button>Add Product</button></Link>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(mapStateToProps)(ProductList);
