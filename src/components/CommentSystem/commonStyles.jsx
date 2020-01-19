import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const StyledLabel = styled(Typography)`
  color: #eeeeee;
`;

export const StyledText = styled(Typography)`
  color: #eeeeee;
`;

export const StyledButton = styled(Button)`
  &:before {
    content: "";
    display: block;
  }
  && {
    color: #00ffff66;
    width: 100%;
    border-radius: 5px;
    animation: all 2s;
    font-size: 2em;
    font-weight: 800;
    &:hover {
      color: aqua; 
    }
  }
`;