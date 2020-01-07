import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Menu extends React.Component {
  handleLogOut = () => {
    localStorage.removeItem('auth-token')
    sessionStorage.removeItem('auth-token')
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="Menu">
        <button onClick={this.handleLogOut} className="menu-button">Log Out</button>
        <Link to="/addProduct"><button className="menu-button">Add Product</button></Link>
        <Link to="/"><button className="menu-button">Inventory</button></Link>

      </div>
    );
  }
}

export default withRouter(connect()(Menu));
// export default Menu;
