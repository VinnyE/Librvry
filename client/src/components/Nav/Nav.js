import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { AuthContext } from "../Auth/EnhancedAuthProvider";

console.log(styles);

class Nav extends Component {
  state = {};

  handleSignOut = actions => () => {
    actions.handleSignOut();
  };

  render() {
    return (
      <AuthContext.Consumer>
        {context => {
          return (
            <header className={styles.header}>
              <nav className={styles.nav}>
                <Link className={styles.heading} to="/">
                  Librvry
                </Link>
                {context.state.token ? (
                  <button
                    className={styles.callToAction}
                    onClick={this.handleSignOut(context.actions)}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/signin" className={styles.callToAction}>
                    Sign In
                  </Link>
                )}
              </nav>
            </header>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Nav;
