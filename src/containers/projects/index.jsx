import React from "react";
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";
import Calculator from "./calculator.png"
import JavaImage from "./unnamed.jpg"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import WebsiteImages from "./jscsshtml.png"
import Container from "@material-ui/core/Container";
import miniTone from '../../imageCache/mini-toneiplayer-illustrate-image.png'

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

function ProjectSummary({to, image, title, description}) {
  return (
    <StyledCard>
      <CardActionArea href={to} target="_blank" rel="noopener noreferrer">
        <ProjectSummaryMedia><img alt="project" src={image}/></ProjectSummaryMedia>
        <CardContent>
          <Typography variant="h5" gutterBottom>{title}</Typography>
          <Typography align="justify">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}

ProjectSummary.propTypes = {
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const StyledTitle = styled(Typography)`
  padding: 0.5em 0.2em;
  color: #dddddd
`;

export function Projects() {
  return (
    <Container maxWidth={"md"}>
      <Box my={2}>
        <StyledTitle variant={"h3"}>Projects</StyledTitle>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <ProjectSummary
              description="This app offers two basic functions: Quadratic equation solver: 1 solve basic quadratic equation in the form of aX^2+bX+c=0, graph of this equation can be drawn on a bi-dimensional plane.3D plain drawer: draw basic 3D plains in form of Z=aX+bY+c"
              title="SRE's magic calculator"
              image={Calculator}
              to="https://github.com/qiushanbeikun/SREsMagicCalculator"
            />
          </Grid>
          <Grid item sm={6}>
            <ProjectSummary
              description="Try to simulate the Tetris game and build sample rules to let the machine run the game autonomously."
              title="Grand Tetris Auto"
              image={JavaImage}
              to="https://github.com/qiushanbeikun/SREsMagicCalculator"
            />
          </Grid>
          <Grid item sm={6}>
            <ProjectSummary
              description="This website is build upon JS/CSS/HTML, using React and Material-UI"
              title="This website"
              image={WebsiteImages}
              to="https://github.com/qiushanbeikun/personal-website"
            />
          </Grid>

          <Grid item sm={6}>
            <ProjectSummary
              description="A simulator to let Hatsune Miku sing"
              title="Miku Touch"
              image={WebsiteImages}
              to="/mikuTouch"
            />
          </Grid>

          <Grid item sm={6}>
            <ProjectSummary
              description="A simulator of piano and other instruments"
              title="Tone-player"
              image={WebsiteImages}
              to="https://github.com/qiushanbeikun/tone-player"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}