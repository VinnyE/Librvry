import React, { Component } from "react";

import styles from "./SignIn.module.css";

class SignIn extends Component {
  state = {
    fields: {
      username: "",
      password: ""
    }
  };

  handleSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="username">
          Username:
          <input
            type="text"
            placeholder="example@example.com"
            id="username"
            className={styles.textInput}
            value={this.state.username}
          />
        </label>
        <label className={styles.label} htmlFor="password">
          Password:
          <input
            type="text"
            placeholder="example123"
            id="password"
            className={styles.textInput}
            value={this.state.password}
          />
        </label>
        <input type="submit" value="Log In" className={styles.signInBtn} />
      </form>
    );
  }
}

export default SignIn;
