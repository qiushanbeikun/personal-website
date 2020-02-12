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

const StyledBar = styled(AppBar)`
  opacity: 0.65;
`;

export default function NavBar() {
  return (
    <StyledBar position="static" color="default">
      <StyledAppBar>
        <Link color='inherit' to="/"><Typography variant="h6">Home</Typography></Link>
        <Link color='inherit' to="/projects"><Typography variant="h6">Project</Typography></Link>

        <Link color='inherit' to="/idea"><Typography variant="h6">Ideas</Typography></Link>
        <Link color='inherit' to="/interest"><Typography variant="h6">Interests</Typography></Link>
      </StyledAppBar>
    </StyledBar>
  );
}


