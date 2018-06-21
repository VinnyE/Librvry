import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Nav, SignIn } from "./components";
import styles from "./App.module.css";
import EnhancedAuthProvider, {
  AuthContext
} from "./components/Auth/EnhancedAuthProvider";

class App extends Component {
  render() {
    return (
      <Router>
        <EnhancedAuthProvider>
          <div className={styles.App}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </div>
        </EnhancedAuthProvider>
      </Router>
    );
  }
}

export default App;
