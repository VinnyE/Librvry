import React, { Component } from "react";
import styles from "./Home.module.css";
import { AuthContext } from "../Auth/EnhancedAuthProvider";
import { Link } from "react-router-dom";

// get all books on component mount.
// if signed in show "add book" button.
// clicking add book button will open new route (modal) with input for google api search.
class Home extends Component {
  state = {};

  handleClick = () => {
    console.log("click");
  };

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
              <div className={styles.content}>
                {context.state.token ? (
                  <Link to={{ pathname: "/addBook", state: { modal: true } }}>
                    Add new book
                  </Link>
                ) : null}
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Home;
