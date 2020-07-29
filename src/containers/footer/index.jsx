import React from "react";
import styled from 'styled-components';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Bilibili from './bilibili-logo.svg';
import Link from "../../components/Link";
import Box from "@material-ui/core/Box";

const StyledFooter = styled.div`
&& {
  background-color: ${({theme}) => theme.palette.secondary.main};
  opacity: 0.7;
}
`;

const StyledIconButton = styled(IconButton)`
  &&:hover {
    background-color: #bbbbbb;
    transition: all .8s;
  }
`;

const StyledText = styled.p`
  padding: 0em 0.5em;
  color: ${({theme}) => theme.palette.primary};
`;

const StyledEmail = styled.a`
  padding: 1em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Box py={1.7} clone>
        <Container maxWidth="md">
          <Grid container>
            <Grid item sm={6}>
              <Grid container alignItems="center" justify="center">
                <StyledText>More links</StyledText>
                <StyledIconButton href="https://github.com/qiushanbeikun" target="_blank"><GitHubIcon/></StyledIconButton>
                <StyledIconButton href="https://www.youtube.com/channel/UCB01XZsudptPaZz2bm66mJQ"
                                  target="_blank"><YouTubeIcon/></StyledIconButton>
                <StyledIconButton href="https://space.bilibili.com/87137436" target="_blank">
                  <img alt="bilibili" width={25} src={Bilibili}/>
                </StyledIconButton>
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid container alignItems="center" justify="center">
                <StyledEmail href="mailto:beikuncanada@gmail.com">beikuncanada@gmail.com</StyledEmail>
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
