import React, { Component } from "react";
import styles from "./Home.module.css";
import { AuthContext } from "../Auth/EnhancedAuthProvider";

class Home extends Component {
  state = {};
  render() {
    return (
      <AuthContext.Consumer>
        {context => {
          return (
            <div className={styles.wrapper}>
              <aside className={styles.sidebar}>
                <input
                  className={styles.search}
                  placeholder="Search librvry..."
                  type="text"
                />
                <h2 className={styles.categoriesHeading}>Categories</h2>
              </aside>
              <div className={styles.content}>Content here</div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Home;
