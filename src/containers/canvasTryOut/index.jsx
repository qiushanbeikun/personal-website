import P5Wrapper from 'react-p5-wrapper';
import React from "react";
import {Container} from "@material-ui/core";


export default function CanvasOnTry(){
  return (
    <Container maxWidth={"md"}>
      <P5Wrapper sketch = {Scratch}/>
    </Container>
  )
}

 function Scratch(p){
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.normalMaterial();
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
}