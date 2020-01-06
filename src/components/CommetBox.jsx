import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";


const StyledTitle = styled(Typography)`
  color: #eeeeee;
  padding: 1em 0;
`;

const StyledLabel = styled(Typography)`
  color: #eeeeee;
`;


const StyledText = styled(Typography)`
  color: #eeeeee;
`;


const StyledButton = styled(Button)`
  &:before {
    content: "";
    display: block;
  }
  && {
    // background-color: #00ffff77;
    color: #00ffff66;
    width: 100%;
    border-radius: 0;
    animation: all 2s;
    font-size: 2em;
    font-weight: 800;
    &:hover {
      color: aqua; 
      
    }
  }
`;


function AutomaticEmailReply(emailAddress, replyContent) {

}

function DisplayComments(props) {
  return (
    <div>
      {props.input.map(each => {
        return (
          <Box my={2}>
            <StyledLabel variant={"h5"}>Name --- {each.name} ---</StyledLabel>
            <StyledLabel variant={"h5"}>
              Email --- {(each.email !== "")? each.email : "Anonymous"} ---</StyledLabel>
            <StyledText variant={"h5"}>{each.comment}</StyledText>
          </Box>
        )
      })}
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& label.Mui-focused': {
      color: 'aqua',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'aqua',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: 'aqua',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'aqua',
      },
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    color: "#eeeeee",
  },

}));

export default function CommentBox() {

  const classes = useStyle();


  const [comments, setComments] = useState(
    [
      {
        name: "testestest",
        email: "test1@gmail.com",
        comment: "This is my first comment on this forum so don't be a dick"
      },
      {
        name: "testest",
        email: "test1@gmail.com",
        comment: "That's a mighty fine comment you've got there my good looking fellow..."
      },
      {
        name: "test",
        email: "test1@gmail.com",
        comment: "What is the meaning of all of this 'React' mumbo-jumbo?"
      }]);

  const [showComments, setShowComments] = useState(false);

  const ShowCommentHandler = event => {
    event.preventDefault();
    setShowComments(!showComments);
  };

  const [name, setName] = useState("");

  const NameChangeHandler = event => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState("");

  const EmailChangeHandler = event => {
    setEmail(event.target.value);
  };

  const [newComment, setNewComment] = useState("");

  const NewCommentChangeHandler = event => {
    setNewComment(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const aNewComment =
      {
        name: name,
        email: email,
        comment: newComment
      };
    setComments([...comments, aNewComment]);
    setName("");
    setEmail("");
    setNewComment("");
  };

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'aqua',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'aqua',
        },
      },
    },
  })(TextField);

  return (
    <div>
      <StyledTitle variant={"h4"}>Comments (beta)</StyledTitle>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                className: classes.input
              }}
              className={classes.root}
              required
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              color="#eeeeee"
              onChange={NameChangeHandler}/>
          </Grid>
          <Grid item sm={6}>
            <TextField
              InputLabelProps={{
                className: classes.input
              }}
              InputProps={{
                className: classes.input
              }}
              className={classes.root}
              label="Email (optional)"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={EmailChangeHandler}/>
          </Grid>
        </Grid>

        <TextField
          InputLabelProps={{
            className: classes.input
          }}
          className={classes.root}
          InputProps={{
            className: classes.input
          }}
          required
          label="Leave a comment here"
          margin="normal"
          multiline
          value={newComment}
          variant="outlined"
          onChange={NewCommentChangeHandler}/>
        <StyledButton type="submit">
          Add a new comment
        </StyledButton>
      </form>
      <div>
        <DisplayComments input={comments}/>
      </div>
    </div>
  )
}