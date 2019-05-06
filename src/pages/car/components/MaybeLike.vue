<template>
  <div class="Maybe">
    <div class="Maybetitle">
      <span class="iconfont title-icon">&#xe605;</span>
      <b>根据购物车中的商品为您推荐</b>
    </div>
    <div class="MaybeContent">
      <div class="Content-warpper" v-for="item of maybeList" :key="item.id">
        <img class="content-img" :src="item.imgUrl" />
        <span class="content-titel">{{item.title}}</span>
        <p class="content-footer">
          <span class="dangdang">当当自营</span>
          <span class="dangdangqiang">{{item.qiang}}</span>
          <span class="dangdangqiang">{{item.baoyou}}</span>
        </p>
        <span class="money-icon">¥<span class="money">{{item.price}}</span></span>
      </div>
      <div class="bottomTitle">您已经到达底部了！！</div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CarMaybe',
  props: {
    maybeList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .Maybe
    position relative
    padding-top 3vh
    width 100%
    background #eff4fa
    .Maybetitle
      padding-bottom .3rem
      text-align center
      font-size .27rem
      .title-icon
        color red
    .MaybeContent
      position relative
      overflow hidden
      width 100%
      float left
      background #eff4fa
      padding-bottom 18vh
      .Content-warpper
        position relative
        float left
        margin-left 0.5%
        width 49%
        background white
        margin-top .2rem
        overflow hidden
        padding-bottom .2rem
        .content-img
          width 100%
        .content-titel
          font-size .24rem
          overflow: hidden
          -webkit-line-clamp: 2
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-box-orient: vertical
          height .5rem
          margin-top .1rem
          margin-left .3rem
          margin-bottom .1rem
        .content-footer
          position relative
          overflow hidden
          text-align left
          margin-top .2rem
          margin-left .3rem
          margin-bottom .2rem
          font-size .23rem
          .dangdang
            border .02rem solid #f2303c
            color #f2303c
            margin-right .1rem
          .dangdangqiang
            background-color #f2303c
            color white
            margin-right .1rem
        .money-icon
          position relative
          margin-left .3rem
          color #f2303c
          font-size .24rem
          margin-bottom .3rem
          .money
            font-size .28rem
      .bottomTitle
        position relative
        text-align center
        top 2vh
        font-size .25rem
</style>
