import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.heading} to="/">
            Librvry
          </Link>
          <Link to="/signin" className={styles.signIn}>
            Sign In
          </Link>
        </nav>
      </header>
    );
  }
}

export default Nav;
