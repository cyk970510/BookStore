<template>
  <div class="header border-bottom">
    <div class="header-top">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
      </router-link>
      <div class="header-input">
        购物车
      </div>
      <div class="header-right" @click="handleNav" v-show="!isfalse">
        <span class="iconfont arrow-icon">&#xe751;</span>
      </div>
      <div class="header-right" @click="handleNav" v-show="isfalse">
        <span class="iconfont error-icon">&#xe606;</span>
      </div>
      <div :class="{headeractive: isfalse}"></div>
    </div>
    <!--<transition name="custom-classes-transition"-->
                <!--enter-active-class="animated fadeIn"-->
                <!--leave-active-class="animated fadeOut">-->
    <div class="footer" :class="{active: isfalse}">
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
    <!--</transition>-->
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'BuyHeader',
  props: {
    headerList: Array
  },
  data () {
    return {
      isfalse: false
    }
  },
  methods: {
    handleNav () {
      this.isfalse = !this.isfalse
    },
    changeFooter (id) {
      this.changeId(id)
      this.isfalse = false
    },
    ...mapMutations(['changeId'])
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
