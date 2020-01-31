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
    color: #00ffff66;
    width: 100%;
    border-radius: 0;
    animation: all 2s;
    font-size: 2em;
    font-weight: 800;
    &:hover {
      color: #00bbbb; 
      background-color: #00ffff66;
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
  [{label: 'ア', sound: DefaultSound},
    {label: 'イ', sound: DefaultSound},
    {label: 'ウ', sound: DefaultSound},
    {label: 'エ', sound: DefaultSound},
    {label: 'オ', sound: DefaultSound}],
  [{label: 'カ', sound: DefaultSound},
    {label: 'キ', sound: DefaultSound},
    {label: 'ク', sound: DefaultSound},
    {label: 'ケ', sound: DefaultSound},
    {label: 'コ', sound: DefaultSound}],
  [{label: 'サ', sound: DefaultSound},
    {label: 'シ', sound: DefaultSound},
    {label: 'ス', sound: DefaultSound},
    {label: 'セ', sound: DefaultSound},
    {label: 'ソ', sound: DefaultSound}],
  [{label: 'タ', sound: DefaultSound},
    {label: 'チ', sound: DefaultSound},
    {label: 'ツ', sound: DefaultSound},
    {label: 'テ', sound: DefaultSound},
    {label: 'ト', sound: DefaultSound}],
  [{label: 'ナ', sound: DefaultSound},
    {label: 'ニ', sound: DefaultSound},
    {label: 'ヌ', sound: DefaultSound},
    {label: 'ネ', sound: DefaultSound},
    {label: 'ノ', sound: DefaultSound}],
  [{label: 'ハ', sound: DefaultSound},
    {label: 'ヒ', sound: DefaultSound},
    {label: 'フ', sound: DefaultSound},
    {label: 'ヘ', sound: DefaultSound},
    {label: 'ホ', sound: DefaultSound}],
  [{label: 'マ', sound: DefaultSound},
    {label: 'ミ', sound: DefaultSound},
    {label: 'ム', sound: DefaultSound},
    {label: 'メ', sound: DefaultSound},
    {label: 'モ', sound: DefaultSound}],
  [{label: 'ヤ', sound: DefaultSound},
    {label: '?', sound: DefaultSound},
    {label: 'ユ', sound: DefaultSound},
    {label: '?', sound: DefaultSound},
    {label: 'ヨ', sound: DefaultSound}],
  [{label: 'ラ', sound: DefaultSound},
    {label: 'リ', sound: DefaultSound},
    {label: 'ル', sound: DefaultSound},
    {label: 'レ', sound: DefaultSound},
    {label: 'ロ', sound: DefaultSound}],
  [{label: 'ワ', sound: DefaultSound},
    {label: '?', sound: DefaultSound},
    {label: '?', sound: DefaultSound},
    {label: '?', sound: DefaultSound},
    {label: 'ヲ', sound: DefaultSound}],

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
                    <VoiceKey text={block.label} sound={block.sound}/>
                  </Grid>
                ))
              }
            </Grid>
          ))}
        </Grid>
      </MikuTouchContainer>
  )
}
