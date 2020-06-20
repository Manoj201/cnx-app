import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AppLayout from "./layout/Layout.container";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" render={() => <Redirect to="/app/part-list" />} />
      <Route path="/app" component={AppLayout} />
    </HashRouter>
  );
}

export default App;
