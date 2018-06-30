import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Nav, SignIn, Modal } from "./components";
import styles from "./App.module.css";
import EnhancedAuthProvider, {
  AuthContext
} from "./components/Auth/EnhancedAuthProvider";

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <EnhancedAuthProvider>
        <div className={styles.App}>
          <Nav />
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
          </Switch>
          {isModal ? <Route path="/addBook" component={Modal} /> : null}
        </div>
      </EnhancedAuthProvider>
    );
  }
}

export default App;
