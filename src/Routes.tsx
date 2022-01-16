import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
}
export default Routes;
