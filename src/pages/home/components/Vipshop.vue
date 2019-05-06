<template>
  <div class="weipinghui">
    <div class="header">
      <img class="header-img" src="http://img61.ddimg.cn/upload_img/00528/000/weipinhui.jpg" />
      <a class="header-titlle" href="##">
        每日10:00上新
        <span class="iconfont header-icon">&#xe68b;</span>
      </a>
    </div>
    <div class="content">
      <div class="content-warpper">
        <a href="##">
          <img class="warpper-img" src="http://img62.ddimg.cn/upload_img/00768/kaixueji/wuxian-3.26-1553492700.jpg" />
        </a>
      </div>
      <div class="content-warpper" v-for="item in vipshopList" :key="item.id">
        <a href="##">
          <span class="warpper-title">
            <b>{{item.title}}</b><br/>
            <i class="title-discount">{{item.disc}}</i>
          </span>
          <span class="warpper-img">
            <img class="img-w" :src="item.imgUrl" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeVipshop',
  props: {
    vipshopList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .weipinghui
    margin-top .1rem
    background #fff
    text-align center
    .header
      .header-img
        width 100%
    .header-titlle
      font-size .23rem
      color black
      .header-icon
        margin-top .1rem
        vertical-align: top
    .content
      position relative
      width 100%
      overflow hidden
      background #eff4fa
      .content-warpper
        position relative
        margin-left .02rem
        padding-top .2rem
        float left
        overflow hidden
        height 30vh
        width 33%
        background #fff
        .warpper-img
          width 100%
          .img-w
            width 100%
        .warpper-title
          display inline-block
          margin-top .1rem
          color black
          font-size .28rem
          .title-discount
            display inline-block
            color #9b39e2
            font-size .24rem
            margin-top .1rem

</style>
