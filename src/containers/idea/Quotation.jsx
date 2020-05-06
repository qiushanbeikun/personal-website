import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {PaddingSurroundTopAndBottomTwoEm} from "../../commonStyles";

export default function QuotationWords(props) {

  const StyledBGDiv = styled.div`
    background-color: #3a3a3a;
    border-radius: 5em;
    &&:hover {
      background-color: #333333;
      transition: all 0.5s;
    }
  `;
  const StyledCitationItalic = styled(Typography)`
    color: #e0d0d0;
    padding: 1.5em; 
    text-align: left;
    font-style: italic;
  `;

  const StyledCitationSource = styled(Typography)`
    color: #a3ccd8;
    padding: 1.4em 1.5em;
    text-align: right;
  `;

  const StyledQuotationMark = styled.div`
    color: #999999;
    font-family: Lora, serif;
    position: relative;
    background: #333333;
    top: 20px;
    left: 50%;
    font-size: 96px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transform: translateX(-50%);
    line-height: 112px;
    text-align: center;
    opacity: .3;
`;

  return (
    <Container maxWidth={"sm"}>
      <PaddingSurroundTopAndBottomTwoEm>
      <StyledBGDiv>
        <StyledQuotationMark>
          <span>“</span>

        </StyledQuotationMark>
        <StyledCitationItalic variant={"h5"}>{props.content}</StyledCitationItalic>
        <StyledCitationSource variant={"h5"}>----{props.from}</StyledCitationSource>
      </StyledBGDiv>
      </PaddingSurroundTopAndBottomTwoEm>
    </Container>
  )
}
