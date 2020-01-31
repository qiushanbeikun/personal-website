import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {StyledTitle, StyledText, StyledSubtitle, StyledItalicText, PaddingAroundEMainText} from '../../../commonStyles'



export default function TalkAboutTech() {
  return (
    <PaddingAroundEMainText>
    <Container maxWidth={"lg"}>
      <StyledTitle variant={"h3"}>谈科技？</StyledTitle>

      <div className="date and author">
        <StyledText variant={"h5"}>2019/OCT/20 文⚪北鲲</StyledText>
      </div>

      <div class={"正文"}>
        <StyledText paragraph variant={"h5"}>
          大概一个月之前吧，小米发布了MIX Alpha。说实话，这个180%的环绕屏的设计真的是惊艳到我了，但是我当时还是毫不留情的记录下了我的质疑：信息传递效率的流失
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          首先介绍一下我对于信息的看法：
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          世界上有70亿双眼睛，但是这些眼睛一天也就只有一般的时间睁着，而真正集中注意力的时间就更少了。也就是说，人的注意力是有限的，
          即使身边的内容越来越多，但是人们的关注力并没有变。这也就是为什么iPhone4能够成为改变人类的一代产品：
          因为它大大提高了人与机器间信息的交互效率。当你再拿起如今看起来已经很小的iPhone4时，
          你会发现你刚好一眼能把整个屏幕的内容全部扫过。这也是为什么手机没有越做越大，不仅是因为拿不动，也是因为人的注意力就这么多，
          过大的屏幕必然会导致屏幕上的信息在传递上造成流失。当然，这也不是没有解决办法，比如：分屏/多任务，
          它们的共同点就是让用户只集中关注部分屏幕，从而提高效率。没错，人的大脑仍然是单核处理器(后文解释)。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          说回MIX Alpha，它正好是与高效信息传递背道而驰。这很简单，人的眼睛只能看见手机的一面，
          你确实可以在同一个手机的两面显示不同的内容，但代价就是你不得不翻转手机。而这个翻转的动作就是一个很大的“噪音”，
          它会打断，干扰你的思路，甚至转移你的注意力，这都会降低使用手机的效率。这就是MIX Alpha的致命缺点：
          它没有选择让用户转动眼球或是转动脖子，而是用“手”，这个人类最灵巧的器官。
        </StyledText>

        <StyledSubtitle variant={"h4"} paragraph>
          “信息流动的同步性”
        </StyledSubtitle>
        <StyledText paragraph variant={"h6"}>
          // ps 这个名词是我自己瞎jb概括的
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          我不是否认用手完成信息的更新与替换。而是翻转屏幕这个动作很不“流畅”。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          什么是流畅？我认为是信息的上下文不会在人转移关注点时瞬间消失。无论是你用手指滑动网页，还是把目光从纸张的第3行移动到第10行，
          你之前阅读的信息总是需要一定的时间才会消失：翻页或者完全划过这一屏。
          但是，翻转这个动作会造成屏幕一侧的内容瞬间消失，如果想要reload，就必须把屏幕再翻回来。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          总之，这就是MIX Alpha的致命问题：两块屏幕不能协同工作，背面屏幕的利用效率永远是个问题。
          比如发布会上雷总对于北屏的使用上单薄的介绍，因为开发组也没有想好在怎么用这个屏幕。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          所以，MIX Alpha可能会成为”花瓶“，它可以证明小米的技术实力，可以用来装B，但是很难成为改变人类生活的一代产品。恐怕配不上“概念机”这个词。
        </StyledText>
        <StyledSubtitle variant={"h4"} paragraph>
          ”性能过剩“？
        </StyledSubtitle>
        <StyledText paragraph variant={"h5"}>
          个问题我觉得不只是针对MIX，我是说在座的各位科技产品都是……
        </StyledText>
        <StyledSubtitle variant={"h4"} paragraph>
          ”有没有性能过剩“
        </StyledSubtitle>
        <StyledText paragraph variant={"h5"}>
          对于不小的一部分人来说，并没有。应为他们还在用着Haswell架构的i3，DDR3-1333 单根4G内存，500ms延迟的机械硬盘，然后打开chrome之后，四个电脑管家报警内存占用过高……
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          不说这些有的没的，我认为无论是桌面还是移动设备都有着性能过剩的问题。当然这是没有考虑到”英特尔-微软“定律：硬件的性能增长会很快被软件所填满。
          当然，这个”定律“是程序员的锅，软件的优化并没有充分利用硬件的资源。简单的例子：崩坏3在手机上只能跑到30FPS，
          但在我的1600+1080上仍然是30FPS（指开大招的特效下）这可能是处理器架构的锅，但它没有充分利用系统资源是事实。
          当然最近我也看到了一些好的苗头：iOS13更新后系统体积明显减少，逐步开放的MIUI11(在本文撰写时)对底层代码进行了优化，系统占用储存和运存都有显著减少。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          性能会过剩，但是前提是用户能够高效率地使用软硬件资源，不会给9900k+2080Ti弄个机械硬盘做系统盘，也不会在电脑里养蛊。
        </StyledText>
        <StyledSubtitle variant={"h4"} paragraph>
          ”需要什么样的性能“
        </StyledSubtitle>
        <StyledText paragraph variant={"h5"}>
          人脑和CPU，都是计算单元，它们的计算能力可以进行对比，但是，，，我认为，在目前阶段意义不大吧。不过我还是能给出一些对比：
        </StyledText>

        <StyledItalicText paragraph variant={"h5"}>
          “目前的超算并没有成熟，人脑的计算能力大概相当于0.25个天河二号****，但是天河二号的功率却是人脑的无数倍。”
        </StyledItalicText>

        <StyledItalicText paragraph variant={"h5"}>
          人类拥有两颗10000*10000的摄像头，每秒能够拍摄总共16张无损或有损图片，之后大脑会对这两张图片进行缩放，
          剪裁，拼凑，构造出一张完整的广角图片，并瞬间对于图片中的内容进行准确识别。同时，
          大脑还会对每两张图片进行对比以推测两张图片之间的内容，对影片进行实时“补帧”以保证影片的连贯性，
          同时对于曝光时间过长产生虚影的图片进行优化，生成虚拟的清晰图像。
        </StyledItalicText>

        <StyledText paragraph variant={"h5"}>
          没错，就算是天河二号也仅仅是四个人脑，桌面CPU性能无论是计算能力还是功耗都无法和人脑媲美，但是人类却觉得计算机比人脑快很多倍，
          这种错觉不难理解，以为人脑和计算机从本质上进行运算的方式和种类都是不同的。计算机可以快速进行数学运算和资料储存，
          但是人脑算一个1+1=2都得花上半秒。人脑何以快速进行对物体的识别，对表情的判断，但是机器在这方面的研究还处于实验阶段。
          总结一下，人脑更适合的是经验运算，这是人类在几万年间进化得到的，但是像1+1这样的数学运算却不是一个猴子活下来所必须的。
          所以现代的计算机和人类间形成了一种互补的关系，计算机用来弥补人类在进化中的不足。反过来看，
          目前的人工智能和机器学习都是在数学量化宏观世界，而现代数学使用的一阶谓词逻辑系统本身符合哥德尔不完备定理：
          “现在的计算机无法解决所有的问题，也不能构造出真正的人工智能” (reference)。
          如果计算机能够从互补变成可以取代，那么在那种时候，人类存在意义会是什么？(后文解释)
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          所以，我希望计算机的普通用户能够明白计算机的作用是什么，以及计算机能够带来什么。
        </StyledText>

        <StyledSubtitle variant={"h4"} paragraph>
          “科技进步”
        </StyledSubtitle>

        <StyledText paragraph variant={"h5"}>
          有观点认为人类科技进入了瓶颈。我觉得有道理。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          我归纳了几次人类科技进步的节点：使用畜力、使用火、造纸术、工业革命、信息革命。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          也有观点：如果当时造纸术没有传到欧洲，文艺复兴会被推迟。现在人类也面临一个类似于造纸术的瓶颈，否则人类无法迈入下一个阶段（跟Anno一样）。现在需要学术界对量子纠缠现象做出解释，以及实现可控核聚变。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          先不管量子纠缠和可控核聚变是不是扯淡，我对上述观点进行归纳，“使用畜力、使用火、工业革命”属于提高了能量使用效率，
          剩下两者属于提高了信息传递效率。可能人类几万年就是为了这么两件事？现在人们不再看着纸质书，而是盯着屏幕，
          这确实是信息传递的进步，但是并没有赶上造纸术被发明出来时候的那种飞跃。现在人们又开始在屏幕上下功夫，折叠屏，
          环绕屏一个个的都出来了。但它们注定都无法做到飞跃，甚至进步都不是。就好比你之前只有一个显示屏，
          现在又买了一个，那么工作效率确识会提升，但是这种提升不是飞跃。
        </StyledText>

        <StyledSubtitle variant={"h4"} paragraph>
          我的猜想？
        </StyledSubtitle>

        <StyledText paragraph variant={"h5"}>
          首先是5G，说实话，抛开物联网，自动驾驶这种和民用产品半杆子打不着的应用（不准确，我认为自动驾驶车辆和手机的价格不在同一消费水平上，
          所以说半杆子打不着），我还真没有想明白5G提供的1Gbps的速度和接近1ms的超低ping对消费者有什么意义。
          先说网速，我现在用的150M光纤很舒服，唯一蛋疼的地方就是重装系统后重新加载steam library。有时候得下上几个小时。
          除此之外我很少能跑满150M的带宽。所以，对于以我为代表的“一般用户来说”，5G所能提供的带宽就完完全全是overkill了。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          P.S. 11月中旬，Google发布了stadia，其中4k60帧的网络要求仅仅只有35M，就能流畅传输4k视频。再8k标准还遥遥无期的今天，50M 差不多已经是视频streaming的上限了。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          所以，我对5G是否能在民用市场得到充分应用存疑。有人说这种普及需要一年的时间，但是我并不是这样觉得，一年只是一种奢望。
        </StyledText>
      </div>

    </Container>
      </PaddingAroundEMainText>
  )
}