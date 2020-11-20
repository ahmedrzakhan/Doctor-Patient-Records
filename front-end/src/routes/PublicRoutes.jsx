import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./../components/auth/Login";
import Register from "./../components/auth/Register";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Login />} />
      <Route path="/register" exact render={() => <Register />} />
    </Switch>
  );
};

export default PublicRoutes;
