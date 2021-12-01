import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import CreateAnimal from "./CreateAnimal"
import EditAnimal from "./EditAnimal"
import Search from "./Search";
import NotFound from "./NotFound";
import ListByRegions from "./ListByRegions";

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
        <Route exact={true} path="/animals/:animal_id/edit">
          <EditAnimal />
        </Route>
        <Route exact={true} path="/search">
          <Search />
        </Route>
        <Route exact={true} path="/animals/search/:continents">
          <ListByRegions />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    );
  }
  
  export default Paths;