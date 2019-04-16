<template>
  <div class="foot border-top">
    <div class="footer" @click="showId('1')">
      <router-link class="footer-1" to="/">
        <div class="footerbox" :class="{footerboxchange: getId === '1'}">
          <span class="iconfont footer-icon">&#xe608;</span><br/>
          <span class="footer-title">首页</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('2')">
      <router-link class="footer-1" to="/classify">
        <div class="footerbox" :class="{footerboxchange: getId === '2'}">
          <span class="iconfont footer-icon">&#xe609;</span><br/>
          <span class="footer-title">分类</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('3')">
      <router-link class="footer-1" to="/buy">
        <div class="footerbox" :class="{footerboxchange: getId === '3'}">
          <span class="iconfont footer-icon">&#xe635;</span><br/>
          <span class="footer-title">值得买</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('4')">
      <router-link class="footer-1" to="/car">
        <div class="footerbox" :class="{footerboxchange: getId === '4'}">
          <span class="iconfont footer-icon">&#xe607;</span><br/>
          <span class="footer-title">购物车</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('5')">
      <router-link class="footer-1" to="/my">
        <div class="footerbox" :class="{footerboxchange: getId === '5'}">
          <span class="iconfont footer-icon">&#xe60f;</span><br/>
          <span class="footer-title">我的当当</span>
        </div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      myid: ''
    }
  },
  methods: {
    showId (id) {
      this.$store.commit('changeid', id)
    }
  },
  computed: {
    getId () {
      return this.$store.state.footerID
    }
  }
}
</script>

<style lang="stylus" scoped>
  .foot
    position fixed
    bottom 0
    left 0
    width 100%
    background #fff
    .footer
      position relative
      float left
      margin-left .3rem
      padding .1rem .1rem
      width 13%
      text-align center
      .footerbox
        color RGB(122,126,134)
        .footer-icon
          display inline-block
          margin 0 auto
          padding .15rem 0
          font-size .4rem
        .footer-title
          font-size .24rem
          width 100%
          padding-bottom .1rem
      .footerboxchange
        color red
</style>
