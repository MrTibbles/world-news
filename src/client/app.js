import React from "react";
import ReactDom from "react-dom";

import "normalize.css";
import "./styles/base.css";

const App = () => <div>World News</div>;

ReactDom.render(<App />, document.getElementById("app-root"));
