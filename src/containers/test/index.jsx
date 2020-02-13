import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import CommentBox from "../../components/CommentSystem/CommentBox";
import Button from "@material-ui/core/Button";

export default function TestPage() {

  const existingComments =
    [
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

  const [countOfSolutions, setCountOfSolutions] = React.useState(0);

  const [countOfFailingBranches, setCountOfFailingBranches] = React.useState(0);

  const [variables, setVariables] = React.useState([]);

  const testSetVariables = () => {
    setVariables([...variables,1,2]);
    console.log(variables);
  };

  const constraintTest = () => {
    console.log(true);
    assignOrder(true);
  };

  const assignOrder = (previousTest, event) => {

    console.log("current array: " + variables);
    console.log(variables.length);
    // const currentIndex = variables.length;
    const lastDigit = variables[variables.length-1];


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
        console.log("@@@@@branch1");
        setVariables([...variables, 1]);
        debugger;
        constraintTest();

      } else { // currentIndex = 8
        setCountOfSolutions(countOfSolutions+1);
        while (variables[variables.length-1] === 4){
          setVariables(variables.splice(0, variables.length-2));
        }
        if (variables.length > 0) {
          setVariables([
            ...(variables.splice(0,variables.length-3)),
            variables[variables.length-2]+1]);
          constraintTest();
        }
        else {
          console.log("End of search");
        }
      }
    } else {
      while (variables[variables.length-1] === 4){
        setVariables(variables.splice(0, variables.length-2));
      }
      if (variables.length > 0) {
        setVariables([
          ...(variables.splice(0,variables.length-3)),
          variables[variables.length-2]+1]);
        constraintTest();
      }
      else {
        console.log("End of search");
      }
    }




    // (lastDigit != 4) increment last digit : move to previous digit and repeat
  };

  const handleClick = (event) => {
    event.preventDefault();

    // console.log(countOfFailingBranches);
    // console.log(countOfSolutions);


    assignOrder(true);




    const domains = [1, 2, 3, 4];
    const constraints = [];
    variables.map((eachVariables, i ) => (
      console.log()
    ))
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