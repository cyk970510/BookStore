<template>
  <div class="warpper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" >
      </swiper-slide>
      <!--定义播图下面的白点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', //  定义播图下面的白点
        loop: true,
        autoplay: 4000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .warpper >>> .swiper-pagination-bullet-active
    background: #fff
  .warpper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 29.33%
    background: #fff
    .swiper-img
      width: 100%
    .swiper-pagination,
    .swiper-pagination-bullets
      position absolute
      bottom 0
</style>
