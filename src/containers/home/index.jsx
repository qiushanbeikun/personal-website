import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import BackGround from "../../backg.jpg"
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from 'prop-types'
import Guichu from "../../imageCache/guichu.png"
import Anime from "../../imageCache/anime.JPG"
import Tech from "../../imageCache/TECH.jpg"
import Coding from "../../imageCache/coding.png"
import MZFC from '../../imageCache/mzfcsubillust.jpeg'
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";


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
  height: 300px;
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
    <div>
      <div style={styles}>
        <Parallax pages={6.8}>

          <ParallaxLayer offset={0.2} speed={0.2}>
            <StyledBigName variant="h2">
              Yuekun Feng
            </StyledBigName>
          </ParallaxLayer>

          <ParallaxLayer offset={0.5} speed={1}>
            <img src={BackGround} alt="op" style={{width: '100%', }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={0.2}>
            <StyledText variant="h4">
              Third year student at University of British Columbia (graduate at 2021).
            </StyledText>
            <StyledText variant="h4">
              Majors in computer science.
            </StyledText>
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={1}>
            <img src={Coding} alt="op" style={{width: '100%', }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={2.2} speed={0.2}>
            <StyledBigName variant={"h3"}>
              アニメ fun
            </StyledBigName>
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={1}>
            <img src={Anime} alt="op" style={{width: '100%', }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={3.2} speed={0.2}>
            <StyledBigName variant={"h3"}>
              Tech fun
            </StyledBigName>
          </ParallaxLayer>

          <ParallaxLayer offset={3.5} speed={1}>
            <img src={Tech} alt="op" style={{width: '100%', }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={4.2} speed={0.2}>
            <StyledBigName variant={"h3"}>
              "OTO MAD content" editor
            </StyledBigName>
          </ParallaxLayer>

          <ParallaxLayer offset={4.5} speed={1}>
            <img src={Guichu} alt="op" style={{width: '100%', }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={5.2} speed={0.2}>
            <StyledBigName variant={"h3"}>
              Founder of 明华菲克工作室
            </StyledBigName>
          </ParallaxLayer>

          <ParallaxLayer offset={5.5} speed={1}>
            <img src={MZFC} alt="op" style={{width: '100%', }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={0.2}>
            <Box my={6}>
              <StyledBigName variant={"h4"}>
                Read more
              </StyledBigName>
              <Container maxWidth={"lg"}>
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <ReadCard
                      text="Projects"
                      image={BackGround}
                      link="/projects" />
                  </Grid>
                  <Grid item sm={4}>
                    <ReadCard
                      text="Resume"
                      image={BackGround}
                      link="/resume" />
                  </Grid>
                  <Grid item sm={4}>
                    <ReadCard
                      text="More about me"
                      image={BackGround}
                      link="/moreInfo" />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </ParallaxLayer>

        </Parallax>
      </div>
    </div>
  );
}