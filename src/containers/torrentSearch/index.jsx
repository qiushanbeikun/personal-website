import Container from "@material-ui/core/Container";
import React from "react";
import {PaddingTopAndBottomThreeEm, StyledButton} from "../../commonStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {RedEnphisizeText, StyledText} from "../../commonStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function handleSubmit(props) {
  console.log("test console");
}


function fetchFunction({targetLink}) {
  fetch('https://nyaa.si/?f=0&c=0_0&q=123')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};



export default function TorrentSearch() {

  const classes = useStyles();

  const [type, setType] = React.useState('select');

  const selectChangeHandler = (event) => {
    setType(event.target.value)
  };

  return (
    <Container maxWidth={"lg"}>
      <div className={"page warning info page"}>
        <RedEnphisizeText variant={"h3"} paragraph>
          This tool is just for fun
        </RedEnphisizeText>
        <StyledText variant={"h5"} paragraph>
          From my point of view, there is a reason why torrenting still popular, u can refers to
          <a> this blog</a>
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          For copyright reasons,
        </StyledText>
        <RedEnphisizeText variant={"h6"} paragraph>
          I don't recommend anyone to torrent copyrighted files.
        </RedEnphisizeText>
        <RedEnphisizeText variant={"h6"} paragraph>
          In some countries and regions, you might get trouble with police.
        </RedEnphisizeText>
        <StyledText variant={"h5"} paragraph>
          I did not create any algorithms for search, just use existing websites.
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          However, I still welcome copyright holders to use my tool to check how and where your properties get infringements.
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          Use this tool carefully
        </StyledText>
      </div>

      <PaddingTopAndBottomThreeEm class={"main body"} style={styles}>

        <FormControl className={classes.formControl} onSubmit={handleSubmit}>
          <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={selectChangeHandler}
          >
            <MenuItem value={'anime'}>アニメ</MenuItem>
            <MenuItem value={'game'}>ゲーム</MenuItem>
            <MenuItem value={'vehicleLicense'}>车牌号</MenuItem>
          </Select>
        </FormControl>

        <StyledButton>
          TEST
        </StyledButton>
      </PaddingTopAndBottomThreeEm>



    </Container>
  )
}