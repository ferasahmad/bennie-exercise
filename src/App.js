import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserDetails from "./features/UserDetails";
import Main from "./features/Main";

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/user-details">
        <UserDetails />
      </Route>
    </Switch>
  </Router>

export default App;
