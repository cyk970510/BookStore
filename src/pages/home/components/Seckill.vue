<template>
  <div class="hot">
    <div class="hot-header">
      <img class="header-img" src="static/img/img-miaosha/mao_title.jpg" />
      <span class="seckilling-content" data-widget="countdown" data-end-time="1553572800" data-left-time="1684">
        <span data-countdown-role="hour" class="seckill_t">
          <span>00</span>
        </span>
        <span class="seckill_d">时</span>
        <span data-countdown-role="min" class="seckill_t">
          <span>08</span>
        </span>
        <span class="seckill_d">分</span>
        <span data-countdown-role="sec" class="seckill_t_red">
          <span>16</span>
        </span>
        <span class="seckill_d">秒</span>
      </span>
    </div>
    <ul class="hot-swiper">
      <li class="wrapper" v-for="item of seckillList" :key="item.id">
        <img class="wrapper-img" :src="item.imgUrl"/>
        <div class="wrapper-title">{{item.title}}</div>
        <div class="wrapper-price">
          <p><span class="wraper-price-single">{{item.price}}</span></p>
          <span class="wraper-price-single1">{{item.price1}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeSeckill',
  props: {
    seckillList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .hot
    position relative
    height 53%
    margin-top .2rem
    background #fff
    .hot-header
      position relative
      font-size .3rem
      .header-img
        width 100%
      .seckilling-content
        display: block;
        overflow: hidden;
        text-align: center;
        margin-top -.2rem
        .seckill_t
          letter-spacing 0
          border-radius .05rem
          background-color black
          color #fff
        .seckill_t_red
          background-color: red
          letter-spacing 0
          border-radius .05rem
          color #fff
    .hot-swiper
      overflow-y hidden
      overflow-x scroll
      white-space: nowrap
      padding 0 .24rem
      margin-top .2rem
      .wrapper
        position relative
        display: inline-block
        overflow-x hidden
        width 20%
        margin 0 .1rem
        .wrapper-img
          width 100%
        .wrapper-title
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top .1rem
          height .4rem
          line-height .2rem
          font-size .24rem
          text-align center
        .wrapper-price
          line-height .36rem
          font-size .22rem
          text-align center
          .wraper-price-single
            color: #f3344a
            font-size .3rem
          .wraper-price-single1
            color: gray
            text-decoration line-through
            font-size .25rem
</style>
