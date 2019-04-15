<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeList',
  props: {
    listList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  // 计算一共有多少轮页面
  // 超过10个的时候，自动增加多一页
  computed: {
    pages () {
      const pages = []
      this.listList.forEach((item, index) => {
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
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-pagination-bullet-active
    background: #fff
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    touch-action: none
    padding-top: .1rem
    background #fff
    .icon
      position: relative
      overflow: hidden
      float: left
      height: 0
      width: 20%
      padding-bottom: 25%
      .icon-img
        position absolute
        top: 0
        right: 0
        left: 0
        bottom: .4rem
        box-sizing: border-box
        padding: .05rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
          width 100%
          ellipse()
  </style>
