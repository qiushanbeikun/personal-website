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
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {PaddingSurroundTopAndBottomOneEm, PaddingSurroundTopAndBottomTwoEm} from "../../commonStyles";
import Link from "../../components/Link";
import abstractTop from '../../imageFolder/abs top.jpg';

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

  leftW: {
    fontSize: "48px",
    fontFamily: "sans-serif",
    textAlign: "left",
    color: "#e0e0e0"
  },
  leftB: {
    fontSize: "48px",
    fontFamily: "sans-serif",
    textAlign: "left",
    color: "#a3ccd8"
  },
  RightW: {
    fontSize: "48px",
    fontFamily: "sans-serif",
    textAlign: "right",
    color: "#e0e0e0"
  },
  RightB: {
    fontSize: "48px",
    fontFamily: "sans-serif",
    textAlign: "right",
    color: "#a3ccd8"
  },
  centerW: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    textAlign: "center",
    position: "center",
    color: "#e0e0e0"
  },
  centerB: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "#a3ccd8"
  },
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


function EachCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea href={props.to} target="_blank" rel="noopener noreferrer">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon/>
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
      </CardActionArea>
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
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
          <ExpandMoreIcon/>
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

function newEachCard() {

}

EachCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
};

const StyledImage = styled.img`
  width: 100%;
`;

export default function Idea() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes2 = useStyles();
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const classes3 = useStyles();
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (

    <div>


      <Container maxWidth={"lg"}>

        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <span className={classes.leftW}>Idea</span>
            <span className={classes.leftB}>s</span>
          </div>
        </PaddingSurroundTopAndBottomTwoEm>
        <hr/>

        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <span className={classes.centerB}>真理</span>
            <span className={classes.centerW}>即无限 </span>
            <span className={classes.centerW}> The</span>
            <span className={classes.centerB}>Truth</span>
            <span className={classes.centerW}>Implies</span>
            <span className={classes.centerW}>Infinity</span>
          </div>
        </PaddingSurroundTopAndBottomTwoEm>


        <PaddingSurroundTopAndBottomOneEm>

          <StyledText variant={"h6"} paragraph>我本人目前没有任何宗教信仰，因此也可以被归到无神论者的范畴之内。但是宗教中的创神行为又为我提供了思路，我在14岁的时候独立探索出了“外祖父悖论”，
            并曾尝试为这一悖论寻求合理的解释。最终落入了“否定时空穿越”以及“唯心创神”的结论。因此我不得不暂停了对于这一悖论的思考。（果然悖论还是悖论呀:\）</StyledText>

          <StyledText variant={"h6"} paragraph>以上是我在哲学方面的萌芽。如今，对于“上帝是否存在”之类杂事的思考仍然是我在睡觉前，马桶上之时的要务。而我目前对于“真理”这一概念的解释为“无限“。
          当然，原因也很简单，代数数学清晰的告诉了我：在二维以及三维向量空间中，一般等式两边任何一边出现无限量必然要求等式的另一边有无限量存在。然而这样的解释是很不负责的，因为人类从来没能创造无限，
            数学符号中的无限就像游戏修改器一样，可以随意开挂，但是这样的”量“在本质上是一种模拟。类推下来，甚至我们的语言本质上也是一种模拟。所以，如果想找到所谓的”真理“，我可能需要拜托”语言“的束缚。
            那么，就先了解一下语言是什么吧。
          </StyledText>

          <PaddingSurroundTopAndBottomOneEm>

          </PaddingSurroundTopAndBottomOneEm>


        </PaddingSurroundTopAndBottomOneEm>



        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <span className={classes.centerW}>虚实即</span>
            <span className={classes.centerB}>生死 </span>
            <span className={classes.centerW}> The</span>
            <span className={classes.centerB}>Truth</span>
            <span className={classes.centerW}>Implies</span>
            <span className={classes.centerW}>Infinity</span>
          </div>
        </PaddingSurroundTopAndBottomTwoEm>

        <PaddingSurroundTopAndBottomOneEm>
          <div>
            <Link color={"inherit"} to={"/idea/talkAboutTech"}>
              <span className={classes.centerB}>Loading...</span>
            </Link>
          </div>

          <Link color={"inherit"} to={"/idea/talkAboutTech"}>
            <span className={classes.centerW}>Loading...</span>
          </Link>
          <Link color={"inherit"} to={"/idea/talkAboutTech"}>
            <span className={classes.centerW}>Loading...</span>
          </Link>
        </PaddingSurroundTopAndBottomOneEm>

        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <span className={classes.centerW}>等</span>
            <span className={classes.centerB}>价</span>
            <span className={classes.centerW}>交换 </span>
            <span className={classes.centerW}>E</span>
            <span className={classes.centerB}>qui</span>
            <span className={classes.centerW}>librium</span>
          </div>
        </PaddingSurroundTopAndBottomTwoEm>

        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <Link color={"inherit"} to={"/idea/talkAboutTech"}>
              <span className={classes.centerB}>盗版用户的未来 </span>
              <span className={classes.centerW}> 2019/NOV/26 北鲲</span>
            </Link>
          </div>
            <StyledText variant={"h6"} paragraph>我们从来没有有意提高自己的版权意识，只是懒得去搞，而资本也会借机粉饰自己的垄断。</StyledText>
        </PaddingSurroundTopAndBottomTwoEm>


        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <Link color={"inherit"} to={"/idea/talkAboutTech"}>
              <span className={classes.centerB}>谈科技？</span>
              <span className={classes.centerW}> 2019/OCT/20 北鲲</span>
            </Link>
          </div>
          <StyledText variant={"h6"} paragraph>小米MIX ALPHA 发布，惊艳，但是却让我怀疑这一次小米无法再引领潮流。</StyledText>
        </PaddingSurroundTopAndBottomTwoEm>


        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <Link color={"inherit"} to={"/idea/baiduYun"}>
              <span className={classes.centerB}>你的网盘无法再GKD</span>
              <span className={classes.centerW}> 2019/NOV/19 北鲲</span>
            </Link>
          </div>
          <StyledText variant={"h6"} paragraph>我希望百度凉掉，但是有不希望百度凉掉。百度的产品策略太差，但是百度贴吧作为国内少有的，
            普及的，而且大范围完成了用户过滤的平台，又让我有些舍不得这个公司。</StyledText>
        </PaddingSurroundTopAndBottomTwoEm>

        <PaddingSurroundTopAndBottomTwoEm>
          <div>
            <Link color={"inherit"} to={"/idea/baiduYun"}>
              <span className={classes.centerB}>《雨图》大纲 The synopsis of YUTU</span>
            </Link>
          </div>
          <StyledText variant={"h6"} paragraph>
            小说《雨图》围绕三个主题展开论述：
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            虚实：源于对未知的本能的恐惧，人类在对待圈内的已知和圈外的未知 都无法做到相对勇敢。即使放弃对“圈外”的过分好奇，如何保护“圈内”的一切仍是虚妄。
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            怀疑一切：源于动漫《钢之炼金术师FA》中的台词：“你应该能看到真相背后的真相。”要求故事的情节随着任务探究的深入而出现必要的反转。
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            相对：相对的思想给了人类难以满足的欲望，这些欲望该如何被满足。
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            脱胎于网络小说《执魔》，《雨图》将会在相似的世界体系下构造不同的世界观，以主角的故事对上述两个主题进行探索。
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            The novel YUTU is based on the following three themes:
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            Nakedness: By the instinct fear to the unknown, human are not brave enough to both known-in-circle
            and
            unknown-exo-circle. Abandoning the excessive curiosity to the exo-circle, how to protect the content
            in-circle are reality.
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            Relativity: The ideology of relative gives human insatiable greed.
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            Based on the fantasy e-novel ZHIMO, YUTU will build a different world outlook under similar systems,
            exploring the above mentioned themes through the story of the leading role.
          </StyledText>
          <StyledText variant={"h6"} paragraph>
            Please note that only Chinese version of this article is available at the moment, translation will
            be
            scheduled.
          </StyledText>
        </PaddingSurroundTopAndBottomTwoEm>






        <Grid container>

          <Grid item sm={6}>
            <Card className={classes2.card}>
              <CardActionArea href="/idea" target="_blank" rel="noopener noreferrer">
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon/>
                    </IconButton>
                  }
                  title={"《紫图》大纲   The synopsis of ZITU"}
                  subheader={"持续更新"}
                />
                <CardMedia
                  className={classes2.media}
                  image={DefaultImage}
                  title={"《紫图》大纲"}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">
                  {"ZITU is the novel and a more complex worldview based on ZHIMO and YUTU"}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  {/*todo this link is not working*/}
                  <FavoriteIcon href="https://github.com/qiushanbeikun"/>
                </IconButton>
                <IconButton
                  className={clsx(classes2.expand, {
                    [classes2.expandOpen]: expanded2,
                  })}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon/>
                </IconButton>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    《紫图》是小说《雨图》的外传，对雨图中仍然留有疑点，但是不适合在《雨图》中进行叙述的内容进行补全，其本身仍然可以作为独立的故事出现。
                  </Typography>
                  <Typography paragraph>
                    《紫图》和《雨图》持有一致的主题，偏向故事性，对主题的探讨主要探讨已经在《雨图》中完成，主要功能为装B，发福利，撒狗粮。
                  </Typography>
                  <Typography paragraph>
                    ZITU is the external episode of YUTU, filling up the content that are still questionable but not
                    appropriate to demonstrate inside YUTU. However, the story itself can still be independent.
                  </Typography>
                  <Typography paragraph>
                    ZITU is more story orientated, but focuses on the same topic with YUTU, the discovery of the theme
                    has
                    been finished in YUTU, the designed functions of this novel is to show-off, DLC give away.
                  </Typography>
                  <Typography paragraph>
                    ZITU and YUTU will share the same wiki page
                  </Typography>


                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item sm={6}>
            <Card className={classes3.card}>
              <CardActionArea href="https://sites.google.com/view/qiushanbeikun/home/idea/%E6%98%9F%E9%9B%A8%E5%9B%BE" target="_blank" rel="noopener noreferrer">
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon/>
                    </IconButton>
                  }
                  title={"《星雨图》 "}
                  subheader={"很难更新"}
                />
                <CardMedia
                  className={classes3.media}
                  image={DefaultImage}
                  title={"《星雨图》"}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">
                  {"XINGYUTU is a novel during created during my high school"}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  {/*todo this link is not working*/}
                  <FavoriteIcon href="https://github.com/qiushanbeikun"/>
                </IconButton>
                <IconButton
                  className={clsx(classes3.expand, {
                    [classes3.expandOpen]: expanded3,
                  })}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon/>
                </IconButton>
              </CardActions>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    高中时期作品，故事发生于一个武侠背景的架空世界。
                  </Typography>
                  <Typography paragraph>
                    一切源于在十年前发生在武林界的一场浩劫，各大门派损失惨重，然而浩劫的真相却随着主谋人员的相继离世而成为未知之谜。十年间，各方人物蠢蠢欲动。作为公认的“不安定”因素，北辰决定引退江湖并离开烈雨殿，然而真正的江湖却不打算让北辰就这让消失。北辰被迫开始行程，追寻真相背后的真相。
                  </Typography>
                  <Typography paragraph>
                    随着作者阅历和见识的增长，对于小说深度定位有所思考，故更新速度缓慢，有生之年系列。
                  </Typography>
                  <Typography paragraph>
                    High school works, happened in a overhead swordplay world.
                  </Typography>
                  <Typography paragraph>
                    Anything of everything began with a catastrophe happened 10 years age, all the institutions in the
                    "wuxiajie" suffered great lost. However, the truth of the catastrophe was hided because the one that
                    know the truth passed away consecutively. In the past 10 years, hostiles hostile. As the publicly
                    recognized "hazardous", Beichen decided to retire from wuxiajie and left his institution, however,
                    wuxiajie does not want Beichen to just retire as he will. Beichen is force to start his journey
                    again
                    to find the truth behind the truth.
                  </Typography>
                  <Typography paragraph>
                    Please note that the English version of this novel is neither translated nor scheduled to be
                    translate.
                  </Typography>
                  <Typography paragraph>
                    Please note that the English version of this novel is neither translated nor scheduled to be
                    translate.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>


        </Grid>
      </Container>
    </div>
  )
}
