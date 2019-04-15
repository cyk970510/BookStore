<template>
  <div class="weipinghui">
    <div class="header">
      <img class="header-img" src="static/img/img-libraryCity/tslc-bt.jpg" />
      <a class="header-titlle" href="##">
        当当书城
        <span class="iconfont header-icon">&#xe68b;</span>
      </a>
      <a class="header-titlle" href="##">
        电子书
        <span class="iconfont header-icon">&#xe68b;</span>
      </a>
      <a class="header-titlle" href="##">
        网络文学
        <span class="iconfont header-icon">&#xe68b;</span>
      </a>
    </div>
    <div class="content">
      <div class="content-warpper" v-for="item in libraryStoreList" :key="item.id">
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
  name: 'homeLibraryStore',
  props: {
    libraryStoreList: Array
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
      margin-left .1rem
      .header-icon
        margin-top .1rem
        vertical-align: top
    .content
      position relative
      width 100%
      overflow hidden
      background #eff4fa
      .content-warpper
        margin-left .02rem
        padding-top .2rem
        float left
        position relative
        height 3.2rem
        width 33%
        background #fff
        .warpper-img
          width 100%
          height 100%
          .img-w
            width 100%
        .warpper-title
          display inline-block
          margin-top .1rem
          color black
          font-size .28rem
          .title-discount
            display inline-block
            color #ef2933
            font-size .24rem
            margin-top .1rem

</style>
