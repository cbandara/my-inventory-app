import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">

        <Link to="/addProduct"><button className="menu-button">Add Product</button></Link>
        <Link to="/"><button className="menu-button">Inventory</button></Link>
      </div>
    );
  }
}

export default Menu;
