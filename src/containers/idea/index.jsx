import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DefaultImage from "../../backg.jpg"
import Container from "@material-ui/core/Container";
import PropTypes from 'prop-types'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const StyledTitle = styled(Typography)`
  padding: 0.5em 0.2em;
  color: #dddddd
`;

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

const StyledTitleImage = styled.img`
  height: 250px;
  width: 450px;
  overflow: hidden;
  padding: 6px 0 0 6px;
`;

const StylingBackgroundImage = styled.div`
 && {
   padding: 0;

 }
  background-color: #eeeeee55;
`;

const StyledGrid = styled(Grid)`
  && {
    padding: 6px;
  }
`;

function IdeaSection(props) {
  return (
    <Box my={2}>
      <StylingBackgroundImage>
        <Grid container>
          <Grid item sm={5}>
            <StyledTitleImage src={props.image}/>
          </Grid>

          <StyledGrid item sm={7}>
            <StyledText variant={"h4"}>{props.title}</StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText variant={"h4"}>test</StyledText>
            <StyledText variant={"h4"}>test</StyledText>
          </StyledGrid>
        </Grid>
      </StylingBackgroundImage>
    </Box>
  )
}


export default function Idea() {
  return (
    <Container maxWidth={"lg"}>
      <StyledTitle variant={"h3"}>Idea</StyledTitle>
      <div>
        <IdeaSection title="test1" link="/mikuTouch" image={DefaultImage} description="test description"/>
      </div>
    </Container>
  )
}