<template>
  <div class="bottom">
    <div class="bottomregister">
      <a><span class="land" @click="GoToLand">登陆</span></a>
      <a><span class="register" @click="GotoRegister">注册</span></a>
      <a>
        <span class="Top" @click="totop">
          <span class="iconfont topicon">&#xe644;</span>
          <span class="toTop">Top</span>
        </span>
      </a>
    </div>
    <div class="bottominfo">
      <div class="info">
        <ul class="infonva">
          <li class="infoli">提建议</li>
          <li class="infoli">电脑版</li>
          <li class="infoli">帮助</li>
        </ul>
      </div>
      <div class="message">
        <p>Copyright ©2018 北京当当网信息技术有限公司</p>
        <p>北京市朝阳区北三环东路8号，100028</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'BuyBottom',
  methods: {
    totop () {
      var interval = setInterval(function () {
        if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
          document.body.scrollTop -= 30
          document.documentElement.scrollTop -= 30
        } else {
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
          clearInterval(interval)
        }
      })
    },
    GoToLand () {
      this.$router.push('/register')
      this.changeId('5')
    },
    GotoRegister () {
      this.$router.push('/register')
      this.hideLand()
      this.changeId('5')
    },
    ...mapMutations({
      changeId: 'changeId',
      hideLand: 'hideLand'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .bottom >>> a
    color #000
  .bottom
    position relative
    width 100%
    overflow hidden
    padding-bottom 1.2rem
    .bottomregister
      height .8rem
      width 100%
      border .01rem solid #eee
      .land
        display inline-block
        margin-left .3rem
        margin-top .3rem
        font-size .3rem
      .register
        margin-left .3rem
        font-size .3rem
      .Top
        display inline-block
        float right
        margin-right .4rem
        margin-top .3rem
        .topicon
          font-size .3rem
          color #777
        .totop
          font-size .24rem
          color #777
    .bottominfo
      height 2rem
      width 100%
      border .01rem solid #eee
      .info
        width 100%
        text-align center
        .infonva
          display inline-block
          margin 0 auto
          margin-top .4rem
          width 60%
          list-style none
          .infoli
            font-size .26rem
            width 33%
            float left
      .message
        display inline-block
        width 100%
        margin-top .35rem
        text-align center
        line-height .4rem
        font-size .24rem
</style>
