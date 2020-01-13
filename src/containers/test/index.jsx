import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import CommentBox from "../../components/CommentSystem/CommentBox";

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




  return (
    <div>
      <h1> this is a test page for new features</h1>
      <Container maxWidth={"lg"}>
        <CommentBox existingComments={existingComments}/>
      </Container>
    </div>
  )
}