import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Route component={App} />
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
