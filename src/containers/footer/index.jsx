import React from "react";
import styled from 'styled-components';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Bilibili from './bilibili-logo.svg';

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.grey["300"]};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={6}>
            <Grid container alignItems="center" justify="center">
              <p>Follow me on</p>
              <IconButton href="https://github.com/qiushanbeikun" target="_blank"><GitHubIcon /></IconButton>
              <IconButton href="https://www.youtube.com/channel/UCB01XZsudptPaZz2bm66mJQ" target="_blank"><YouTubeIcon /></IconButton>
              <IconButton href="https://space.bilibili.com/87137436" target="_blank"><img alt="bilibili" width={25} src={Bilibili} /></IconButton>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Grid container alignItems="center" justify="center">
              <p>
                Contact@
                <a href="mailto:beikuncanada@gmail.com" target="_top">beikuncanada@gmail.com</a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;