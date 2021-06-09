import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "@/pages/Home/index";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default BasicRoute;
