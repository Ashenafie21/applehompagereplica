import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/bootstrap.css";
import "./components/css/styles.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
