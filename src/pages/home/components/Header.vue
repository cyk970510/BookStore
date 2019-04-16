<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe604;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入您要找的东西
    </div>
    <router-link to= '/classify'>
      <div class="header-right" @click="trunToClassify">
        <span class="iconfont arrow-icon">&#xe61b;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  methods: {
    trunToClassify () {
      this.$store.commit('changeid', '2')
    }
  }
}
</script>

<style  lang="stylus"  scoped>
  //1rem= html font-size = 50px
  //86/100
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        display block
        text-align center
        text-align: center
        font-size: .5rem
        margin-left .1rem
        margin-top .1rem
        color red
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .22rem
      margin-left: .2rem
      padding-left: .2rem
      background: #e8ecf0
      border-radius: .1rem
      color: #b5bec5
    .header-right
      min-width: 1.04rem
      padding: 0.1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        display block
        text-align center
        margin-left: -.04rem
        font-size: .54rem
        color #7a8992
</style>
