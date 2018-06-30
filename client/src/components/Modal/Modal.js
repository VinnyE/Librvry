import React, { Component } from "react";
import styles from "./Modal.module.css";

import { makePostRequest } from "../../utils/api";

class Modal extends Component {
  state = {
    searchValue: ""
  };

  goBack = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  handleSearchChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    makePostRequest("api/books/search", {
      searchTerm: this.state.searchValue
    });
  };

  render() {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <h1>Modal!</h1>
          <button onClick={this.goBack}>X</button>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
