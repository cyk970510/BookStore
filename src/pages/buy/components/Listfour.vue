<template>
  <div class="listfour">
    <div class="listfourbody">
      <!--即刻秒杀-->
      <div class="one">
        <div class="background"></div>
        <div class="wrapper">
          <div class="header">为你推荐</div>
          <ul class="swippeer">
            <!--渲染数据&#45;&#45;即刻秒杀-->
            <li class="wrapper" v-for="item of Listfour" :key="item.id">
              <img class="swiper-img" :src="item.imgUrl" >
              <p class="Goodsname">{{item.title}}</p>
              <p class="Goodsprice">{{item.price}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyListfour',
  props: {
    Listfour: Array
  }
}
</script>

<style lang="stylus" scoped>
  .swippeer::-webkit-scrollbar {display:none}
  .listfour
    position relative
    width 100%
    overflow hidden
    background #f5f5f5
    .listfourbody
      width 100%
      .one
        width 100%
        overflow hidden
        background #fff
        .background
          position absolute
          width 100%
          background-image url("../../../../static/img-buy/listthree/9.9-background.d4afbba.png")
          height 23vh
          border-radius 0 0 4vh 4vh
        .wrapper
          position relative
          width 100%
          overflow hidden
          .header
            width 100%
            height .5rem
            margin-top .35rem
            padding-bottom .2rem
            text-align center
            font-size .4rem
            color white
            font-weight bold
          .swippeer
            width 98%
            overflow-x scroll
            white-space nowrap
            margin-top .2rem
            margin-bottom .2rem
            padding-left 1vh
            .wrapper
              position relative
              display inline-block
              height 24vh
              width 28%
              border-radius .15rem
              margin 0 .1rem
              background #fff
              box-shadow: 0 0.03rem 0.12rem #d7d7d7
              .swiper-img
                width 100%
                height 16vh
              .Goodsname
                height 2vh
                font-size 2vh
                margin-top 2vh
                text-align center
                overflow:hidden;
                text-overflow:ellipsis;
                width 90%
                margin-left .1rem
                white-space nowrap
              .Goodsprice
                height 2vh
                margin-top 1vh
                font-size 2vh
                color red
                text-align center
</style>
