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
import '../../App.css';
import Guichu from "../../imageCache/guichu.png"
import Anime from "../../imageCache/anime.JPG"
import Tech from "../../imageCache/TECH.jpg"
import Coding from "../../imageCache/coding.png"
import MZFC from '../../imageCache/mzfcsubillust.jpeg'
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {
  PaddingSurroundTopAndBottomOneEm, PaddingTopAndBottomThreeEm
} from "../../commonStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";


const StyledBigName = styled(Typography)`
  padding: 1em 0;
  color: #eeeeee;
`;

const StyledText = styled(Typography)`
  padding: 10px 0;
  color: #e0e0e0;
`;
const StyledBlueText = styled(Typography)`
  padding: 10px 0;
  color: #a3ccd8;
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

ReadCard.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
};

export const PaddingTopAndBottomFiveEm = styled.div`
  padding: 15em 0;
`;

const useStyle = makeStyles(theme => ({
  centerB: {
    fontSize: "15px",
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "#a3ccd8"
  },
  leftW: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    textAlign: "left",
    color: "#e0e0e0"
  },
  leftB: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    textAlign: "left",
    color: "#a3ccd8"
  },
  rightW: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    textAlign: "right",
    color: "#e0e0e0"
  },
  rightB: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    textAlign: "right",
    color: "#a3ccd8"
  }
}));

export function Home() {
  const classes = useStyle();



  const styles2 = {
    fontFamily: "sans-serif",
    textAlign: "right"
  };

  const styles3 = {
    fontFamily: "sans-serif",
    textAlign: "left"
  };

  return (

    <div>
      <div>
        <StyledBlueText variant={"h6"} className={classes.centerB}>
          Breaking news: the website is under another round of prettify, there might be aesthetical inconsistency between pages.
        </StyledBlueText>
        <PaddingTopAndBottomFiveEm>
          <Container maxWidth={"lg"}>



            <PaddingSurroundTopAndBottomOneEm>
              <div>
                <span className={classes.leftW}>你一定能找到隐藏在</span>
                <span className={classes.leftB}>真相</span>
                <span className={classes.leftW}>背后的另一个</span>
                <span className={classes.leftB}>真相</span>
              </div>
            </PaddingSurroundTopAndBottomOneEm>
            <PaddingSurroundTopAndBottomOneEm>
              <div style={styles3}>
                <span className={classes.leftW}>Wish you to find the </span>
                <span className={classes.leftB}>truth </span>
                <span className={classes.leftW}>hidden behind the </span>
                <span className={classes.leftB}>truth</span>
              </div>
            </PaddingSurroundTopAndBottomOneEm>
            <PaddingSurroundTopAndBottomOneEm>
              <div style={styles3}>
                <span className={classes.leftW}>君なるわ </span>
                <span className={classes.leftB}>真実</span>
                <span className={classes.leftW}>のおぐのさなる</span>
                <span className={classes.leftB}>真実に</span>
              </div>
            </PaddingSurroundTopAndBottomOneEm>

            <div style={styles2}>
              <StyledBlueText variant={"h5"}>—— 荒川弘《鋼の錬金術師》第6话</StyledBlueText>
            </div>
          </Container>
        </PaddingTopAndBottomFiveEm>
      </div>

      <hr/>

      <PaddingTopAndBottomThreeEm>

        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>

            <Grid sm={1}>
              <div style={styles2}>
                <StyledText variant={"h5"}>Yuekun</StyledText>
                <StyledText variant={"h5"}>岳昆</StyledText>
              </div>
            </Grid>
            <Grid sm={1}>
              <div style={styles2}>
                <StyledBlueText variant={"h5"}>Feng</StyledBlueText>
                <StyledBlueText variant={"h5"}>冯</StyledBlueText>
              </div>
            </Grid>
            <Grid sm={1}>

            </Grid>

            <Grid sm={9}>
              <div style={styles3}>
                <StyledText variant="h5">
                  Third year student at University of British Columbia (graduate at 2021)
                </StyledText>

                <StyledText variant="h5">
                  アニメ fun
                </StyledText>
                <StyledText variant="h5">
                  Tech fun
                </StyledText>
                <StyledText variant="h5">
                  "OTO MAD content" editor
                </StyledText>
                <StyledText variant="h5">
                  Founder of 明华菲克工作室
                </StyledText>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PaddingTopAndBottomThreeEm>


      {/*<Parallax pages={6.8}>

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
                  <Grid item sm={6}>
                    <ReadCard
                      text="Projects"
                      image={BackGround}
                      link="/projects" />
                  </Grid>

                  <Grid item sm={6}>
                    <ReadCard
                      text="More about me"
                      image={BackGround}
                      link="/moreInfo" />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </ParallaxLayer>

        </Parallax>*/}


    </div>
  );
}
