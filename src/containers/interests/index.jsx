import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import Honghong from "../../imageFolder/honghong.JPG"
import Rongrong from "../../imageFolder/rongrong.JPG"
import Guichu from "../../imageFolder/guichu.png"
import Ltx from "../../imageFolder/ltx.jpg"

const StyledTitle = styled(Typography)`
  padding: 0.5em 0.2em;
  color: #dddddd
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTextContent = styled(Typography)`
  color: #dddddd;
 
`;

const StyledBox = styled(Box)`
  padding: 2em 0;
`;

const StyledLink = styled.a`
  color: aqua;
`;

const StyledContainer = styled(Container)`
  && {
    padding: 0;
  }
`;

export default function Interest(){
  return (

    <StyledContainer maxWidth={"lg"}>
      <StyledTitle variant={"h3"}> Interests</StyledTitle>

      <StyledBox class="HongHong">
        <StyledImage src={Honghong} alt="honghong"/>
        <div>
          <StyledTitle variant={"h4"}>涂山红红 TushanHonghong</StyledTitle>
          <StyledTextContent variant={"h5"} paragraph>
            <StyledLink href="https://www.instagram.com/explore/tags/%E7%8B%90%E5%A6%96%E5%B0%8F%E7%BA%A2%E5%A8%98/" target="_blank" rel="noopener noreferrer">
              #狐妖小红娘#</StyledLink>
            <StyledLink href="https://www.instagram.com/explore/tags/%E6%B6%82%E5%B1%B1%E7%BA%A2%E7%BA%A2/"  target="_blank" rel="noopener noreferrer">
              #涂山红红#</StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            临摹作品，版权属于
            <StyledLink href="https://www.weibo.com/xuehuaa" target="_blank" rel="noopener noreferrer">原作者</StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            This is an imitated work, copyright belongs to the
            <StyledLink href="https://www.weibo.com/xuehuaa" target="_blank" rel="noopener noreferrer"> original author</StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            Tools: ProCreat & SketchBook
          </StyledTextContent>
        </div>
      </StyledBox>

      <StyledBox>
        <StyledImage src={Rongrong} alt="rongrong"/>
        <div>
          <StyledTitle variant={"h4"}>涂山蓉蓉 TushanRongrong</StyledTitle>
          <StyledTextContent variant={"h5"} paragraph>
            <StyledLink href="https://www.instagram.com/explore/tags/%E7%8B%90%E5%A6%96%E5%B0%8F%E7%BA%A2%E5%A8%98/" target="_blank" rel="noopener noreferrer">
              #狐妖小红娘#</StyledLink>
            <StyledLink href="https://www.instagram.com/explore/tags/%E6%B6%82%E5%B1%B1%E5%AE%B9%E5%AE%B9/"  target="_blank" rel="noopener noreferrer">
              #涂山容容#</StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            临摹作品，版权属于
            <StyledLink href="https://www.weibo.com/xuehuaa" target="_blank" rel="noopener noreferrer">原作者</StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            This is an imitated work, copyright belongs to the
            <StyledLink href="https://www.weibo.com/xuehuaa" target="_blank" rel="noopener noreferrer"> original author</StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            Tools: ProCreat & SketchBook
          </StyledTextContent>
        </div>
      </StyledBox>

      <StyledBox>
        <StyledImage src={Guichu} alt={"guichu"} />
        <div>
          <StyledTitle variant={"h3"}>Highscore X Honkai Impacts 3</StyledTitle>
          <StyledTextContent variant={"h5"} paragraph>
            “鬼畜“：通过影片（或音讯）剪辑，用频率极高的重复画面（或声音）组合而成的一段节奏配合音画同步率极高的一类影片
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            GUICHU: for entertainment purpose, the film made with repeating certain video/sound, along with changing beats/speed to match the scene with sound
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            本作品内容取自崩坏3游戏CG及其他热门视频， 通过VEGAS+WAVETONE+AUDITION的组合完成定调+变调+衔接以达到特殊的节奏/观感。该作品由于素材目录的丢失而暂停。
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            Clipped from Honkai Impacts 3 CGs and other popular videos. Using VEGAS+WAVETONE+AUDITION to get the tone, change the tone and join everything. This work is paused due to lose of sources directory.
          </StyledTextContent>
        </div>
      </StyledBox>

      <StyledBox>
        <img width={"40%"} src={Ltx} alt={"ltx19"}/>
        <div>
          <StyledTitle variant={"h3"}>LTX EXPO 2019</StyledTitle>
          <StyledTextContent variant={"h5"} paragraph>
            <StyledLink href="https://www.ltxexpo.com/" target="_blank" rel="noopener noreferrer">LTX2019 JUL27 & 28 </StyledLink>
          </StyledTextContent>
          <StyledTextContent variant={"h5"} paragraph>
            Video has been uploaded to <StyledLink href="https://www.bilibili.com/video/av61367628" target="_blank" rel="noopener noreferrer">BiliBili</StyledLink> &
            <StyledLink href="https://youtu.be/R8Ow9ORTVdY" target="_blank" rel="noopener noreferrer">YouTube</StyledLink>.
          </StyledTextContent>
          <StyledTextContent variant={"h5"}>Didn‘t have much time getting sources as a volunteer during the event, still try to show as much things as i can.

          </StyledTextContent>
        </div>
      </StyledBox>
    </StyledContainer>

  )
}
