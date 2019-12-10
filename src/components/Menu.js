import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">

        <Link to="/addProduct"><button>Add Product</button></Link>
        <Link to="/"><button>Inventory</button></Link>
      </div>
    );
  }
}

export default Menu;
