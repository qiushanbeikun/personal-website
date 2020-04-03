import React from "react";
import Container from "@material-ui/core/Container";
import {
  StyledTitle,
  StyledText,
  StyledSubtitle,
  PaddingTopAndBottomThreeEm,
  PaddingSurroundTopAndBottomOneEm
} from "../../commonStyles";
import Grid from "@material-ui/core/Grid";
import QSBKAvatar from "../../imageCache/qsbkAvatar.JPG";
import HadrinAvatar from '../../imageCache/haridinAvatar.jpg';
import nzxhAvatar from '../../imageCache/nzxhavatar.jpg';
import styled from "styled-components";

const StyledImage = styled.img`
  width: 20vw;
`;


export default function MZFCStudio() {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  return (

    <div style={styles}>
      <Container maxWidth={"lg"}>

        <StyledTitle variant={"h3"}>
          MiZardFrecCenter Studio
        </StyledTitle>

        <StyledTitle variant={"h3"}>
          明华菲克工作室
        </StyledTitle>


        <StyledTitle variant={"h3"}>
          MiZzrdFrecCenter SubGroup
        </StyledTitle>
        <StyledTitle variant={"h3"}>
          明华菲克 字幕组
        </StyledTitle>

        <PaddingTopAndBottomThreeEm>
          <StyledSubtitle variant={"h4"}>
            Who we are?
          </StyledSubtitle>

          <StyledText variant={"h6"}>
            We are a student organized group offering Youtube video translation. We mostly do re-post of videos on
            bilibili.com.
          </StyledText>
        </PaddingTopAndBottomThreeEm>

        <PaddingTopAndBottomThreeEm>
          <StyledSubtitle variant={"h4"}>
            Our customer:
          </StyledSubtitle>

          <StyledText variant={"h6"}>
            TBD
          </StyledText>
        </PaddingTopAndBottomThreeEm>

        <PaddingTopAndBottomThreeEm>


          <StyledSubtitle variant={"h4"}>
            Group Member
          </StyledSubtitle>

          <PaddingTopAndBottomThreeEm>

            <Grid container spacing={2}>
              <Grid item sm={4}>

                <StyledImage src={QSBKAvatar} alt={"qsbk avatar"}/>

                <PaddingSurroundTopAndBottomOneEm>
                  <StyledText variant={"h5"}>
                    丘山北鲲
                  </StyledText>

                  <StyledText variant={"h5"}>
                    Founder 企划
                  </StyledText>
                </PaddingSurroundTopAndBottomOneEm>

              </Grid>

              <Grid item sm={4}>
                <StyledImage src={HadrinAvatar} alt={"hadrian avatar"}/>
                <PaddingSurroundTopAndBottomOneEm>
                  <StyledText variant={"h5"}>
                    HAdriAn
                  </StyledText>
                  <StyledText variant={"h5"}>
                    Co-Founder 编辑
                  </StyledText>
                </PaddingSurroundTopAndBottomOneEm>
              </Grid>

              <Grid item sm={4}>
                <StyledImage src={nzxhAvatar} alt={"hadrian avatar"}/>
                <PaddingSurroundTopAndBottomOneEm>
                  <StyledText variant={"h5"}>
                    你这小孩
                  </StyledText>

                  <StyledText variant={"h5"}>
                    Co-Founder 配音
                  </StyledText>
                </PaddingSurroundTopAndBottomOneEm>
              </Grid>
            </Grid>

          </PaddingTopAndBottomThreeEm>


        </PaddingTopAndBottomThreeEm>

        <PaddingTopAndBottomThreeEm>
          <StyledSubtitle variant={"h4"}>
            Demo Subtitle works:
          </StyledSubtitle>
          <div>
            <a href={"https://www.bilibili.com/video/av65486363"} target={"_blank"} rel="noopener noreferrer"> demo1 </a>
          </div>
          <div>
            <a href={"https://www.bilibili.com/video/av66211283"} target={"_blank"} rel="noopener noreferrer"> demo2 </a>
          </div>
        </PaddingTopAndBottomThreeEm>

      </Container>
    </div>
  )
}
