import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import {TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {getJson, postJson} from "../../apiHelper";
import DisplayEachComment from './replySystem'
import {StyledButton, StyledLabel, StyledText} from '../../commonStyles'
import Box from "@material-ui/core/Box";




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

// the helper function to parse the sql result to package readable format


/*
* [{ id: 1, parentId: null, ... }, { id: 2, parentId: 1, ... }] -> [{ id: 1, children: [{ id: 2, ... }] }]
*
* */
function parseApiResult (props) {
  const result = [];
  return result;
  // const unsolvedComments = props.valueOf();
  // while (!unsolvedComments.isEmpty) {
  //   for (const each of result) {
  //
  //   }
  // }
}

CommentBox.propType = {
  postId: PropTypes.string.isRequired,
};

export default function CommentBox(props) {
  const classes = useStyle();
  const [result, setResult] = useState({ loading: false, result: null, error: null });
  const postId = props.postId || '3';

  const getComments = async () => {
    setResult({ loading: true });
    try {
      const res = await getJson(`post/${postId}//getComments`);
      setResult({ loading: false, result: res });
    } catch (e) {
      setResult({ loading: false, result: null, error: 'Failed to fetch comments' });
    }
  };

  useEffect(() => {
    getComments();
  }, [props.postId]);

  const processedResult = parseApiResult(result);

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

  const submitHandler = async (event) => {
    event.preventDefault();
    await postJson('postComment`',
      {
        "postId": postId,
        "nickname": name,
        "email": email,
        "content": newComment,
      });

    // await getComments();
    setName("");
    setEmail("");
    setNewComment("");
  };

  return (
    <div>
      <StyledText variant={"h4"}>Comments (beta)</StyledText>
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
        <DisplayComments input={result}/>
      </div>
    </div>
  )
}

export function DisplayComments(props) {
  const existingComments = props.input.result;
  return (
    <div>
      {
        (existingComments == null)? <StyledText variant={"h5"}>no comments</StyledText>
          :
          existingComments.map(each => {
            return (
              <div>
                <StyledLabel variant={"h5"}>Name --- {each.nickname} ---</StyledLabel>
                <StyledLabel variant={"h5"}>
                  Email --- {(each.email !== "") ? each.email : "Anonymous"} ---</StyledLabel>
                <StyledText variant={"h5"}>{each.content}</StyledText>
              </div>
            )
          })
      }
    </div>
  )
}