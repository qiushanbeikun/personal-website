import React from "react";
import Container from "@material-ui/core/Container";
import {StyledLabel, StyledText, StyledSubtitle, StyledItalicText, PaddingAroundEMainText} from '../../../commonStyles'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";


const StyledButton = styled(Button)`
  &:before {
    content: "";
    display: block;
  }
  && {
    color: #eeeeee;
    width: 100%;
    height: 3em;
    border-radius: 0;
    animation: all 2s;
    font-size: 1.5em;
    &:hover {
      // color: #00bbbb; 
      background-color: #00ffff66;
    }
  }
`;



function ChapterShortcut({index, title, targetPosition}){
  return (
    <StyledButton onClick={console.log(targetPosition)}>
      {index+". "+title}
    </StyledButton>
  )
}

ChapterShortcut.prototype = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  targetPosition: PropTypes.string.isRequired,
};

const Chapters = [
  [
    {index: '1', title:'example Title', targetPosition: "example target position"},
    {index: '2', title:'example Title', targetPosition: "example target position"},
    {index: '3', title:'example Title', targetPosition: "example target position"},
    {index: '4', title:'example Title', targetPosition: "example target position"},
    {index: '5', title:'example Title', targetPosition: "example target position"},

    ]
];


export default function XingYuTu() {
    return (
      <PaddingAroundEMainText>
        <Container maxWidth={"lg"}>
          <PaddingAroundEMainText>
            <StyledLabel variant={"h3"}>
              xingyutu
            </StyledLabel>
          </PaddingAroundEMainText>

          <div>
            <Grid container direction={"column"}>
              {Chapters.map((row, i) => (
                <Grid container item key={`row-${i}`}>
                  {
                    row.map((block, j) => (
                      <Grid item xs key={`col-${j}`}>
                        <ChapterShortcut index={block.index} title={block.title} targetPosition={block.targetPosition}/>
                      </Grid>
                    ))
                  }
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </PaddingAroundEMainText>
    )
}