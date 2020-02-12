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
import TalkAboutTech from "../idea/talkAboutTeck";
import BaiduYun from "../idea/baiduYun";
import TestPage from "../test";
import TorrentSearch from "../torrentSearch";
import CPSC110 from "../tutor/cpsc110";
import XingYuTu from "../idea/xingYuTu";
import MZFCSub from "../MZFCSub";

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
        <CanvasOnTry/>
      </Route>

      <Route path="/moreInfo">
        <Index/>
      </Route>

      <Route path="/idea" exact>
        <Idea/>
      </Route>

      <Route path="/interest">
        <Interest/>
      </Route>

      <Route path="/idea/yutuMain">
        <YUTUMainPage/>
      </Route>

      <Route path="/idea/talkAboutTech">
        <TalkAboutTech/>
      </Route>

      <Route path="/idea/baiduYun">
        <BaiduYun/>
      </Route>

      <Route path="/test">
        <TestPage/>
      </Route>

      <Route path="/torrentSearchTool">
        <TorrentSearch/>
      </Route>

      <Route path="/tutor/cpsc110">
        <CPSC110 />
      </Route>

      <Route path="/idea/xingyutu">
        <XingYuTu/>
      </Route>

      <Route path={"/mzfcsub"}>
        <MZFCSub/>
      </Route>

    </Switch>
  );
}


