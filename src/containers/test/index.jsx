import React, {useState} from "react";
import Button from "@material-ui/core/Button";

export default function TestPage() {

  const existingComments = [
      {
        name: "testestest",
        email: "test1@gmail.com",
        comment: "This is my first comment on this forum so don't be a dick",
        reply: [
          {
            name: "testest",
            email: "test1@gmail.com",
            comment: "That's a mighty fine comment you've got there my good looking fellow...",
            reply: [
              {
                name: "testest",
                email: "test1@gmail.com",
                comment: "That's a mighty fine comment you've got there my good looking fellow...",
                reply: [
                  {
                    name: "testest",
                    email: "test1@gmail.com",
                    comment: "That's a mighty fine comment you've got there my good looking fellow...",
                    reply: [],
                  }
                ],
              }
            ],
          },
          {
            name: "testest",
            email: "test1@gmail.com",
            comment: "That's a mighty fine comment you've got there my good looking fellow...",
            reply: [],
          },
          {
            name: "testest",
            email: "test1@gmail.com",
            comment: "That's a mighty fine comment you've got there my good looking fellow...",
            reply: [],
          }
        ]
      },
      {
        name: "testest",
        email: "test1@gmail.com",
        comment: "That's a mighty fine comment you've got there my good looking fellow...",
        reply: [
          {
            name: "testest",
            email: "test1@gmail.com",
            comment: "That's a mighty fine comment you've got there my good looking fellow...",
            reply: [],
          }
        ]
      },
      {
        name: "test",
        email: "test1@gmail.com",
        comment: "What is the meaning of all of this 'React' mumbo-jumbo?",
        reply: []
      }];

  let countOfSolutions = 0;
  let solutions = [];
  let countOfFailingBranches = 0;

  let variables = [];

  const constraintTest = () => {

    // let constraint1 = (isNaN(variables[6]))? true : (variables[0] >= variables[6]);
    // let constraint2 = (isNaN(variables[7]))? true : (variables[0] < variables[7]);
    // let constraint3 = (isNaN(variables[5]))? true : (variables[1] - variables[5] === 1 || variables[1] - variables[5] === -1 );
    // let constraint4 = (isNaN(variables[7]))? true : (variables[6] < variables[7]);
    //
    // let constraint5 = (isNaN(variables[6]))? true : (variables[6] -variables[2] === 1 ||variables[6]-variables[2] === -1);
    // let constraint6 = (isNaN(variables[7]))? true : ((variables[7] - variables[2]) % 2 === 0);
    // let constraint7 = (isNaN(variables[7]))? true : (variables[7] !== variables[3]);
    // let constraint8 = (isNaN(variables[6]))? true : (variables[3] >= variables[6]);
    //
    // let constraint9 = (isNaN(variables[3])) ? true : (variables[3] !== variables[2]);
    // let constraint10 = (isNaN(variables[4]))? true : (variables[4] !== variables[2]);
    // let constraint11 = (isNaN(variables[4]))? true : (variables[4] < variables[3] -1);
    // let constraint12 = (isNaN(variables[4]))? true : (variables[4] !== variables[7] -2);
    //
    // let constraint13 = (isNaN(variables[6]))? true : (variables[6] !== variables[5]);
    // let constraint14 = (isNaN(variables[7]))? true : (variables[7] !== variables[5]);
    // let constraint15 = (isNaN(variables[5]))? true : (variables[2] !== variables[5]);
    // let constraint16 = (isNaN(variables[5]))? true : (variables[3] !== variables[5]);
    //
    // let constraint17 = (isNaN(variables[5]))? true : ((variables[5] - variables[4]) % 2 === 1 || (variables[5] - variables[4]) % 2 === -1);

    // the new constraint
    let constraint1 = (isNaN(variables[6]))? true : (variables[6] >= variables[4]);
    let constraint2 = (isNaN(variables[6]))? true : (variables[6] < variables[1]);
    let constraint3 = (isNaN(variables[7]))? true : (variables[0] - variables[7] === 1 || variables[0] - variables[7] === -1 );
    let constraint4 = (isNaN(variables[4]))? true : (variables[4] < variables[1]);

    let constraint5 = (isNaN(variables[4]))? true : (variables[4] -variables[2] === 1 ||variables[4]-variables[2] === -1);
    let constraint6 = (isNaN(variables[2]))? true : ((variables[1] - variables[2]) % 2 === 0);
    let constraint7 = (isNaN(variables[3]))? true : (variables[1] !== variables[3]);
    let constraint8 = (isNaN(variables[4]))? true : (variables[3] >= variables[4]);

    let constraint9 = (isNaN(variables[3])) ? true : (variables[3] !== variables[2]);
    let constraint10 = (isNaN(variables[5]))? true : (variables[5] !== variables[2]);
    let constraint11 = (isNaN(variables[5]))? true : (variables[5] < variables[3] -1);
    let constraint12 = (isNaN(variables[5]))? true : (variables[5] !== variables[1] -2);

    let constraint13 = (isNaN(variables[4]))? true : (variables[4] !== variables[0]);
    let constraint14 = (isNaN(variables[1]))? true : (variables[1] !== variables[0]);
    let constraint15 = (isNaN(variables[2]))? true : (variables[2] !== variables[0]);
    let constraint16 = (isNaN(variables[3]))? true : (variables[3] !== variables[0]);

    let constraint17 = (isNaN(variables[5]))? true : ((variables[5] - variables[0]) % 2 === 1 || (variables[5] - variables[0]) % 2 === -1);

    const testResult = (

      constraint1 &&
      constraint2 &&
      constraint3 &&
      constraint4 &&

      constraint5 &&
      constraint6 &&
      constraint7 &&
      constraint8 &&

      constraint9 &&
      constraint10 &&
      constraint11 &&
      constraint12 &&

      constraint13 &&
      constraint14 &&
      constraint15 &&
      constraint16 &&

      constraint17
    );
    console.log("current variables:" + variables);
    console.log(testResult);
    (testResult)? countOfFailingBranches+= 0 : countOfFailingBranches += 1;
    assignOrder(testResult);
  };

  const assignOrder = (previousTest) => {

    // if test is true
    //    if array.length < 8
    //        assign next letter with 1
    //        run test with the new array
    //    else array.length === 8
    //        increment count of solution
    //        while (last digit === 4)
    //           erase the last digit
    //        if (array.length > 0)
    //           erase the last digit and increment the previous digit run test again
    //        else
    //           terminate
    //
    // if test is false
    //    while (last digit === 4)
    //       if (array.length > 0)
    //          erase the last digit and increment the previous digit run test again
    //       else
    //          terminate

    if (previousTest){
      if (variables.length < 8) {
        variables = [...variables, 1];
        constraintTest();

      } else { // currentIndex = 8
        countOfSolutions += 1;
        solutions += variables;
        if (variables[variables.length-1] !== 4 && !isNaN(variables[variables.length-1])) {
          variables = [...variables.splice(0,variables.length-1), variables[variables.length-1]+1];
          constraintTest();
        } else {
          while (variables[variables.length-1] === 4){
            variables = variables.splice(0, variables.length-1);
          }
          if (variables.length > 0) {
            variables = [
              ...(variables.splice(0,variables.length-1)),
              variables[variables.length-1]+1];
            constraintTest();
          }
          else {
            console.log("End of search");
          }
        }
      }
    } else {
      // debugger;
      if (variables[variables.length-1] !== 4 && !isNaN(variables[variables.length-1])) {
        variables = [...variables.splice(0,variables.length-1), variables[variables.length-1]+1];
        constraintTest();
      } else {
        while (variables[variables.length-1] === 4){
          variables = variables.splice(0, variables.length-1);
        }
        if (variables.length > 0) {
          variables = [
            ...(variables.splice(0,variables.length-1)),
            variables[variables.length-1]+1];
          constraintTest();
        }
        else {
          console.log("End of search");
          console.log("Number of solutions: " + countOfSolutions);
          console.log("Number of Failing branches: " + countOfFailingBranches);
          console.log(solutions);
        }
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    assignOrder(true);
  };

  return (
    // <div>
    //   <h1> this is a test page for new features</h1>
    //   <Container maxWidth={"lg"}>
    //     <CommentBox existingComments={existingComments}/>
    //   </Container>
    // </div>

    <div>
      <Button onClick={handleClick}>
        test
      </Button>
    </div>
  )
}