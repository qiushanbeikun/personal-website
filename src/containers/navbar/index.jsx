import React from "react";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MDLink from "@material-ui/core/Link";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(Toolbar)`
  margin: 0 auto;
`;

const AppBarLinks = styled(MDLink)`
  && {
    margin: 0 1em;
  }
`;

export default function NavBar() {
  return (
    <AppBar position="static" color="default">
      <StyledAppBar>
        <AppBarLinks component={Link} to="/" color="inherit"><Typography variant="h6">Home</Typography></AppBarLinks>
        <AppBarLinks component={Link} to="/projects" color="inherit"><Typography variant="h6">Project</Typography></AppBarLinks>
        <AppBarLinks component={Link} to="/resume" color="inherit"><Typography variant="h6">Resume</Typography></AppBarLinks>
      </StyledAppBar>
    </AppBar>
  );
}


