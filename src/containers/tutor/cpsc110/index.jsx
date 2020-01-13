import Container from "@material-ui/core/Container";
import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledTitle = styled(Typography)`
  color: #eeeeee;
  padding: 1em 0;
`;

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

export default function CPSC110 () {
  return (
    <Container maxWidth={"lg"}>
      <StyledTitle variant={"h3"}>This is the tutoring resource page for CPSC110</StyledTitle>
      <div>
        <StyledText variant={"h5"}>Time: TBD</StyledText>
        <StyledText variant={"h5"}>Location: TBD</StyledText>
        <StyledText variant={"h5"}>WeChat Group: TBD</StyledText>
      </div>

      <div>
        <StyledTitle variant={"h3"}>Resources might be helpful</StyledTitle>
        <StyledText variant={"h5"}>
          Term files, practice midterms and practice finals.
          <a href={"https://drive.google.com/drive/folders/1Jn7igoTu97PR7EBRoSc7E7erZElYfwda?usp=sharing"} target="_blank" rel="noopener noreferrer">Google Drive</a>
        </StyledText>
        <StyledText variant={"h5"}>
          Notes from WuCheng Zhang
          <a href={"http://blogs.ubc.ca/wucheng/course-review-notes/"} target="_blank" rel="noopener noreferrer">
            UBC Blog Link
          </a>
        </StyledText>
        <StyledTitle variant={"h3"}> Class Notes</StyledTitle>
      </div>
    </Container>
  )
}
