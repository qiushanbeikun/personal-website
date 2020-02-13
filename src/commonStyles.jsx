import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const RedEnphisizeText = styled(Typography)`
  color: red;
`;

export const PaddingTopAndBottomThreeEm = styled.div`
  padding: 3em 0;
`;

export const PaddingSurroundTopAndBottomOneEm = styled.div`
  padding: 1em 0;
`;

export const PaddingSurroundTopAndBottomTwoEm = styled.div`
  padding: 2em 0;
`;

export const StyledLabel = styled(Typography)`
  color: #eeeeee;
`;

export const StyledText = styled(Typography)`
  color: #eeeeee;
`;

export const StyledTitle = styled(Typography)`
  color: aqua;
  padding: 1em 0;
`;

export const StyledSubtitle = styled(Typography)`
  color: aqua;
`;

export const StyledItalicText = styled(Typography)`
  color: #eeeeee;
  font-style: italic;
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