import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import styled from "styled-components";
import DisplayComments from './CommentBox';
import {StyledText, StyledButton, StyledLabel} from './commonStyles';
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyle = makeStyles(theme => ({
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

const StyledCommentDiv = styled.div`
  padding: 0.5em;
  border: 2px solid aqua;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

function DisplayReply(props) {
  return (
    <Container>
      <StyledCommentDiv>
        <StyledText variant={"h5"}>Reply:</StyledText>
        <DisplayComments input={props.input}/>
      </StyledCommentDiv>
    </Container>
  )
}

export default function DisplayEachComment(props){

  const [showReplyBoxVisible, setShowReplyBoxVisible] = useState(true);

  const ShowReplyBoxHandler = event => {
    event.preventDefault();
    setShowReplyBoxVisible(!showReplyBoxVisible);
  };

  const SizeReducer = (accumulator, currentValue) => (currentValue === {}) ? accumulator + 0 : accumulator + 1;

  const each = props.each;

  const classes = useStyle();

  const [replyName, setReplyName] = useState("");

  const ReplyNameHandler = event => {
    event.preventDefault();
    setReplyName(event.target.value);
  };

  const [replyEmail, setReplyEmail] = useState("");

  const ReplyEmailHandler = event => {
    event.preventDefault();
    setReplyEmail(event.target.value);
  };

  const [replyComment, setReplyComment] = useState("");

  const ReplyCommentHandler = event => {
    event.preventDefault();
    setReplyComment(event.target.value);
  };

  const ReplySubmitHandler = event => {
    event.preventDefault();
    const aNewReply = {
      name: replyName,
      email: replyEmail,
      comment: replyComment,
      reply: [],
    };

    setShowReplyBoxVisible(!showReplyBoxVisible);
    setReplyName("");
    setReplyEmail("");
    setReplyComment("");
  };

  const FoldHandler = event => {
    setShowReplyBoxVisible(!showReplyBoxVisible);
    setReplyName("");
    setReplyEmail("");
    setReplyComment("");
  };

  return (
    <Box my={1}>
      <StyledLabel variant={"h5"}>Name --- {each.name} ---</StyledLabel>
      <StyledLabel variant={"h5"}>
        Email --- {(each.email !== "") ? each.email : "Anonymous"} ---</StyledLabel>
      <StyledText variant={"h5"}>{each.comment}</StyledText>

      {
        (showReplyBoxVisible) ?
          <div>
            <Button onClick={ShowReplyBoxHandler}>
              Reply
            </Button>
          </div>
          :
          <Container>
            <form onSubmit={ReplySubmitHandler}>
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
                    value={replyName}
                    color="#eeeeee"
                    onChange={ReplyNameHandler}/>
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
                    value={replyEmail}
                    onChange={ReplyEmailHandler}/>
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
                value={replyComment}
                variant="outlined"
                onChange={ReplyCommentHandler}/>
              <div>
                <Grid container spacing={4}>
                  <Grid item sm={6}>
                    <StyledButton onClick={FoldHandler}>
                      Cancel
                    </StyledButton>
                  </Grid>
                  <Grid item sm={6}>
                    <StyledButton type="submit">
                      Reply
                    </StyledButton>
                  </Grid>
                </Grid>
              </div>
            </form>
          </Container>
      }
      <Box my={1}>
        {
          (each.reply.size !== 0 && each.reply.reduce(SizeReducer, 0) !== 0) ?
            <DisplayReply input={each.reply}/>
            :
            <StyledText>No reply</StyledText>
        }
      </Box>
    </Box>
  )
}