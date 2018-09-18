import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

const root = (
  <Router>
    <App />
  </Router>
);

ReactDOM.hydrate(root, document.getElementById("app"));
