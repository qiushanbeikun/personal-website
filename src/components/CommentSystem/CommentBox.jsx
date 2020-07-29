import React from "react";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import {PaddingSurroundTopAndBottomOneEm, PaddingTopAndBottomThreeEm} from "../../commonStyles";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import ForwardIcon from '@material-ui/icons/Forward';
import ReplyIcon from '@material-ui/icons/Reply';
const useStyle = makeStyles(theme => ({
  Name: {
    fontSize: "20px",
    fontFamily: "sans-serif",
    color: "#777777",
    textAlign: "bottom",

  },
  Time: {
    fontSize: "15px",
    fontFamily: "sans-serif",
    color: "#777777",
    textAlign: "bottom",
  },
}));


const testComments = {
  'comments': [
    {
      'postId': 'baiduYun',
      'commentId': 1,
      'parentId': 0,
      'userName': 'I hate Baidu',
      'time': '2020 May 1 21:05',
      'email': 'test@gmail.com',
      'comment': 'Good job on criticizing baidu.'
    },
    {
      'postId': 'baiduYun',
      'commentId': 2,
      'parentId': 1,
      'userName': 'I hate Baidu',
      'time': '2020 May 1 21:06',
      'email': 'test@gmail.com',
      'comment': 'I hate Baidu, too.'
    },
    {
      'postId': 'baiduYun',
      'commentId': 3,
      'parentId': 1,
      'userName': 'I hate Baidu',
      'time': '2020 May 1 21:07',
      'email': 'test@gmail.com',
      'comment': 'I hate Baidu, three.'
    }
  ]
};

const StyledTextField = styled(TextField)`
  
`;

const StyledSection = styled.section`
  background: #d3d3d3;
`;

const StyledGrid = styled(Grid)`
  position: relative;
  display: flex;
  left: 2em;
  top: -110px;
`;

const StyledSignature = styled.div`
  display: flex;
  position: relative;
  left: 2em;
  top: -100px;
  
`;

const NameTypography = styled(Typography)`
  font-size: 20px;
  color: #777777;
`;

const TimeTypography = styled(Typography)`
  position: relative;
  color: #777777;
  left: 2em;
`;




const ColorStyle = Object.assign({}, {
  display: 'flex',
  width: '8px',
  height: '100px',
  position: 'relative',
  backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
});

export default function CommentBox(props) {
  const classes = useStyle();
  const postID = props.postId;
  // contents to fetch target comments and reply comments

  // the testComments has assumed that the results have been selected and sorted
  const comments = testComments;

  const testUserName = 'I hate Baidu';
  const testTime = '2020 May 1 21:07';
  const testEmail = 'test@gmail.com';
  const testCommentContent = 'tt tes test set sst tes teset est ' +
    'set set setsetsetset set set st set set si hate baidu ' +
    'test tes teset est set set setsetsetset set set st set set s' +
    'set set setsetsetset set set st set set si hate baidu ' +
    'test tes teset est set set setsetsetset set set st set set s' +
    'set set setsetsetset set set st set set si hate baidu ' +
    'test tes teset est set set setsetsetset set set st set set s' +
    'set set setsetsetset set set st set set si hate baidu ' +
    'test tes teset est set set setsetsetset set set st set set s';

  // reminder, this is just the part to show all the comments, exclude pthe comment input section
  return (
    <StyledSection>
      <PaddingTopAndBottomThreeEm>
        <Container maxWidth={'lg'}>
          <div>
            <h1>Comments</h1>
          </div>

          {testComments.comments.map((each, i) => {
            return (
              <div>

                <div style={ColorStyle}>

                </div>

                <StyledSignature>
                  <NameTypography>{testUserName + "    "}</NameTypography>
                  <TimeTypography>{testTime}</TimeTypography>
                </StyledSignature>

                <StyledGrid container spacing={3}>
                  <Grid item sm={11}>
                    <h3>{testCommentContent}</h3>
                  </Grid>

                  <Grid item sm={1}>

                    <IconButton>
                      <ForwardIcon/>
                    </IconButton>
                    <IconButton>
                      <ReplyIcon/>
                    </IconButton>
                  </Grid>
                </StyledGrid>
              </div>
            )
          })}


        </Container>
      </PaddingTopAndBottomThreeEm>
    </StyledSection>
  )

}