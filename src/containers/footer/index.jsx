import React from "react";
import styled from 'styled-components';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Bilibili from './bilibili-logo.svg';
import Avatar from "@material-ui/core/Avatar";

const StyledFooter = styled.div`
&& {
  background-color: ${({theme}) => theme.palette.grey["300"]};
  height: 60px;
  box-shadow: 0 35px 15px 38px rgba(0,0,0,0.30), 0 6px 6px rgba(0,0,0,0.22);
}
`;

const StyledIconButton = styled(IconButton)`
  &&:hover {
    background-color: #bbbbbb;
    transition: all .8s;
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin: 10px 0 0 0;
    height: 40px;
    width: 230px;
    background-color: #e0e0e0;
  }
  
  &:hover {
    background-color: #bbbbbb;
    transition: all .5s;
  }
  
`;


const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={6}>
            <Grid container alignItems="center" justify="center">
              <p>More links</p>
              <StyledIconButton href="https://github.com/qiushanbeikun" target="_blank"><GitHubIcon/></StyledIconButton>
              <StyledIconButton href="https://www.youtube.com/channel/UCB01XZsudptPaZz2bm66mJQ"
                                target="_blank"><YouTubeIcon/></StyledIconButton>
              <StyledIconButton href="https://space.bilibili.com/87137436" target="_blank"><img alt="bilibili"
                                                                                                width={27} src={Bilibili}/></StyledIconButton>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Grid container>
                <StyledAvatar variant="rounded">
              <h5 color="#212121">
                <a href="mailto:beikuncanada@gmail.com" target="_blank">beikuncanada@gmail.com</a>
              </h5>
                </StyledAvatar>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;