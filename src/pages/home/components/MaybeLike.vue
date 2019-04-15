<template>
  <div class="Maybe">
    <div class="Maybetitle">
      <span class="iconfont title-icon">&#xe605;</span>
      <b>根据您的偏好猜您可能喜欢</b>
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
      <div class="bottom">您已经到达底部了！！</div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'homeMaybe',
  props: {
    maybeList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .Maybe
    position relative
    margin-top .5rem
    width 100%
    background #eff4fa
    .Maybetitle
      padding-bottom .3rem
      text-align center
      font-size .27rem
      .title-icon
        color red
    .MaybeContent
      position absolute
      overflow hidden
      width 100%
      float left
      background #eff4fa
      padding-bottom 1.7rem
      .Content-warpper
        position relative
        float left
        margin-left .1rem
        height 5.3rem
        width 48%
        background white
        margin-top .2rem
        .content-img
          width 100%
        .content-titel
          font-size .24rem
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          height .5rem
          margin-top .1rem
          margin-left .3rem
        .content-footer
          text-align left
          position relative
          margin-top .2rem
          margin-left .3rem
          font-size .23rem
          .dangdang
            border .01rem solid #f2303c
            color #f2303c
          .dangdangqiang
            background-color #f2303c
            color white
        .money-icon
          position absolute
          left 0
          margin-left .3rem
          margin-top .2rem
          color #f2303c
          font-size .24rem
          padding-bottom .1rem
          .money
            font-size .28rem
      .bottom
        position relative
        text-align center
        top .35rem
        font-size .25rem
</style>
