import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "normalize.css";
import "./styles/base.css";

import { MainLayoutContainer } from "./layout";
import * as Pages from "./pages";

const App: React.FunctionComponent = (): JSX.Element => (
  <Router>
    <MainLayoutContainer>
      <Switch>
        <Route component={Pages.Home} exact path="/" />
        <Route component={Pages.NewsFeed} exact path="/news-feed/:continent" />
        <Route render={(): JSX.Element => <div>404</div>} />
      </Switch>
    </MainLayoutContainer>
  </Router>
);

ReactDom.render(<App />, document.getElementById("app-root"));
