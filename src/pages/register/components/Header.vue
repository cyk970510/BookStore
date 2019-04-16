<template>
  <div class="header border-bottom">
    <div class="header-top">
      <!--登录时上面的返回符号，返回my页面-->
      <router-link to="/my" v-if="headerIsLandOrRegister">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
      </router-link>
      <!--注册时上面的返回符号，返回登录-->
      <div class="header-left" v-if="!headerIsLandOrRegister" @click="GoBackLand">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <!--头部显示信息 是登录还是注册-->
      <div class="header-input" v-if="headerIsLandOrRegister">登陆</div>
      <div class="header-input" v-if="!headerIsLandOrRegister">注册</div>
      <div class="header-right" @click="handleNav" v-show="!isfalse">
        <span class="iconfont arrow-icon">&#xe751;</span>
      </div>
      <div class="header-right" @click="handleNav" v-show="isfalse">
        <span class="iconfont error-icon">&#xe606;</span>
      </div>
    </div>
    <!--<transition name="custom-classes-transition"-->
                <!--enter-active-class="animated fadeIn"-->
                <!--leave-active-class="animated fadeOut">-->
      <div class="footer" v-show="isfalse">
        <a class="footte-1" v-for="item of headerList" :key="item.id" href="##">
          <img class="img-1" :src="item.imgUrl" />
        </a>
      </div>
    <!--</transition>-->
  </div>
</template>

<script>
export default {
  name: 'RegisterHeader',
  props: {
    headerList: Array,
    // 是显示注册还是登录
    HeaderIsLandOrRegister: Boolean
  },
  data () {
    return {
      // 控制头部下拉栏
      isfalse: false,
      // 是显示注册还是登录
      headerIsLandOrRegister: true
    }
  },
  methods: {
    handleNav () {
      this.isfalse = !this.isfalse
    },
    // 返回登录页面，触发GoBackToLand
    GoBackLand () {
      this.$emit('GoBackToLand')
    }
  },
  watch: {
    // 监听HeaderIsLandOrRegister，将headerIsLandOrRegister 置反
    HeaderIsLandOrRegister () {
      this.headerIsLandOrRegister = !this.headerIsLandOrRegister
    }
  }
}
</script>

<style  lang="stylus"  scoped>
  //1rem= html font-size = 50px
  //86/100
  @import '~styles/varibles.styl'
  .header
    position relative
    width 100%
    .header-top
      display: flex
      line-height: $headerHeight
      background: #fff
      color: #fff
      .header-left
        width: .64rem
        float: left
        .back-icon
          display block
          text-align center
          text-align: center
          font-size: .4rem
          margin-left .1rem
          margin-top .1rem
          color gray
          transition: background .3s;
      .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-top: .22rem
        margin-left: .2rem
        color: #333
        text-align center
        font-size .3rem
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
        .error-icon
          color red
          font-size .5rem
    .footer
      width 100%
      background-color #eee
      padding .15rem 0
      .footte-1
        font-size .3rem
        .img-1
          margin-left .3rem
          padding 0 .2rem
          width 10%
          color #4d525d
</style>
