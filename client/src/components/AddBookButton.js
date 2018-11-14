import React, { Component } from "react";
import AddBookForm from "./AddBookForm";
import add from "../ic_add_48px.svg";

class AddBookButton extends Component {
  state = {
    modal: false
  };

  render() {
    return (
      <button
        className="add-button"
        onClick={e => this.setState({ modal: !this.state.modal })}
      >
        <img src={add} alt="Add book" />
        {this.state.modal && <AddBookForm />}
      </button>
    );
  }
}

export default AddBookButton;
