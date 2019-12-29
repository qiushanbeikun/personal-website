import React from "react";
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import DefaultSound from "./sampleSound.wav"
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  && {
    background-color: #00ffff77;
    color: #fff;
    width: 100%;
    border-radius: 0;
    animation: all 2s;
    font-size: 2em;
    font-weight: 800;
    &:hover {
      color: ${({theme}) => theme.palette.grey["700"]}
      background-color: #00ffff;
    }
  }
`;

const MikuTouchContainer = styled.div`
  max-width: 475px;
  margin: 1em auto;
`;



function VoiceKey({text, sound}) {
  return (
    <StyledButton onClick={() => new Audio(sound).play()}>
      {text}
    </StyledButton>
  )
}


VoiceKey.propTypes = {
  text: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
};


const inputMap = [
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],
  [{ label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}, { label: 'ア', sound: DefaultSound}],

];

export default function MikuTouch() {
  return (
    <MikuTouchContainer>
      <Grid container direction={"column"}>
        {inputMap.map((row, i) => (
          <Grid container item key={`row-${i}`}>
            {
              row.map((block, j) => (
                <Grid item xs key={`col-${j}`}>
                  <VoiceKey text= {block.label} sound={block.sound}/>
                </Grid>
              ))
            }
          </Grid>
        ))}
      </Grid>
    </MikuTouchContainer>
  )
}
