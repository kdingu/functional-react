import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "./components/Menu";
import { recipes } from "./data/recipes";

window.React = React;

ReactDOM.render(
  <Menu r={recipes} />,
  document.getElementById("react-container")
);
