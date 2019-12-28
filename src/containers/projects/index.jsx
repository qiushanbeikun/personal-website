import React from "react";
import {Link} from "react-router-dom";

export function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div>
        <div>


          <div>
            // the place for the image
          </div>
          <div>
            <h2> SRE's magic calculator </h2>
            <h3> This app offers two basic functions: </h3>
            <ul>
              <li>Quadratic equation solver:  solve basic quadratic equation in the form of aX^2+bX+c=0, graph of this equation can be drawn on a bi-dimensional plane. </li>
              <li> 3D plain drawer: draw basic 3D plains in form of Z=aX+bY+c </li>
              <li>
                <a href= "https://github.com/qiushanbeikun/SREsMagicCalculator" traget = "_blank"> GitHub link </a>
              </li>
            </ul>
          </div>


          <div>
            // place for the image
          </div>
          <div>
            <h2>
              <Link to="/projects/tips_for_java" > Tips for Java </Link>
            </h2>
            <h3> JAVA is the first programming language I learn, by my limited experience on JAVA, here are some tips u might need to know in an interview. </h3>
          </div>


          <div>
            // place for the image
          </div>
          <div>
            <h2> Grand Tetris Auto </h2>
            <ul>
              <li> Try to simulate the Tetris game and build sample rules to let the machine run the game autonomously. </li>
              <li> Still under developing. </li>
              <li>
                <a href= "https://github.com/qiushanbeikun/Tetris" traget = "_blank"> GitHub link </a>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </>
  );
}