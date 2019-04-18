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
        // paginationType: 'progress',
        loop: true,
        autoplay: 4000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .warpper >>> .swiper-pagination-bullet
    width .1rem
    height .5rem
    display inline-block
    border-radius .1rem
    background #000
    margin-left .15rem
    -webkit-transform rotate(30deg)
  .warpper >>> .swiper-pagination-bullet-active
    background: #fff
  .warpper
    position relative
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 29.33%
    background: #fff
    .swiper-img
      width: 100%
    .swiper-pagination
      position absolute
      margin-left 2rem
</style>
