import React from "react";
import Container from "@material-ui/core/Container";
import {StyledTitle, StyledText, StyledSubtitle, PaddingAroundEMainText} from "../../commonStyles";
import Grid from "@material-ui/core/Grid";
import QSBKAvatar from "../../imageCache/qsbkAvatar.JPG";
import HadrinAvatar from '../../imageCache/haridinAvatar.jpg';
import styled from "styled-components";

const StyledImage = styled.img`
  width: 20vw;
`;


export default function MZFCSub() {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  return(

    <div style={styles}>
      <Container maxWidth={"lg"}>
        <StyledTitle variant={"h3"}>
          MZFC Subgroup
        </StyledTitle>
        <StyledTitle variant={"h3"}>
          明华菲克 字幕组
        </StyledTitle>

        <PaddingAroundEMainText>
        <StyledSubtitle>
          What we offer:
        </StyledSubtitle>

        <StyledText>
          Youtube channel translation and re-post.
        </StyledText>
        </PaddingAroundEMainText>

        <PaddingAroundEMainText>
        <StyledSubtitle>
          Our customer:
        </StyledSubtitle>

        <StyledText>
          TBD
        </StyledText>
        </PaddingAroundEMainText>

        <PaddingAroundEMainText>
          <StyledSubtitle>
            Group Member
          </StyledSubtitle>

          <PaddingAroundEMainText>
          <Grid container spacing={2}>
            <Grid item sm={6}>

              <StyledImage src={QSBKAvatar} alt={"qsbk avatar"}/>
              <StyledText>
                丘山北鲲
              </StyledText>
            </Grid>

            <Grid item sm={6}>
              <StyledImage src={HadrinAvatar} alt={"hadrian avatar"}/>
              <StyledText>
                HAdriAn
              </StyledText>
            </Grid>
          </Grid>

          </PaddingAroundEMainText>


        </PaddingAroundEMainText>

      </Container>
    </div>
  )
}