import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from 'prop-types'
import '../../App.css';
import {
  PaddingSurroundTopAndBottomOneEm, PaddingTopAndBottomThreeEm, StyledImage, StyledDisplayImage
} from "../../commonStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import QSBKAvatar from "../../imageFolder/qsbkAvatar.JPG";
import jslogo from '../../imageFolder/jslogo.png';
import tslogo from '../../imageFolder/tslogo.png';
import javalogo from '../../imageFolder/javalogo.png';
import cpplogo from '../../imageFolder/c++logo.png';

import jetbrains from '../../imageFolder/ketbrainslogo.png';
import vscodelogo from '../../imageFolder/vscode.png';
import photoshoplogo from '../../imageFolder/pslogo.webp';
import premiere from '../../imageFolder/premiere.png';
import audition from '../../imageFolder/audition.png';
import vegas from '../../imageFolder/vegas.png';
import vocaloid from '../../imageFolder/vocaloid.png';
import davinci from '../../imageFolder/davinchilogo.png';
import htmllogo from '../../imageFolder/htmllogo.jpg';
import csslogo from '../../imageFolder/css-logo.png';
import MZFCIcon from '../../imageFolder/mzfcIcon.png';


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
    color: "red"
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
          Breaking news: the website is under another round of prettify, there might be aesthetical inconsistency
          between pages.
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

            <Grid item sm={1}>
              <div style={styles2}>
                <StyledText variant={"h5"}>Yuekun</StyledText>
                <StyledText variant={"h5"}>岳昆</StyledText>
              </div>
            </Grid>
            <Grid item sm={1}>
              <div style={styles2}>
                <StyledBlueText variant={"h5"}>Feng</StyledBlueText>
                <StyledBlueText variant={"h5"}>冯</StyledBlueText>
              </div>
            </Grid>
            <Grid item sm={1}>

            </Grid>

            <Grid item sm={9}>
              <div style={styles3}>
                <StyledText variant="h5">
                  Student at The University of British Columbia
                </StyledText>

                <StyledText variant="h5">
                  Major in computer science
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

      <hr/>

      <PaddingTopAndBottomThreeEm>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item sm={1}>
              <div style={styles2}>
                <StyledText variant={"h5"}>丘山</StyledText>
                <StyledText variant={"h5"}>QiuShan</StyledText>
              </div>
            </Grid>
            <Grid item sm={1}>
              <div style={styles2}>
                <StyledBlueText variant={"h5"}>北鲲</StyledBlueText>
                <StyledBlueText variant={"h5"}>BeiKun</StyledBlueText>
              </div>
            </Grid>
            <Grid item sm={1}>

            </Grid>
            <Grid item sm={9}>

              <PaddingSurroundTopAndBottomOneEm>
                <StyledText variant={"h5"}>Capable of </StyledText>
              </PaddingSurroundTopAndBottomOneEm>
              <Grid container spacing={10}>
                <Grid item sm={2}>
                  <StyledDisplayImage src={jslogo} alt={'JavaScript'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={tslogo} alt={'TypeScript'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={htmllogo} alt={'HTML'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={csslogo} alt={'CSS'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={javalogo} alt={'Java'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={cpplogo} alt={'C/C++'}/>
                </Grid>
              </Grid>

              <Grid container spacing={10}>
                <Grid item sm={2}>
                  <StyledDisplayImage src={jetbrains} alt={'JetBrains'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={vscodelogo} alt={'Visual Studio Code'}/>
                </Grid>
              </Grid>

              <Grid container spacing={10}>
                <Grid item sm={2}>
                  <StyledDisplayImage src={vegas} alt={'Sony Vegas Pro'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={photoshoplogo} alt={'Adobe Photoshop'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={audition} alt={'Adobe Audition'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={premiere} alt={'Adobe Premiere'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={davinci} alt={'Davinci Resolve'}/>
                </Grid>
                <Grid item sm={2}>
                  <StyledDisplayImage src={vocaloid} alt={'Vocaloid'}/>
                </Grid>
              </Grid>


            </Grid>


          </Grid>
        </Container>
      </PaddingTopAndBottomThreeEm>

      <hr/>

      <PaddingTopAndBottomThreeEm>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <span className={classes.leftB}>明华菲克</span>
              <span className={classes.leftW}>工作室</span>
            </Grid>
            <Grid item sm={9}>
              <div>
                <span className={classes.leftW}>We are an student group focus on critical-thinking video production and Youtube channel importation / translation</span>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <StyledBlueText variant={"h5"}>Group Member</StyledBlueText>
            </Grid>
            <Grid item sm={9}>
              <StyledText variant={"h5"}>丘山北鲲</StyledText>
              <StyledText variant={"h5"}>HAdriAn</StyledText>
              <StyledText variant={"h5"}>你这小孩</StyledText>
            </Grid>
          </Grid>
        </Container>
      </PaddingTopAndBottomThreeEm>

      <hr/>

      <PaddingTopAndBottomThreeEm>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <div style={styles3}>
                <StyledText variant={"h5"}>Hobbies</StyledText>
              </div>
            </Grid>

            <Grid item sm={1}>

            </Grid>

            <Grid item sm={9}>
              <StyledText variant={"h5"}>Anime</StyledText>
              <StyledText variant={"h5"}>Comics</StyledText>
              <StyledText variant={"h5"}>Games</StyledText>
              <StyledText variant={"h5"}>Music</StyledText>
              <StyledText variant={"h5"}>Computer hardware</StyledText>
            </Grid>
          </Grid>
        </Container>
      </PaddingTopAndBottomThreeEm>

    </div>
  );
}
