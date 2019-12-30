import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Parallax} from "react-parallax";
import styled from "styled-components";
import BackGround from "./1579461169_preview_Recent Best.jpg"
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from 'prop-types'


const StyledBigName = styled(Typography)`
  padding: 1em 0;
  color: #eeeeee;
`;

const StyledText = styled(Typography)`
  padding: 10px 0;
  color: #eeeeee;
`;


const StyledCard = styled(Card)`
  &:hover img {
    transform: scale(1.1);
    transition: all .5s;
  }
`;

const ProjectSummaryMedia = styled.div`
  height: 250px;
  overflow: hidden;
  & img {
    height: 300px;
    width: 100%;
  }
`;



function ReadCard ({text, image, link}) {
  return (
    <StyledCard>
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <ProjectSummaryMedia><img alt="project" src={image} /></ProjectSummaryMedia>
        <CardContent>
          <Typography variant={"h6"}>{text}</Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}

ReadCard.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
};


export function Home() {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  return (
    <Box my={2}>

      <div style={styles}>


        <Box my={8}>
          <StyledBigName variant="h2">Yuekun Feng</StyledBigName>
        </Box>

        <Parallax bgImage={BackGround} strength={500}>
          <div style={{height: 600}}>
          </div>
        </Parallax>

        <Box my={12}>
          <StyledText variant="h5">Third year student at University of British Columbia (graduate at 2021).</StyledText>
          <StyledText variant="h5">Majors in computer science.</StyledText>
        </Box>

        <Parallax bgImage={BackGround} strength={500}>
          <div style={{height: 500}}>
          </div>
        </Parallax>

        <Box my={8}>
          <StyledBigName variant={"h4"}>アニメ fun</StyledBigName>
        </Box>

        <Parallax bgImage={BackGround} strength={500}>
          <div style={{height: 500}}>
          </div>
        </Parallax>

        <Box my={8}>
          <StyledBigName variant={"h4"}>Tech fun</StyledBigName>
        </Box>

        <Parallax bgImage={BackGround} strength={500}>
          <div style={{height: 500}}>
          </div>
        </Parallax>

        <Box my={8}>
          <StyledBigName variant={"h4"}>"Auto-tune remix-themed content" editor.</StyledBigName>
        </Box>

        <Parallax bgImage={BackGround} strength={500}>
          <div style={{height: 500}}>
          </div>
        </Parallax>

        <Box my={6}>

          <StyledBigName variant={"h4"}>Read more</StyledBigName>

          <Container maxWidth={"lg"}>
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <ReadCard text="Projects" image={BackGround} link="/projects" />
              </Grid>

              <Grid item sm={4}>
                <ReadCard text="Resume" image={BackGround} link="/resume" />
              </Grid>

              <Grid item sm={4}>
                <ReadCard text="More about me" image={BackGround} link="/idea" />
              </Grid>

            </Grid>
          </Container>
        </Box>

      </div>


    </Box>
  );
}