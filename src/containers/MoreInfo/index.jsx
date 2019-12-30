import Typography from "@material-ui/core/Typography";
import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import DefaultImage from "../../backg.jpg"
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const StyledTitle = styled(Typography)`
  padding: 0.5em 0.2em;
  color: #dddddd
`;

const StyledText = styled(Typography)`
  padding: 1em;
  color: #eeeeee;
`;


ReadCard.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
};


const ProjectSummaryMedia = styled.div`
  height: 300px;
  overflow: hidden;
  & img {
    height: 300px;
    width: 100%;
  }
`;

const StyledCard = styled(Card)`
  &:hover img {
    transform: scale(1.1);
    transition: all .5s;
  }
`;

function ReadCard({text, image, link}) {
  return (
    <StyledCard>
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <ProjectSummaryMedia><img alt="project" src={image}/></ProjectSummaryMedia>
        <CardContent>
          <Typography variant={"h6"}>{text}</Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}

export default function Index() {

  return (
    <Container maxWidth={"lg"}>
      <Box my={6}>
        <StyledTitle variant={"h3"}>More About Me</StyledTitle>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <ReadCard text="Interests" image={DefaultImage} link={"/idea"}/>
            <div>
              <StyledText variant={"h5"}>Painting</StyledText>
              <StyledText variant={"h5"}>MADムービー</StyledText>
            </div>
          </Grid>

          <Grid item sm={6}>
            <ReadCard text="Ideas" image={DefaultImage} link={"/idea"}/>
            <div>
              <StyledText variant={"h5"}>Painting</StyledText>
              <StyledText variant={"h5"}>MADムービー</StyledText>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}