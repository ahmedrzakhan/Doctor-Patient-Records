import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./../components/auth/Login";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Login />} />
    </Switch>
  );
};

export default PublicRoutes;
