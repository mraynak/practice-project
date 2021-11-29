import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import CreateAnimal from "./CreateAnimal"
import NotFound from "./NotFound";

function Paths() {
    return (
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={"/dashboard"} />
        </Route>
        <Route exact={true} path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact={true} path="/animals/new">
          <CreateAnimal />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    );
  }
  
  export default Paths;