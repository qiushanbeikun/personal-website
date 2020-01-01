import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DefaultImage from "../../backg.jpg"
import Container from "@material-ui/core/Container";
import PropTypes from 'prop-types'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const StyledTitle = styled(Typography)`
  padding: 0.5em 0.2em;
  color: #dddddd
`;

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

const StyledTitleImage = styled.img`
  height: 250px;
  width: 450px;
  overflow: hidden;
  padding: 6px 0 0 6px;
`;

const StylingBackgroundImage = styled.div`
 && {
   padding: 0;

 }
  background-color: #eeeeee55;
`;

const StyledGrid = styled(Grid)`
  && {
    padding: 6px;
  }
`;

function IdeaSection(props) {
  return (
    <Box my={2}>
      <StylingBackgroundImage>
        <Grid container>
          <Grid item sm={5}>
            <StyledTitleImage src={props.image}/>
          </Grid>

          <StyledGrid item sm={7}>
            <StyledText variant={"h4"}>{props.title}</StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText variant={"h4"}>test</StyledText>
            <StyledText variant={"h4"}>test</StyledText>
          </StyledGrid>
        </Grid>
      </StylingBackgroundImage>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function EachCard(props){

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        className={classes.media}
        image={DefaultImage}
        title={props.subtitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/*todo this link is not working*/}
          <FavoriteIcon href="https://github.com/qiushanbeikun"/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {props.longDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

EachCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
};

export default function Idea() {


  return (
    <Container maxWidth={"lg"}>
      <StyledTitle variant={"h3"}>Idea</StyledTitle>
      {/*<div>
        <IdeaSection title="test1" link="/mikuTouch" image={DefaultImage} description="test description"/>
      </div>*/}

      <Grid container spacing={4}>
        <Grid item sm={6}>
          <EachCard title="title"
                    date="date"
                    subtitle="subtitle"
                    longDescription={"change something to tets"}
                    shortDescription=" aef aef aef aef aesf aef eaf aef aef ae fae faefaefaef
                 f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef aeaef aef aef aesf aesf aef aef aef ae"/>


        </Grid>
        <Grid item sm={6}>
          <EachCard title="title"
                    date="date"
                    subtitle="subtitle"
                    longDescription={"f f ef qwf ew fafef afaw feaf afeaf af aesf " +
                    "f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef ae" +
                    "f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef ae" +
                    "f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef ae" +
                    "f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef ae" +
                    "f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef ae" +
                    "ea fef aef awef aewf aqef af aef aef aef ae faefa faef ae"}
                    shortDescription=" aef aef aef aef aesf aef eaf aef aef ae fae faefaefaef
                 f f ef qwf ew fafef afaw feaf afeaf af aesf ea fef aef awef aewf aqef af aef aef aef ae faefa faef aeaef aef aef aesf aesf aef aef aef ae"/>


        </Grid>
      </Grid>
    </Container>
  )
}