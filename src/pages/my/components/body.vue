<template>
  <div class="body">
    <!--登陆注册-->
    <div class="register">
      <router-link to="/register">
        <div v-if="!this.$store.state.isShow" class="RegisterOrLogin">登陆/注册</div>
      </router-link>
      <div v-if="this.$store.state.isShow" class="LoginSucc">
        <span>欢迎您:</span>
        <span>{{this.$store.state.LandID}}</span>
      </div>
    </div>
    <!--登陆注册下面的信息-->
    <div class="meaasge">
      <div class="collection">
        <div class="one border-right">
          <span class="count">0</span><br/>
          <span class="title">收藏的商品</span>
        </div>
        <div class="one border-right">
          <span class="count">0</span><br/>
          <span class="title">关注的店铺</span>
        </div>
        <div class="one">
          <span class="count">0</span><br/>
          <span class="title">我的足迹</span>
        </div>
      </div>
      <div class="mygoods">
        <img class="myGoodsImg" src="static/img-my/wd-012-1.png" />
        <span class="myGoodstitle">我的订单</span>
        <span class="right">
          <span class="rightTitle">查看全部购买商品</span>
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="waitToPay">
        <div class="two">
          <span class="iconfont icon">&#xe60c;</span><br/>
          <span class="title">待付款</span>
        </div>
        <div class="two">
          <span class="iconfont caricon">&#xe60b;</span><br/>
          <span class="cartitle">待收获</span>
        </div>
        <div class="two">
          <span class="iconfont icon">&#xe612;</span><br/>
          <span class="title">退换货</span>
        </div>
      </div>
    </div>
    <!--会员中心-->
    <div class="Member">
      <img class="myGoodsImg" src="static/img-my/vip-1521514865.png" />
      <span class="myGoodstitle">会员中心</span>
      <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
      </span>
    </div>
    <!--我的礼券-->
    <div class="My">
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wd-012-02.png" />
        <span class="myGoodstitle">我的礼券</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wd-012-03.png" />
        <span class="myGoodstitle">积分抵现</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/111.png" />
        <span class="myGoodstitle">我的电子书</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wd-012-04.png" />
        <span class="myGoodstitle">我的礼品卡</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wd-012-05.png" />
        <span class="myGoodstitle">收货地址</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
    </div>
    <!--阅读-->
    <div class="read">
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wzl-qiang-4.11.jpg" />
        <span class="myGoodstitle">阅读丈量世界，好书每满100减40</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wzl-qiang-4.11.jpg" />
        <span class="myGoodstitle">阅读丈量世界，好书每满100减40</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
      <div class="Mywrapper border-bottom">
        <img class="myGoodsImg" src="static/img-my/wzl-qiang-4.11.jpg" />
        <span class="myGoodstitle">安奈儿春夏款3件3折</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
    </div>
    <!--客服-->
    <div class="feedback">
      <div class="Mywrapper">
        <img class="myGoodsImg" src="static/img-my/wd-012-07.png" />
        <span class="myGoodstitle">客服反馈</span>
        <span class="right">
          <span class="iconfont rightIcon">&#xe603;</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBody'
}
</script>

<style lang="stylus" scoped>
  .body
    position relative
    width 100%
    .register
      width 100%
      height 2.2rem
      background url("../../../../static/img-my/user-bg.jpg")
      .RegisterOrLogin
        position relative
        width 1.5rem
        padding .3rem .5rem
        text-align center
        border-radius .4rem
        margin 0 auto
        top .7rem
        border .01rem solid white
        color white
        font-size .3rem
      .LoginSucc
        position absolute
        top 0
        right 0
        left 0
        bottom 0
        text-align center
        margin-top .8rem
        color white
        font-size .3rem
    .meaasge
      width 100%
      height 3.6rem
      background #cacaca
      .collection
        width 100%
        height 1.2rem
        background white
        .one
          width 33.3%
          height 1.2rem
          float left
          text-align center
          .count
            display inline-block
            margin-top .2rem
          .title
            display inline-block
            margin-top .1rem
      .mygoods
        width 100%
        height 1rem
        background white
        .myGoodsImg
          width .5rem
          margin-left .2rem
          margin-bottom .1rem
        .myGoodstitle
          position relative
          display inline-block
          padding-top .4rem
          margin-left .2rem
          font-size .3rem
        .right
          float right
          margin-top .35rem
          margin-right .1rem
          .rightTitle
            font-size .2rem
          .rightIcon
            font-size .2rem
      .waitToPay
        width 100%
        height 1.4rem
        background white
        .two
          width 33.3%
          height 1.4rem
          float left
          text-align center
          .icon
            display inline-block
            margin-top .25rem
            font-size .35rem
            color gray
          .caricon
            display inline-block
            margin-top .1rem
            font-size .5rem
            color gray
          .title
            display inline-block
            margin-top .2rem
          .cartitle
            display inline-block
            margin-top .2rem
    .Member
      width 100%
      height 1rem
      background white
      margin-top .2rem
      .myGoodsImg
        width .5rem
        margin-left .2rem
        margin-bottom .1rem
      .myGoodstitle
        position relative
        display inline-block
        padding-top .4rem
        margin-left .2rem
        font-size .3rem
      .right
        float right
        margin-top .4rem
        margin-right .1rem
        .rightIcon
          font-size .3rem
    .My
      width 100%
      margin-top .2rem
      .Mywrapper
        width 100%
        height 1rem
        background white
        .myGoodsImg
          width .5rem
          margin-left .2rem
          margin-bottom .1rem
        .myGoodstitle
          position relative
          display inline-block
          padding-top .4rem
          margin-left .2rem
          font-size .3rem
        .right
          float right
          margin-top .4rem
          margin-right .1rem
          .rightIcon
            font-size .3rem
    .read
      width 100%
      margin-top .2rem
      .Mywrapper
        width 100%
        height 1rem
        background white
        .myGoodsImg
          width .5rem
          margin-left .2rem
          margin-bottom .1rem
        .myGoodstitle
          position relative
          display inline-block
          padding-top .4rem
          margin-left .2rem
          font-size .3rem
        .right
          float right
          margin-top .4rem
          margin-right .1rem
          .rightIcon
            font-size .3rem
    .feedback
      width 100%
      margin-top .2rem
      margin-bottom .2rem
      .Mywrapper
        width 100%
        height 1rem
        background white
        .myGoodsImg
          width .5rem
          margin-left .2rem
          margin-bottom .1rem
        .myGoodstitle
          position relative
          display inline-block
          padding-top .4rem
          margin-left .2rem
          font-size .3rem
        .right
          float right
          margin-top .4rem
          margin-right .1rem
          .rightIcon
            font-size .3rem
</style>
