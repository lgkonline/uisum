import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const version = require("../../package.json").version;

import Translation from "./Translation";
import "./main.scss";

window.appTitle = "Uisum";
window.logo = require("./images/uisum logo.svg");
window.t = Translation.getPhrase;

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById("mount")
    );
});