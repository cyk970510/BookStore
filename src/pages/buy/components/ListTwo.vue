<template>
  <div class="listtwo">
    <div class="header">
      <span class="headerbigtitle">促销专场</span>
      <span class="headerright">
        <span class="headermore">更多</span>
        <span class="iconfont headericon">&#xe603;</span>
      </span>
    </div>
    <div class="content">
      <div class="wrapper" v-for="item of Listtwo" :key="item.id">
        <p class="title">{{item.title}}</p>
        <p class="discount">{{item.discount}}</p>
        <img class="contentimg" :src="item.imgUrl"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyListtwo',
  props: {
    Listtwo: Array
  }
}
</script>

<style lang="stylus" scoped>
  .listtwo
    position relative
    width 100%
    overflow hidden
    background-image url("../../../../static/img-buy/listtwo/九宫格.5e5e35d.png")
    .header
      position relative
      height 2vh
      width 100%
      padding .2rem 0
      text-align center
      .headerbigtitle
        font-size .4rem
        font-weight: 600
        color white
        margin-left .4rem
      .headerright
        position relative
        float right
        color white
        margin-top .2rem
        margin-right .2rem
        font-size .23rem
        .headericon
          font-size .23rem
    .content
      position relative
      width 100%
      overflow hidden
      padding .1rem 4%
      padding-bottom .3rem
      .wrapper
        position relative
        float left
        width 30%
        margin-right 1%
        margin-top .2rem
        background #fff
        border-radius 2vh
        height 22vh
        .title
          text-align center
          width 100%
          color black
          font-size 2vh
          margin-top 0.5vh
          overflow hidden
        .discount
          width 100%
          color #943dff
          font-size 1.5vh
          text-align center
          margin-top 1vh
          overflow hidden
        .contentimg
          position absolute
          bottom 1%
          height 16vh
          border-radius 2vh
          width 100%
</style>
