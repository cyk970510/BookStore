<template>
  <div class="listthree">
    <div class="listthreebody" v-for="item of Listthree" :key="item.id">
      <!--即刻秒杀-->
      <div class="one">
        <div class="background"></div>
        <div class="wrapper">
          <div class="header">
            <div class="headerimg">
              <img class="img" :src="item.imgUrl"/>
            </div>
            <span class="headermore">
        <span class="moretitle">更多</span>
        <span class="iconfont moreicon">&#xe603;</span>
      </span>
          </div>
          <ul class="swippeer">
            <!--渲染数据&#45;&#45;即刻秒杀-->
            <li class="wrapper" v-for="items of item.childrenOne" :key="items.id">
              <img class="swiper-img" :src="items.imgUrl" >
              <p class="Goodsname">{{items.title}}</p>
              <p class="Goodsprice">{{items.price}}</p>
              <p class="noprice">{{items.noprice}}</p>
            </li>
            <!--即刻秒杀最后一个 显示更多-->
            <li class="wrapper swippertomore">
              <span class="iconfont moreicon">&#xe610;</span>
              <p class="moretitle">查看更多</p>
            </li>
          </ul>
        </div>
      </div>
      <!--畅销榜-->
      <div class="listGoods">
        <div class="Goodswrapper" v-for="items of item.childrentwo" :key="items.id">
          <div class="header">
            <span class="headerleft">{{items.header}}</span>
            <span class="headerright">
            <span class="righttitle">更多</span>
            <span class="iconfont righticon">&#xe603;</span>
          </span>
          </div>
          <div class="content">
            <img class="img" :src="items.imgUrl" />
            <div class="contentright">
              <p class="title">{{items.title}}</p>
              <span class="momey">
              <span class="price">{{items.price}}</span>
              <span class="noprice">{{items.noprice}}</span>
            </span><br/>
              <span class="commont">
              <span class="commontnumber">
                <span class="iconfont commonticon">&#xe60a;</span>
                <span class="commontnumb">{{items.commontnumb}}</span>
              </span>
              <span class="good">
                <span class="iconfont goodicon">&#xe63d;</span>
                <span class="goodnumb">{{items.goodnumb}}</span>
              </span>
              <span class="iconfont caricon">&#xe607;</span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyListthree',
  props: {
    Listthree: Array
  }
}
</script>

<style lang="stylus" scoped>
  .swippeer::-webkit-scrollbar {display:none}
  .listthree
    position relative
    width 100%
    overflow hidden
    background #f5f5f5
    .listthreebody
      margin-bottom .3rem
      .one
        width 100%
        overflow hidden
        background #fff
        .background
          position absolute
          width 100%
          background-image url("../../../../static/img-buy/listthree/9.9-background.d4afbba.png")
          background-repeat no-repeat
          height 4rem
          border-radius 0 0 .2rem .2rem
        .wrapper
          position relative
          width 100%
          overflow hidden
          .header
            width 100%
            height .5rem
            margin-top .35rem
            padding-bottom .2rem
            .headerimg
              margin auto
              width 40%
              .img
                width 100%
            .headermore
              position absolute
              right .2rem
              top .3rem
              .moretitle
                font-size .24rem
                color #fff
              .moreicon
                font-size .24rem
                color #fff
          .swippeer
            width 100%
            overflow-x scroll
            white-space nowrap
            margin-top .2rem
            margin-bottom .2rem
            padding-left .2rem
            .wrapper
              position relative
              display inline-block
              height 3.4rem
              width 28%
              border-radius .15rem
              margin 0 .1rem
              background #fff
              box-shadow: 0 0.03rem 0.12rem #d7d7d7;
              .swiper-img
                width 100%
              .Goodsname
                font-size .26rem
                margin-top .2rem
                text-align center
                overflow:hidden;
                text-overflow:ellipsis;
                width 90%
                margin-left .1rem
                white-space:nowrap
              .Goodsprice
                margin-top .1rem
                font-size .32rem
                color red
                text-align center
              .noprice
                font-size .22rem
                margin-top .1rem
                text-align center
            .swippertomore
              position relative
              display inline-block
              height 2rem
              width 28%
              vertical-align top
              margin-top .5rem
              margin-right .5rem
              text-align center
              background none
              box-shadow none
              .moreicon
                display inline-block
                margin-top .7rem
                font-size .24rem
                color white
              .moretitle
                margin-top .2rem
                font-size .24rem
                color white
      .listGoods
        position relative
        width 100%
        margin-top .3rem
        .Goodswrapper
          width 100%
          background #FFf
          margin-top .15rem
          .header
            width 100%
            .headerleft
              display inline-block
              width 26%
              padding .15rem
              margin-top .2rem
              background-image: linear-gradient(133deg,#f296bd,#ee3b31);
              font-size .28rem
              border-radius 0 0 .3rem 0
            .headerright
              float right
              margin-right .2rem
              margin-top .4rem
              .righttitle
                font-size .24rem
                color #a1a1a1
              .righticon
                font-size .24rem
                color #a1a1a1
          .content
            display flex
            width 100%
            margin-top .4rem
            .img
              width 2.4rem
              height 2.4rem
              margin-left .2rem
            .contentright
              position relative
              margin-left .2rem
              margin-top .2rem
              width 5rem
              .title
                position relative
                right 0rem
                overflow:hidden;
                text-overflow:ellipsis;
                width 90%
                margin-left .1rem
                white-space:nowrap
              .momey
                position relative
                display inline-block
                margin-top .7rem
                margin-left .2rem
                .price
                  font-size .33rem
                  color red
                .noprice
                  font-size .22rem
                  color #777
                  text-decoration line-through
                  margin-left .3rem
              .commont
                position relative
                display inline-block
                margin-top .3rem
                margin-left 1.5rem
                .commontnumber
                  .commonticon
                    font-size .18rem
                    color #777
                  .commontnumb
                    font-size .18rem
                    color #777
                .good
                  margin-left .2rem
                  .goodicon
                    font-size .18rem
                    color #777
                  .goodnumb
                    font-size .18rem
                    color #777
                .caricon
                  display inline-block
                  border .01rem solid #777
                  border-radius .05rem
                  margin-left .4rem
                  padding .02rem .05rem
                  color red
</style>
