import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const StyledTitle = styled(Typography)`
  color: #dddddd
`;

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

const StyledeItalicText = styled(Typography)`
  color: #eeeeee;
  font-style: italic;
`;


export default function YUTUMainPage() {
  return (
    <Container maxWidth={"lg"}>
      <StyledTitle variant={"h3"}>《雨图》大纲</StyledTitle>

      <div class="author">
        <StyledText variant={"h5"}>文⚪北鲲</StyledText>
      </div>
      <div class="content">
        <StyledText paragraph variant={"h5"}>
          两个主题，虚实以及相对
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          虚实：
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          （一）对未知的原始的无限恐惧
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          seeing is believing, 如何证明看到的一切不是别人安排好的。我不是在说明我们所接受到的一切是不是我们应该接收到的。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          讨论“应该”这个词是没有意义的，正如我打碎了一个杯子，那么这个杯子就应该碎掉吗？从我的角度，是的，但是从杯子的角度？？
          不知道，因为我从来未能得知杯子的想法，我只能自私地把杯子定义为我自己的所有物，
          不负责任地给杯子强加我自己的想法，而杯子从来不会责备我的这种行为，
          或者说，杯子可能即使想，也无法传达它自己的思维。所以，在我和杯子两个物体间，存在着无法忽视的等级的差距。
          我和杯子都是有原子以及原子间的化学键构成的，甚至我们在组成成份上有着相似的地方（假设杯子是塑料，有机物）。
          我作为高级的，有主动思维的灵长类动物，比（可能）没有思维，只是作为一堆物质存在于某个坐标的杯子等级高了不少，
          所以我才能以上述荒谬的行为去欺负杯子。杯子没有资格应该与否。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          回到一个古老的话题，在人类之上是否存在着比人类更加高级的物种？如果有，人类是否能够以人类的感觉器官
          （包括生物上的五官，以及人类制造的各种机器）感知到这些种族的存在？如果没有，意味着人类无法证明这些物种存在，
          人类能否证明这些物种不存在？恐怕不能，实验室中“安全第一”的准则显示了人类在面对已知和未知两种状态时都不能做到相对勇敢，
          更何况是自从人类文明存在以来就被人类畏惧了5000年的“unknown”。这就是unknown最原始的恐怖，因为无法证明DNE (do not exist)。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          那么，上述诸多问题的另一个方面没有解决，人类能否感知所有比自己低级的物种。注意我讨论的是“所有”物种。
          我觉得可以给出一半的肯定，因为这个问题本身就是一个悖论。首先是“比人类低级的物种的定义”，
          只有当人类发现一个物种之后，才能将它定义为“比人类低级”，还是“比人类高级”（目前还没有）。已经被发现的物种，
          无一例外都被归类为了“低级”，二未被发现的物种，，，无法定义，
          因为unknown无法被证明DNE，人类也就没有资格给这些物种归类。
          “低级”意味着已被感知，所以问题中“所有” “比自己低级”的物种是存在逻辑问题的。学术界能够提出“存在xx种未被发现的物种”，
          普通人能够容易地接受这种说法，我觉得有一半来自于人类在这安逸的5000年中积累的夜郎自大。那么现在修改问题，
          假设人类认为所有已被感知的物种都被定义为“低级”，人类是否有能力发现所有比人类低级的物种？这个问题无法解决，
          任何事物一旦被加上了例如“所有”这样的指向无限的词汇，由unknown造成的影响就无可避免。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          结论，人类的认知永远只能是一个不断扩张的圆，人类永远无法做到无限。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          我给出一个粗浅的证明，首先介绍我最近由巴黎圣母院大火想到的人类的无限化的信息量。当时随便写在了朋友圈：
        </StyledText>
        <StyledeItalicText paragraph variant={"h5"}>
          巴黎圣母院倒下
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          让我想起来了不久前九寨沟的地震
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          我们心痛是因为这两个被人类赋予了意义。
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          那么其他被赋予意义的东西呢？
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          我一年会产生多少的数据？
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          我写的程序，写的小说，做的视频，记的笔记，拍的照片……我该怎样保存这些资料？
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          电子版的内容比纸质的安全，至少我还有云储存这条后路可选。
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          以我一年产生上百GB的数据，硬盘总有满的时候，那么对于旧硬盘数据的保护需要很多的财力人力。
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          但硬盘总有坏的可能，即使是磁盘阵列也不能完全规避数据丢失的可能。
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          那么，问题来了，我们无法规避自己想要保存的内容意外丢失的风险。
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          那么费心保存这些内容的意义是否值得我们去投资，
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          应该如何调整丢失内容后的心态
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          举个简单的例子，假如我去欧洲玩了一圈，旅游的照片被我放在了一个1TB的机械硬盘里。
          然后有一天我把硬盘摔了，厂商给出的数据恢复价格为8元/GB，并且不保证能够恢复全部数据。
          我该不该去做数据恢复？问的更深一些，我一开始就把照片储存下来的意义究竟是什么？
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          忘了在哪看到的：“那个作家临死前疯狂地把他的作品寄向世界各地的图书馆，
          生怕他的家人在他死后把他的作品一把火烧掉。然而收到的却是无数的拒绝：
          我们的图书馆已经很满了，实在放不下您的作品。”尽力在这个世界留下一些自己存在过的见证，这应该是人类本性了。
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          无论是圣母院到了，还是九寨沟塌了。人们会惋惜，人们会讨论修复，因为这是全人类的财产，但是我每天硬盘摔坏，纸张水浸造成的损失该如何处理？
        </StyledeItalicText>
        <StyledeItalicText paragraph variant={"h5"}>
          我不知道我不知道我不知道。
        </StyledeItalicText>
        <StyledText paragraph variant={"h5"}>
          我把每个人都想象成一台计算机，每个人都有一颗运算速度为天河二号四分之一的处理器，有着容量为上百G的物理内存，容量为上百T的内置存。
          每秒，两颗像素为10000*10000的高清摄像头会拍出八张照片并写入物理内存，CPU在读取物理内存后会在小于等于1/8秒的时间中对这两张照片进行上下翻转，
          降噪，剪切和拼接，并且将图片转化为VR那种的球体。接着CPU会对每张照片的动态模糊进行还原，基于深度学习对每两帧照片之间的内容进行补帧操作，
          将之前只有8帧的视频扩充至240Hz甚至更高的刷新率。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          扯远了，人类中的每一个有主观意识的个体何时何地都在创造着数据，各种数据会以不同的形式被保留。
          总会有越来越多的数据被创造出来。那么，目前一直的宇宙是否能够容纳这些数据，如果物理世界中的原子数目是有限的，
          那就决定了物理世界的容量存在尽头。人类能否创造出无限的数据？不能，因为人类自始至终没能掌握住任何形式的无限地球是球体而不是天圆地方，
          就连宇宙也有着不断扩张的边界。宇宙在扩张，我们就能说宇宙是无限的吗？不能
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          以下以大一的高等数学为例，关于这几段latex代码：
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          ==================================
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          达成无限的条件，要么是在某一瞬间做到无限，要么就是赌上无限的时间，当然，即使有无限的时间也不一定能做到无限：
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          ============================
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          人类没能做到过瞬间无限，加上前文提到的人类无法做到相对勇敢，我相信人类不会去选择透支无限的时间。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          反推，比人类高等的物种能否做到无限？一半肯定，一般否定。先来解释否定的原因。此物种和人类相比，可能其对无限的定义就不同。
          由于该物种存在于unknown中，我猜测该物种仍然只能创造有限，然而此物种对于有限的定义决定了这种有限如果放在人类的尺度中就可以达成无限，
          所以剩下一半给出肯定。简单的例子二位中的一个面对于一维来说就是无限的，同理四维空间中的一个单位放在三位中也是无限的。
          具体是如何达到无限和有限，我不打算去猜测。我们能够很好的向低纬度理解是因为我们所处在的三维世界中的三个坐标轴是等价的，
          人类难以在z轴上有所成就是由于万有引力以及其造成的错觉。那么类比之下我认为更高维度空间的生物拥有更多坐标轴时对于各个坐标轴的感知也应该是等价的。
          潦草地把时间轴加入维度中去感知抽象的四维空间是不负责任的。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          那么，向上感知更高维度的空间是否可能？多半是不可能的，如果答案可以给出可能，那么就会形成一个明显的矛盾：
          如果可以被感知，即说明“可被感知”，那么也就谈不上是更高的维度。也就是说任何在三维空间向上感知的理论从本质上就存在缺陷。
          这里给了小说的第一处灵感，我们的感官是否由于长期的用尽废退而存在盲点：我们是否本身就存在于高于三位空间的维度中，
          环境要求我们不得不妥协一部分感知来维持生存。向下举例：一些虫子主要在地表面生活，因为生存环境不允许它们进入更广阔的空间被更高等的生物踩死，
          虫子群体中是否会形成“其所处的空间是二维空间”的错觉（我知道这个例子不够严谨，但是别跟我杠蚂蚁钻进大象鼻子里把大象痒死了这样的幼儿园故事）？
          另一个例子：一个熊孩子给机制蚂蚁筑起了无法翻越的高墙，使蚂蚁只能在平面上活动，每当蚂蚁发生技术革命，熊孩子也能突破思维以更高级的手段限制蚂蚁的行动。
        </StyledText>
        <StyledText paragraph variant={"h5"}>
          小说假设一：人类和那种更高等级的生物存在于同一个维度中，更高等级的生物会采取永远比人类高级的手段限制人类的感知，
          将人类的视界限制在三维内，因此更高等级的生物可以独享，开发和利用更高维度的资源。
        </StyledText>
        <StyledText paragraph variant={"h5"}>

        </StyledText>
        <StyledText paragraph variant={"h5"}>

        </StyledText>
        <StyledText paragraph variant={"h5"}>

        </StyledText>


      </div>
    </Container>
  )
}