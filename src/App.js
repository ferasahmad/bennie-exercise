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
      <Route exact path="/" component={Main} />
      <Route path="/user-details/:id" component={UserDetails} />
    </Switch>
  </Router>

export default App;
