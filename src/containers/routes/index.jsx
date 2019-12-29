import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "../home";
import {Projects} from "../projects";
import {Resume} from "../resume";
import TipsForJava from "../projects/tips_for_java";
import MikuTouch from "../mikuTouch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/projects" exact>
        <Projects/>
      </Route>
      <Route path="/projects/tips_for_java">
        <TipsForJava/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/mikutouch">
        <MikuTouch/>
      </Route>
    </Switch>
  );
}


