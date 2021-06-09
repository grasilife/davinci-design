import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { render, hydrate } from "react-dom";

const renderMethod = module.hot ? render : hydrate;
renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
