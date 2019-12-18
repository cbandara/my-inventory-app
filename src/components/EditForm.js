import React from "react";
import { connect } from "react-redux";
import { editProduct } from "../actions";
import "./ProductForm.css";

class EditForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const name = this.name.value;
    const img = this.img.value;
    this.props.dispatch(editProduct({ name, img }));
    this.props.history.push("/"); // Redirects to the root path
  }

  handleChange(e) {
    // Should I change this?
    console.log(e.target.value);
  }

  render() {
    console.log(this.props)
    return (
      // Convert to Redux Form when using API
      <div className="formWrapper">
        <form className="productForm" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="name">name</label>
          <input
            name="name"
            id="name"
            type="text"
            ref={name => (this.name = name)}
            onChange={this.handleChange}
            defaultValue={this.props.name}
            required
          ></input>
          <br />
          <label htmlFor="img">Image</label>
          <input
            name="img"
            id="img"
            type="text"
            ref={img => (this.img = img)}
            defaultValue={this.props.match.params.img}
            required
          ></input>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>

    );
  }
}

export const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(mapStateToProps)(EditForm);
