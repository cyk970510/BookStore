<template>
<div class="wrapper">
  <div class="Pingpai-header">
    <img class="header-img" src="static/img/img-pingpaijie/biaoti-101-1523330132.jpg" />
  </div>
  <div class="Pingpai-swipper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="swipper-img" v-for="item of page" :key="item.id">
          <div class="imgs">
            <img class="img" :src="item.imgUrl" />
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
export default {
  name: 'homeBrand',
  props: {
    brandList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.brandList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .Pingpai-swipper >>> .swiper-pagination-bullet-active
    background: #fff
  .Pingpai-swipper >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .Pingpai-swipper >>> .swiper-pagination-bullet-active
    background: red
  .wrapper
    height 4rem
    margin-top .1rem
    .Pingpai-header
      .header-img
        width 100%
    .Pingpai-swipper
      touch-action: none
      background #fff
      .swipper-img
        position: relative
        overflow: hidden
        float: left
        height: 0
        width: 20%
        padding-bottom: 20%
        .imgs
          position absolute
          top: 0
          right: 0
          left: 0
          box-sizing: border-box
          .img
            display: block
            margin: 0 auto
            height: 100%
            width 100%
</style>
