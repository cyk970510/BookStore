<template>
  <div class="header border-bottom">
    <div class="header-top">
      <router-link to="/">
        <div class="header-left" @click="changeFooter('1')">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
      </router-link>
      <div class="header-input">
        书籍详情
      </div>
      <div class="header-right" @click="handleNav" v-show="!isfalse">
        <span class="iconfont arrow-icon">&#xe609;</span>
      </div>
      <div class="header-right" @click="handleNav" v-show="isfalse">
        <span class="iconfont error-icon">&#xe606;</span>
      </div>
    </div>
    <!--<transition name="custom-classes-transition"-->
    <!--enter-active-class="animated fadeIn"-->
    <!--leave-active-class="animated fadeOut">-->
    <div class="headerList" v-if="isfalse">
      <div class="middle">
        <div class="iconWrapper" v-for="item in headerList" :key="item.id" @click="changeFooter(item.id)">
          <router-link :to="item.path">
            <div class="iconImg">
              <img class="img" :src="item.imgUrl"  />
            </div>
            <span class="title">{{item.title}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <!--</transition>-->
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'DetailHeader',
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
    .headerList
      z-index 900
      position fixed
      top 5vh
      left 0
      width 100%
      height 95vh
      background rgba(0,0,0,0.5)
      .middle
        position absolute
        width 100%
        height 25vh
        top 0
        left 0
        background white
        border none
        .iconWrapper
          position relative
          float left
          width 20%
          height 25%
          padding 2vh 6.66%
          text-align center
          .iconImg
            position relative
            width 60%
            height 4.5vh
            margin 0 auto
            .img
              width 70%
          .title
            display inline-block
            margin-top 2.5vh
            font-size 2vh
</style>
