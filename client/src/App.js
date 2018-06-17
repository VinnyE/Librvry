import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Nav, SignIn } from "./components";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
