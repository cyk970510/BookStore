<template>
  <div class="header">
    <div class="header-top">
      <router-link to="/">
        <div class="header-left" @click="changeFooter('1')">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
      </router-link>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        搜索书籍/店铺/种类
      </div>
        <div class="header-right" @click="handleNav" v-show="!isfalse">
          <span class="iconfont arrow-icon">&#xe751;</span>
        </div>
        <div class="header-right" @click="handleNav" v-show="isfalse">
          <span class="iconfont error-icon">&#xe606;</span>
        </div>
      <div :class="{headerActive: isfalse}"></div>
    </div>
    <!--顶部隐藏的导航栏-->
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
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'ClassifyHeader',
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
      background: #fff
      color: #fff
      .header-left
        width: 10%
        height 5vh
        float: left
        display flex
        align-items center
        justify-content center
        .back-icon
          display block
          text-align center
          font-size: .4rem
          color gray
          transition: background .3s;
      .header-input
        width 75%
        height: 4.5vh
        line-height: 4.5vh
        margin-top 1vh
        margin-left 11%
        margin-bottom 1vh
        padding-left: .2rem
        background: #e8ecf0
        border-radius: .1rem
        color: #b5bec5
      .header-right
        position absolute
        width 10%
        height 5vh
        top 0
        right 1vh
        display flex
        align-items center
        justify-content center
        color: #fff
        .arrow-icon
          font-size: .54rem
          color #7a8992
        .error-icon
          display block
          text-align center
          margin-left: -.04rem
          color red
          font-size .5rem
      .headerActive
        position absolute
        display block
        content " "
        right 4.5%
        bottom -1vh
        width .4rem
        height .2rem
        background: url(../../../../static/img/bottom-icon/connector.png) no-repeat center 0;
    .footer
      display block
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
