import React from "react";

export default function TipsForJava() {
  return (
    <div>
      <h1> JAVA Tips? </h1>
      <div>
        <h3> JAVA is the first programming language I learn, by my limited experience on JAVA, here are some tips u might need to know in an interview. </h3>
        <h3> If there is any error in this page, please contact me for correction. Thanks. </h3>
        <p> Reference list:</p>
        <a href = "https://mp.weixin.qq.com/s/IBbD3CmVWsTL9ymHg6gGGA" target = "_blank">https://mp.weixin.qq.com/s/IBbD3CmVWsTL9ymHg6gGGA</a>
        <a href = "https://en.wikibooks.org/wiki/Java_Programming" target = "_blank">https://en.wikibooks.org/wiki/Java_Programming</a>
        <a href ="https://en.wikipedia.org/wiki/Thread_safety" target = "_blank">https://en.wikipedia.org/wiki/Thread_safety</a>
        <a href = "https://www.cnblogs.com/NeilZhang/p/8623207.html" target = "_blank">https://www.cnblogs.com/NeilZhang/p/8623207.html</a>
      </div>

      <div>
        <h3> 1. JDK and JRE? </h3>
        <ul>
          <li> JDK is Java Development Kit and JRE is Java Runtime Environment. </li>
          <li> JDK offers both development environment and runtime envrionment. Thus, in some way,  JDK >= JRE,  JDK = JRE + javac, where javac is the compiler. </li>
          <li> In summary, if u want to write codes in JAVA, u need to install JDK, if u just need to run Java code, JRE will be enough. </li>
        </ul>
      </div>


      <div>
        <h3> 2. FINAL ? </h3>
        <ul>
          <li> Final variable must be initiated and cannot be changed. </li>
          <li> Final methods cannot be overrided. </li>
          <li> Final classes cannot be extended, all the methods in a final class are also final. Adding "final" for methods in a final class is permitted but meaningless. </li>

        </ul>
      </div>






    </div>
  )
}