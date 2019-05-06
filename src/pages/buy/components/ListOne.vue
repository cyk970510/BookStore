<template>
  <div class="listone">
    <div class="wrapper border" v-for="item of Listone" :key="item.id">
      <a href="##">
        <img class="wrapper-img" :src="item.imgUrl"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyListone',
  props: {
    Listone: Array
  }
}
</script>

<style lang="stylus" scoped>
  .listone
    position relative
    width 100%
    overflow hidden
    background #fff
    .wrapper
      position relative
      width 20%
      height 13vh
      overflow hidden
      float left
      .wrapper-img
        width 100%
        height 100%
</style>
