import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "normalize.css";
import "./styles/base.css";

import { MainContentArea } from "./layout";
import * as Pages from "./pages";

const App = () => (
  <Router>
    <MainContentArea>
      <Switch>
        <Route component={Pages.Home} exact path="/" />
      </Switch>
    </MainContentArea>
  </Router>
);

ReactDom.render(<App />, document.getElementById("app-root"));
