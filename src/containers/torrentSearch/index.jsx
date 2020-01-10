import Container from "@material-ui/core/Container";
import React from "react";
import {Typography} from "@material-ui/core";
import styled from "styled-components";

const StyledTitle = styled(Typography)`
  color: red;
`;

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

export default function TorrentSearch() {
  return (
    <Container maxWidth={"lg"}>
      <div className={"info"}>
        <StyledTitle variant={"h3"} paragraph>
          This tool is just for fun
        </StyledTitle>
        <StyledText variant={"h5"} paragraph>
          From my point of view, there is a reason why torrenting still popular, u can refers to
          <a> this blog</a>
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          For copyright reasons,
        </StyledText>
        <StyledTitle variant={"h3"} paragraph>
          I don't recommend anyone to torrent copyrighted files.
        </StyledTitle>
        <StyledTitle variant={"h3"} paragraph>
          In some countries and regions, you might get trouble with police.
        </StyledTitle>
        <StyledText variant={"h5"} paragraph>
          I did not create any algorithms for search, just use existing websites.
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          However, I still welcome copyright holders to use my tool to check how and where your properties get infringements.
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          Use this tool carefully
        </StyledText>
      </div>


    </Container>
  )
}