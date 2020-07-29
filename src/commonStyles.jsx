import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";



export const StyledImage = styled.img`
  width: 12vw;
  border-radius: 1em;
  
  &&:hover {
    transform: scale(1.1);
    transition: all .5s;
  }
`;

export const StyledDisplayImage = styled.img`
  width: 6vw;
  border-radius: 1em;
  
  &&:hover {
    transform: scale(1.1);
    transition: all .5s;
  }
`;

export const RedEnphisizeText = styled(Typography)`
  color: red;
`;

export const PaddingTopAndBottomThreeEm = styled.div`
  padding: 3em 0;
`;

export const PaddingSurroundTopAndBottomOneEm = styled.div`
  padding: 7px 0;
`;

export const PaddingSurroundTopAndBottomTwoEm = styled.div`
  padding: 2em 0;
`;

export const StyledLabel = styled(Typography)`
  color: #e0e0e0;
`;

export const StyledText = styled(Typography)`
  color: #e0e0e0;
`;

export const StyledTitle = styled(Typography)`
  color: #a3ccd8;
  padding: 1em 0;
`;

export const StyledSubtitle = styled(Typography)`
  color: #a3ccd8;
`;

export const StyledItalicText = styled(Typography)`
  color: #e0e0e0;
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
