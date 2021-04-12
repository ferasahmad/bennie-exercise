import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Main from "./components/Main";

function App() {
  return (
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
  );
}

export default App;
