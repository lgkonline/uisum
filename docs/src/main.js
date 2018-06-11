import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const version = require("../../package.json").version;

import "./main.scss";

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById("mount")
    );
});