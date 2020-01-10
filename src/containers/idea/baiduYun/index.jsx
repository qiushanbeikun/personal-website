import Container from "@material-ui/core/Container";
import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import CommentBox from "../../../components/CommentBox";

const StyledTitle = styled(Typography)`
  color: aqua;
  padding: 1em 0;
`;

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

const StyledItalicText = styled(Typography)`
  color: #eeeeee;
  font-style: italic;
`;


export default function BaiduYun() {
  return (
    <Container maxWidth={"lg"}>
      <StyledTitle variant={"h3"}>你的网盘再也无法GKD
      </StyledTitle>

      <div class={"date and author"}>
        <StyledText variant={"h5"}>2019/NOV/19 北鲲</StyledText>
      </div>

      <div class={"content"}>
        <StyledText variant={"h5"} paragraph>
          2016年，还真是很长时间之前了，360云盘宣布停止提供个人云储存服务，到此，大容量云储存市场在中国已经几乎是百度一家独大。
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          我相信，百度网盘也已经活不长了。回形针工作室已经向我们解释了运营网盘有多么烧钱，当然这不会是百度云即将没落的原因，百度的出发点也许是正常的，但中国的这个市场并没有给百度留位置。
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          介绍一下我正在使用的云储存服务：OneDrive 5GB, Google Drive 15GB, iCloud 5GB，几乎没用，还有UBC学生账号的OneDrive，
          但是这个账号毕业后就会收回，我也没有在里面放重要文件的打算。到目前为止，OneDrive使用了100M左右，几乎全是word和pdf，
          它可以自动同步我的Windows平台的文件。GoogleDrive 使用10GB左右，储存Google所有服务的相关数据：
          Gmail，Chrome，包括这个网页。iCloud没有用是因为我只有一个iPad，用不充分，所以闲置。
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          没错，我没有购买任何一家的付费产品，因为对于我这样的一个学生，我的所有重要文件都是文档格式，
          总共20G的空间对我来说已经足够了，所以当人们看见百度云那以TB为单位的容量时，会想到什么？
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          我直接给结论，百度云毫无疑问的成为了各种盗版资源的聚居地。这也时百度云运气不好，在那个云储存概念刚刚兴起的时候，
          人们还保有着“任何东西只有下载下来才有意义”的观念的时代，听歌有各种音乐平台，看电影有快播和暴风影音，
          还有迅雷下种子。在那个年代，迅雷快播暴风影音的观看体验可以碾压所有视频平台，
          优酷土豆爱奇艺都是弟弟。但是，这些频台没有版权。后来版权战打响，快播直接gg，
          暴风影音好不容易在创业板上市也难逃们再一凉，迅雷在雷总的扶持下苟延残喘。人也不能高清在线观看。
          但是盗版资源的需求没有减少，更何况当时爱奇艺首页打开全是什么《笔仙XI》，《总裁风云：^[\w]+?》之类的神仙。
          所以盗版玩家转移战场到了百度云，一并转移过去的还有一众贴吧老司机，百度云被游戏区、电影区和秋名山区瓜分，
          各种蓝光，车牌，CODEX大作伸手就来。但是百度也打不过版权方，配合上净网行动，百度云上的内容被洗劫，无法下载，
          或者直接被“白屏下架”。百度云作为一个内容分享平台失去了最后存在的意义。
          后来，百度云开始对非会员限速，一开始时200k，现在只有50k。再一次加剧了人们人百度的恶评。
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          今天，似乎人们已经习惯了对服务付费，不少人一个月开着好几个会员，但是百度云虽然霸占着市场，但霸占的是内容分享的市场，
          而这样的市场必定会牵扯盗版问题。而百度云作为云储存产品的初衷，已经无法和OneDrive，iCloud，Dropbox这样有着明确目标和优质服务的对手竞争。
        </StyledText>

        <StyledItalicText variant={"h5"} paragraph>
          “人不行，干一行行行不行”。
        </StyledItalicText>
        <StyledText variant={"h5"} paragraph>
          这可能解释了我的们“红颜祸水”大力开发自动驾驶了吧。
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          所以，你的百度云无法再GKD，其实只是失却了盗版资源和车牌的百度云没有了存在的价值。
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          所以？
        </StyledText>
        <StyledText variant={"h5"} paragraph>
          如果你想用云储存，可以参考我之前提到的“三件套”，免费版足够。对于内容创作者，你需要的是一个NAS/DataServer，而不是网盘。如果你还是想GKD，事关盗版，我无话可说。
        </StyledText>
      </div>

      <CommentBox />
    </Container>
  )
}