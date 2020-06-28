import React from "react";
import { Route } from "react-router";

import Home from "./pages/Home";
import CS61B from "./pages/CS61B";

export default (
  <Route path="/" component={Home}>
    <Route path="./pages/CS61B" component={CS61B} />
  </Route>
);
