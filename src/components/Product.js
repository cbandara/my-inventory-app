import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <img src="https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/e/n/enjoi-doesn-t-fit-t-shirt-royal-blue-2.1506663643.jpg"></img>
        <p>0011</p>
      </div>
    );
  }
}

export default Product;

// Hook up Product to ProductList
// Connect ProductList to Store