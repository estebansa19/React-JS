import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import App from "./components/App";

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
