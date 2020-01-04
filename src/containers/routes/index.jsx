import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "../home";
import {Projects} from "../projects";
import {Resume} from "../resume";
import TipsForJava from "../projects/tips_for_java";
import MikuTouch from "../mikuTouch";
import CanvasOnTry from "../canvasTryOut";
import Index from "../MoreInfo";
import Idea from "../idea";
import Interest from "../interests";
import YUTUMainPage from "../idea/yutu";

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

      <Route path="/mikuTouch">
        <MikuTouch/>
      </Route>

      <Route path="/canvasOnTry">
        <CanvasOnTry />
      </Route>

      <Route path="/moreInfo">
        <Index />
      </Route>

      <Route path="/idea" exact>
        <Idea />
      </Route>

      <Route path="/interest">
        <Interest />
      </Route>

      <Route path="/idea/yutuMain">
        <YUTUMainPage />
      </Route>
    </Switch>
  );
}


