<template>
  <div class="header border-bottom">
    <div class="header-top">
      <!--登录时上面的返回符号，返回my页面-->
      <router-link to="/my" v-if="this.showLand">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
      </router-link>
      <!--注册时上面的返回符号，返回登录-->
      <div class="header-left" v-if="!this.showLand" @click="GoBackLand">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <!--头部显示信息 是登录还是注册-->
      <div class="header-input" v-if="this.showLand">登陆</div>
      <div class="header-input" v-if="!this.showLand">注册</div>
      <div class="header-right" @click="handleNav" v-if="!isFalse">
        <span class="iconfont arrow-icon">&#xe751;</span>
      </div>
      <div class="header-right" @click="handleNav" v-if="isFalse">
        <span class="iconfont error-icon">&#xe606;</span>
      </div>
      <div :class="{headerActive: isFalse}"></div>
    </div>
    <!--顶部隐藏的导航栏-->
    <div class="footer" :class="{active: isFalse}">
      <div class="middle">
        <router-link class="footte-1"
                     v-for="item of headerList"
                     :key="item.id"
                     :to="item.path"
        >
          <img class="img-1" :src="item.imgUrl" @click="changeFooter(item.id)" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'RegisterHeader',
  props: {
    headerList: Array
  },
  data () {
    return {
      // 控制头部下拉栏
      isFalse: false
    }
  },
  methods: {
    handleNav () {
      this.isFalse = !this.isFalse
    },
    // 返回登录页面，触发GoBackToLand
    GoBackLand () {
      this.ShowLand()
    },
    changeFooter (id) {
      this.changeId(id)
      this.isFalse = false
    },
    ...mapMutations({
      changeId: 'changeId',
      ShowLand: 'ShowLand'
    })
  },
  computed: {
    ...mapState({
      showLand: 'showLand'
    })
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
      position relative
      line-height: 5.5vh
      background: #fff
      color: #fff
      .header-left
        float: left
        margin-left 1vh
        .back-icon
          font-size: 2vh
          color gray
          transition: background .3s;
      .header-input
        height: 5vh
        color: #333
        text-align center
        font-size 2vh
        margin-right 4vh
      .header-right
        position absolute
        top 0
        right 2vh
        color: #fff
        .arrow-icon
          display block
          text-align center
          font-size: 3vh
          color #7a8992
        .error-icon
          color red
          font-size 3vh
      .headeractive
        position absolute
        display block
        content " "
        right 2vh
        bottom -.05rem
        width .4rem
        height .2rem
        background: url(../../../../static/img/bottom-icon/connector.png) no-repeat center 0;
    .footer
      z-index 1
      width 100%
      background-color #eee
      overflow hidden
      height 0
      transition height .3s
      -webkit-transition height .3s
      .middle
        padding .13rem 0
        .footte-1
          margin-top 0.1rem
          font-size 2vh
          .img-1
            padding 0 5%
            width 10%
            color #4d525d
    .active
      height 8vh
</style>
