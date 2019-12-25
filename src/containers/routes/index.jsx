import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "../home";
import {Projects} from "../projects";
import {Resume} from "../resume";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
    </Switch>
  );
}


