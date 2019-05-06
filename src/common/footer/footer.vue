<template>
  <div class="foot border-top">
    <div class="footer" @click="showId('1')">
      <router-link class="footer-1" to="/">
        <div class="footerbox" :class="{footerboxchange: this.footerID === '1'}">
          <span class="iconfont footer-icon">&#xe608;</span><br/>
          <span class="footer-title">首页</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('2')">
      <router-link class="footer-1" to="/classify">
        <div class="footerbox" :class="{footerboxchange: this.footerID === '2'}">
          <span class="iconfont footer-icon">&#xe609;</span><br/>
          <span class="footer-title">分类</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('3')">
      <router-link class="footer-1" to="/buy">
        <div class="footerbox" :class="{footerboxchange: this.footerID === '3'}">
          <span class="iconfont footer-icon">&#xe635;</span><br/>
          <span class="footer-title">值得买</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('4')">
      <router-link class="footer-1" to="/car">
        <div class="footerbox" :class="{footerboxchange: this.footerID === '4'}">
          <span class="iconfont footer-icon">&#xe607;</span><br/>
          <span class="footer-title">购物车</span>
        </div>
      </router-link>
    </div>
    <div class="footer" @click="showId('5')">
      <router-link class="footer-1" to="/my">
        <div class="footerbox" :class="{footerboxchange: this.footerID === '5'}">
          <span class="iconfont footer-icon">&#xe60f;</span><br/>
          <span class="footer-title">我的当当</span>
        </div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonFooter',
  data () {
    return {
      myid: ''
    }
  },
  methods: {
    showId (id) {
      this.changeId(id)
    },
    ...mapMutations(['changeId'])
  },
  computed: {
    // 映射 store中的公共属性 footerID
    // 然后可以直接 写 this.footerID
    // 而不用写 this.store.state.footerID
    ...mapState(['footerID'])
  }
}
</script>

<style lang="stylus" scoped>
  .foot
    z-index 700
    position fixed
    bottom 0
    left 0
    width 100%
    height 8%
    background #fff
    display flex
    align-items center
    justify-content center
    .footer
      position relative
      float left
      width 20%
      text-align center
      .footerbox
        color RGB(122,126,134)
        .footer-icon
          display inline-block
          padding .15rem 0
          font-size 2vh
        .footer-title
          font-size .24rem
          width 100%
          padding-bottom .1rem
      .footerboxchange
        color red
</style>
