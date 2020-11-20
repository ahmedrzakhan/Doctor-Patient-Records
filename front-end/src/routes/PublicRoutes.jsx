import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./../components/auth/Login";
import Register from "./../components/auth/Register";
import Dashboard from "./../components/dashboard/Dashboard";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Login />} />
      <Route path="/register" exact render={() => <Register />} />
      <Route path="/dashboard/:username" render={(props) => <Dashboard {...props} />} />
    </Switch>
  );
};

export default PublicRoutes;
