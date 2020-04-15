import React from "react";
import Typography from "@material-ui/core/Typography";
import Calculator from "../../imageFolder/calculator.png"
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Anno1800Photo from '../../imageFolder/anno1800Photo.png';
import Container from "@material-ui/core/Container";
import miniTone from '../../imageFolder/mini-toneiplayer-illustrate-image.png'
import ReactLogo from '../../imageFolder/logo512.png'
import cspLogo from '../../imageFolder/csp.png'
import {
  PaddingTopAndBottomThreeEm,
  StyledImage,
  StyledText
} from "../../commonStyles";

const ProjectSummaryMedia = styled.div`
  height: 300px;
  overflow: hidden;
  & img {
    height: 300px;
    width: 100%;
  }
`;

const StyledTitle = styled(Typography)`
  padding: 0.5em 0.2em;
  color: #dddddd
`;

export function Projects() {
  return (
    <Container maxWidth={"lg"}>


        <PaddingTopAndBottomThreeEm>
          <StyledTitle variant={"h3"}>Projects</StyledTitle>
          <hr/>
        </PaddingTopAndBottomThreeEm>

        <Grid container spacing={2}>

            <Grid item sm={3}>
              <StyledText variant={"h5"}>
                SRE's magic calculator
              </StyledText>
            </Grid>
            <Grid item sm={3}>
              <StyledImage src={Calculator} alt={"sre's magic calculator"}/>
            </Grid>
            <Grid item sm={6}>
              <StyledText variant={"h6"} paragraph>
                This app offers two basic functions: Quadratic equation solver: 1 solve basic quadratic equation in the
                form of aX^2+bX+c=0, graph of this equation can be drawn on a bi-dimensional plane.3D plain drawer: draw
                basic 3D plains in form of Z=aX+bY+c"
              </StyledText>
            </Grid>

          <Grid item sm={3}>
            <StyledText variant={"h5"}>
              This website
            </StyledText>
          </Grid>
          <Grid item sm={3}>
            <StyledImage src={ReactLogo} alt={"sre's magic calculator"}/>
          </Grid>
          <Grid item sm={6}>
            <StyledText variant={"h6"} paragraph>
              This website is build upon JS/CSS/HTML, using React and Material-UI
            </StyledText>
          </Grid>

          <Grid item sm={3}>
            <StyledText variant={"h5"}>
              Tone-player
            </StyledText>
          </Grid>
          <Grid item sm={3}>
            <StyledImage src={miniTone} alt={"sre's magic calculator"}/>
          </Grid>
          <Grid item sm={6}>
            <StyledText variant={"h6"} paragraph>
              A simulator of piano and other instruments
            </StyledText>
          </Grid>

          <Grid item sm={3}>
            <StyledText variant={"h5"}>
              Miku Touch
            </StyledText>
          </Grid>
          <Grid item sm={3}>
            <StyledImage src={ReactLogo} alt={"sre's magic calculator"}/>
          </Grid>
          <Grid item sm={6}>
            <StyledText variant={"h6"} paragraph>
              A simulator to let Hatsune Miku sing
            </StyledText>
          </Grid>
        </Grid>

        <PaddingTopAndBottomThreeEm>
          <StyledText variant={"h4"}> Just for fun </StyledText>
          <hr/>
        </PaddingTopAndBottomThreeEm>

      <Grid container spacing={2}>

        <Grid item sm={3}>
        <StyledText variant={"h5"}>
          Anno 1800 mods editor
        </StyledText>
      </Grid>
        <Grid item sm={3}>
          <StyledImage src={Anno1800Photo} alt={"sre's magic calculator"}/>
        </Grid>
        <Grid item sm={6}>
          <StyledText variant={"h6"} paragraph>
            Based on xforce's Anno 1800 mods loader, this tool offers chance to customize your game specs, making the game easier or harder at your own choice.
          </StyledText>
        </Grid>

        <Grid item sm={3}>
          <StyledText variant={"h5"}>
            CSP tool
          </StyledText>
        </Grid>
        <Grid item sm={3}>
          <StyledImage src={cspLogo} alt={"sre's magic calculator"}/>
        </Grid>
        <Grid item sm={6}>
          <StyledText variant={"h6"} paragraph>
            Inspired by CPSC322 (Intro to AI) assignment, the tool can solve basic numeral CSP with O(nlogn) time and space complexity.
          </StyledText>
        </Grid>
      </Grid>





    </Container>
  );
}
