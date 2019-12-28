import React from "react";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MDLink from "@material-ui/core/Link";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const StyledAppBar = styled(Toolbar)`
  margin: 0 auto;
  height: 75px;
`;

const AppBarLinks = styled(MDLink)`
  && {
    margin: 0 1em;
    color: #424242;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main}
    }
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    height: 50px;
    width: 83px;
    background-color: #f5f5f5;
    margin: 0 2em;
  }
  
  &:hover {
    background-color: #bdbdbd;
    transition: all .5s;
  }
  
`;


export default function NavBar() {
  return (
    <AppBar position="static" color="default">
      <StyledAppBar>
        <StyledAvatar variant="rounded">
        <AppBarLinks component={Link} to="/"><Typography variant="h6">  Home</Typography>  </AppBarLinks>
        </StyledAvatar>
        <StyledAvatar variant="rounded">
        <AppBarLinks component={Link} to="/projects"><Typography variant="h6">Project</Typography>  </AppBarLinks>
        </StyledAvatar>
        <StyledAvatar variant="rounded">
        <AppBarLinks component={Link} to="/resume"><Typography variant="h6">Resume</Typography>  </AppBarLinks>
        </StyledAvatar>
      </StyledAppBar>
    </AppBar>
  );
}


