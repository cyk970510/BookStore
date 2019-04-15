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
    .wrapper
      position relative
      width 20%
      float left
      padding .1rem 0
      height auto
      overflow hidden
      .wrapper-img
        position relative
        height 1.5rem
        width 100%
</style>
