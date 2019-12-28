import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Link from "../../components/Link";

const StyledAppBar = styled(Toolbar)`
  margin: 0 auto;
  height: 75px;
`;

export default function NavBar() {
  return (
    <AppBar position="static" color="default">
      <StyledAppBar>
        <Link color='inherit' to="/"><Typography variant="h6">Home</Typography></Link>
        <Link color='inherit' to="/projects"><Typography variant="h6">Project</Typography></Link>
        <Link color='inherit' to="/resume"><Typography variant="h6">Resume</Typography></Link>
      </StyledAppBar>
    </AppBar>
  );
}


