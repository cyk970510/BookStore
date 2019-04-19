<template>
  <section class="body">
    <!--登陆模块-->
    <section class="land">
      <!--登陆-->
      <section class="landform" v-if="this.showLand">
        <form>
          <div class="registerID">
            <span class="iconfont IDicon">&#xe60f;</span>
            <span>
              <input class="IDinput" type="text" placeholder="手机号" v-model="LandID" v-on:input="watchID" />
            </span>
            <span v-if="isResetId" class="iconfont errorone" @click="clearID">&#xe9a2;</span>
          </div>
          <div class="registerPassword">
            <span class="iconfont passwordIcon">&#xe60e;</span>
            <span>
              <input class="passwordInput" type="password" placeholder="密码" v-model="password" v-on:input="watchID" />
            </span>
            <span v-if="isReaetPasw" class="iconfont errortwo" @click="clearPasw">&#xe9a2;</span>
            <span v-if="isLook" @click="changeLook" class="iconfont lookIcon">&#xe76a;</span>
            <span v-if="!isLook" @click="changeLook" class="iconfont UnlookIcon">&#xe685;</span>
          </div>
        </form>
      </section>
      <!--注册-->
      <section class="registerform" v-if="!this.showLand">
        <form>
          <div class="registerID">
            <span class="iconfont IDicon">&#xe60f;</span>
            <span>
              <input class="IDinput" type="text" placeholder="手机号" v-model="LandID" v-on:input="watchID" />
            </span>
            <span v-if="isResetId" class="iconfont errorone" @click="clearID">&#xe9a2;</span>
          </div>
          <div class="registerPassword">
            <span class="iconfont passwordIcon">&#xe60e;</span>
            <span>
              <input class="passwordInput" type="password" placeholder="密码" v-model="password" v-on:input="watchID" />
            </span>
            <span v-if="isReaetPasw" class="iconfont errortwo" @click="clearPasw">&#xe9a2;</span>
            <span v-if="isLook" @click="changeLook" class="iconfont lookIcon">&#xe76a;</span>
            <span v-if="!isLook" @click="changeLook" class="iconfont UnlookIcon">&#xe685;</span>
          </div>
          <div class="againPassword">
            <span class="iconfont passwordIcon">&#xe60e;</span>
            <span>
              <input class="againPasswordInput" type="password" placeholder="再次输入密码" v-model="passwordAgain" v-on:input="watchID" />
            </span>
            <span v-if="isResetPaswAgain" class="iconfont errortwo" @click="clearPaswAgain">&#xe9a2;</span>
            <span v-if="isLookAgain" @click="changeLookAgain" class="iconfont lookIcon">&#xe76a;</span>
            <span v-if="!isLookAgain" @click="changeLookAgain" class="iconfont UnlookIcon">&#xe685;</span>
          </div>
        </form>
      </section>
      <!--登陆按钮-->
      <section class="landBtn" @click="ToLand" v-if="this.showLand">
        <button class="Btn" type="button">登陆</button>
      </section>
      <section class="registerBtn" @click="ToRegister" v-if="!this.showLand">
        <button class="Btn" type="button">注册</button>
      </section>
      <!--找回密码模块-->
      <section class="findPassword" v-if="this.showLand">
        <span class="findpassword">
          <span class="find">找回密码</span>
          <span class="register" @click="TurnToRegister">
            <span class="title">注册</span>
            <span class="iconfont icon">&#xe603;</span>
          </span>
        </span>
      </section>
      <!--注册条款-->
      <section class="registerLow" v-if="!this.showLand">
        <span class="title">注册即表示您同意
          <a href="https://mpassport.dangdang.com/trade.php?t=1555381915" target="_blank">《当当交易条款》</a>
          和
          <a href="https://mpassport.dangdang.com/community.php?t=1555381915" target="_blank">《当当社区条款》</a>
        </span>
      </section>
    </section>
    <!--提示模块-->
    <section class="tips" v-if="this.showLand">
      <span class="tip">
        <span>为保障账户安全，请您不要设置与邮箱密码相同的账户登录密码或支付密码，</span>
        <span class="careful"><a href="##">谨防诈骗!</a></span>
      </span>
    </section>
    <!--第三方登陆-->
    <section class="third" v-if="this.showLand">
      <span class="title">第三方账号登陆</span>
      <section class="content">
        <section class="one">
          <span class="iconfont QQicon">&#xe60d;</span><br/>
          <span class="iconname">腾讯QQ</span>
        </section>
        <section class="one">
          <span class="iconfont ZFBicon">&#xe61c;</span><br/>
          <span class="iconname">支付宝</span>
        </section>
        <section class="one">
          <span class="iconfont WBicon">&#xe620;</span><br/>
          <span class="iconname">新浪微博</span>
        </section>
      </section>
    </section>
    <!--底部模块-->
    <footer class="foot">
      <ul>
        <li>
          <span class="iconfont icon">&#xe605;</span>
          <span class="title">7天无理由退货</span>
        </li>
        <li>
          <span class="iconfont icon">&#xe605;</span>
          <span class="title">支持货到付款</span>
        </li>
        <li>
          <span class="iconfont icon">&#xe605;</span>
          <span class="title">100%正品</span>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'RegisterBody',
  data () {
    return {
      // 控制 密码 的显示方式
      isLook: false,
      // 控制 再次输入密码 的显示方式
      isLookAgain: false,
      // 是否显示 账号 输入框后面的×
      isResetId: false,
      // 是否显示 密码 输入框后面的×
      isReaetPasw: false,
      // 是否显示 再次输入密码 输入框后面的×
      isResetPaswAgain: false,
      // 双向数据绑定--账号
      LandID: '',
      // 双向数据绑定--密码
      password: '',
      // 双向数据绑定--再次输入密码
      passwordAgain: ''
    }
  },
  methods: {
    // 改变密码的显示方式
    changeLook () {
      var b = document.getElementsByClassName('passwordInput')[0]
      this.isLook = !this.isLook
      if (this.isLook) {
        b.type = 'text'
      } else {
        b.type = 'password'
      }
    },
    changeLookAgain () {
      var b = document.getElementsByClassName('againPasswordInput')[0]
      this.isLookAgain = !this.isLookAgain
      if (this.isLookAgain) {
        b.type = 'text'
      } else {
        b.type = 'password'
      }
    },
    // 监听输入框显示×
    watchID () {
      // 如果账号输入框不为空，就显示×
      if (this.LandID !== '') {
        this.isResetId = true
      } else {
        this.isResetId = false
      }
      // 如果密码输入框不为空，就显示×
      if (this.password !== '') {
        this.isReaetPasw = true
      } else {
        this.isReaetPasw = false
      }
      // 如果再次输入密码输入框不为空，就显示×
      if (this.passwordAgain !== '') {
        this.isResetPaswAgain = true
      } else {
        this.isResetPaswAgain = false
      }
    },
    // 清除账号的输入框，隐藏×
    clearID () {
      this.LandID = ''
      this.isResetId = false
    },
    // 清除密码的输入框，隐藏×
    clearPasw () {
      this.password = ''
      this.isReaetPasw = false
    },
    // 清除再次输入密码的输入框，隐藏×
    clearPaswAgain () {
      this.passwordAgain = ''
      this.isResetPaswAgain = false
    },
    // 登陆，触发TocommitLand，传过去账号密码
    ToLand () {
      this.$emit('TocommitLand', this.LandID, this.password)
    },
    // 注册按钮，触发ToRegister，传过去账号，密码，再次输入密码
    ToRegister () {
      this.$emit('ToRegister', this.LandID, this.password, this.passwordAgain)
    },
    // 跳转到注册页面，触发TurnToRegister
    TurnToRegister () {
      this.$emit('TurnToRegister')
      this.hideLand()
      this.LandID = ''
      this.password = ''
      this.passwordAgain = ''
      this.isResetId = false
      this.isReaetPasw = false
      this.isResetPaswAgain = false
      this.isLook = false
      this.isLookAgain = false
    },
    ...mapMutations(['hideLand'])
  },
  watch: {
    // 注册完
    // 监听父层传来的registerOrLand
    // 来改变自己的变量RegisterOrLand
    // 从而改变显示 登录 或者 注册
    // 并且讲输入框置空，后面的显示×也隐藏
    showLand () {
      this.LandID = ''
      this.password = ''
      this.passwordAgain = ''
      this.isResetId = false
      this.isReaetPasw = false
      this.isResetPaswAgain = false
      this.isLook = false
      this.isLookAgain = false
    }
  },
  computed: {
    ...mapState({
      showLand: 'showLand',
      showRegister: 'showRegister'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .body
    width 100%
    overflow hidden
    .land
      width 100%
      overflow hidden
      .landform
        width 100%
        overflow hidden
        .registerID
          position relative
          top .5rem
          margin 0 auto
          width 88%
          height 1rem
          background #fafafa
          .IDicon
            display inline-block
            margin-top .35rem
            margin-left .3rem
            font-size .3rem
            color #cacaca
          .IDinput
            display inline-block
            margin-left .2rem
            width 60%
            padding 0 .3rem 0 0
            height .5rem
            background #fafafa
          .errorone
            position absolute
            margin-top .3rem
            margin-left .6rem
            font-size .45rem
            color #cacaca
        .registerPassword
          position relative
          width 88%
          height 1rem
          margin 0 auto
          margin-top 1rem
          background #fafafa
          .passwordIcon
            display inline-block
            margin-top .35rem
            margin-left .3rem
            font-size .3rem
            color #cacaca
          .passwordInput
            display inline-block
            margin-left .2rem
            width 60%
            padding 0 .3rem 0 0
            height .5rem
            background #fafafa
          .errortwo
            position absolute
            margin-top .3rem
            margin-left .05rem
            font-size .45rem
            color #cacaca
          .lookIcon
            position absolute
            top .3rem
            margin-left .65rem
            font-size .4rem
            color #cacaca
          .UnlookIcon
            position absolute
            top .37rem
            margin-left .65rem
            font-size .3rem
            color #cacaca
      .registerform
        width 100%
        overflow hidden
        .registerID
          position relative
          top .5rem
          margin 0 auto
          width 88%
          height 1rem
          background #fafafa
          .IDicon
            display inline-block
            margin-top .35rem
            margin-left .3rem
            font-size .3rem
            color #cacaca
          .IDinput
            display inline-block
            margin-left .2rem
            width 60%
            padding 0 .3rem 0 0
            height .5rem
            background #fafafa
          .errorone
            position absolute
            margin-top .3rem
            margin-left .6rem
            font-size .45rem
            color #cacaca
        .registerPassword
          position relative
          width 88%
          height 1rem
          margin 0 auto
          margin-top 1rem
          background #fafafa
          .passwordIcon
            display inline-block
            margin-top .35rem
            margin-left .3rem
            font-size .3rem
            color #cacaca
          .passwordInput
            display inline-block
            margin-left .2rem
            width 60%
            padding 0 .3rem 0 0
            height .5rem
            background #fafafa
          .errortwo
            position absolute
            margin-top .3rem
            margin-left .05rem
            font-size .45rem
            color #cacaca
          .lookIcon
            position absolute
            top .3rem
            margin-left .65rem
            font-size .4rem
            color #cacaca
          .UnlookIcon
            position absolute
            top .37rem
            margin-left .65rem
            font-size .3rem
            color #cacaca
        .againPassword
          position relative
          width 88%
          height 1rem
          margin 0 auto
          margin-top .5rem
          background #fafafa
          .passwordIcon
            display inline-block
            margin-top .35rem
            margin-left .3rem
            font-size .3rem
            color #cacaca
          .againPasswordInput
            display inline-block
            margin-left .2rem
            width 60%
            padding 0 .3rem 0 0
            height .5rem
            background #fafafa
          .errortwo
            position absolute
            margin-top .3rem
            margin-left .05rem
            font-size .45rem
            color #cacaca
          .lookIcon
            position absolute
            top .3rem
            margin-left .65rem
            font-size .4rem
            color #cacaca
          .UnlookIcon
            position absolute
            top .37rem
            margin-left .65rem
            font-size .3rem
            color #cacaca
      .landBtn
        width 100%
        margin-top .5rem
        text-align center
        .Btn
          display inline-block
          margin 0 auto
          width 88%
          height .8rem
          background #ff463c
          color white
          font-size .35rem
          font-weight bold
          border-radius .1rem
      .registerBtn
        width 100%
        margin-top .5rem
        text-align center
        .Btn
          display inline-block
          margin 0 auto
          width 88%
          height .8rem
          background #ff463c
          color white
          font-size .35rem
          font-weight bold
          border-radius .1rem
      .findPassword
        width 100%
        margin-top .3rem
        text-align center
        .findpassword
          display inline-block
          width 88%
          height .5rem
          .find
            float left
            font-size .24rem
            color black
          .register
            float right
            font-size .24rem
            margin-left .2rem
            .icon
              font-size .24rem
      .registerLow
        width 100%
        margin-top .3rem
        text-align center
        .title
          display inline-block
          width 88%
          height .5rem
          font-size .24rem
        .title >>> a
          color #f40
    .tips
      width 100%
      overflow hidden
      margin-top .5rem
      .tip
        display block
        margin 0 auto
        width 88%
        font-size .24rem
        color gray
        line-height .3rem
        .careful >>> a
          color red
          text-decoration underline
    .third
      width 100%
      margin-top .8rem
      overflow hidden
      .title
        display block
        width 100%
        text-align center
        font-size .24rem
        color gray
      .content
        width 80%
        padding 0 10%
        overflow hidden
        margin-top .8rem
        .one
          float left
          margin-left .5rem
          padding 0 .1rem
          width 20%
          text-align center
          .QQicon
            display inline-block
            margin-top .1rem
            font-size .7rem
            color RGB(76,175,233)
          .ZFBicon
            display inline-block
            margin-top .1rem
            font-size .7rem
            color RGB(255,183,99)
          .WBicon
            display inline-block
            margin-top .1rem
            font-size .7rem
            color RGB(221,71,68)
          .iconname
            font-size .24rem
            display inline-block
            margin-top .2rem
    .foot
      width 100%
      overflow hidden
      margin-top 1rem
      padding-bottom 1.75rem
      ul
        width 80%
        margin 0 auto
        li
          float left
          margin-left .2rem
          font-size .24rem
          .icon
            color red
            font-size .24rem
</style>
