<template>
  <div class="register">
    <!--HeaderIsLandOrRegister： 传过去是显示 登录 还是 注册-->
    <!--GoBackToLand： 头部处于注册页面时，上面的符号返回登录页面-->
    <register-header :headerList="headerList"
                     :HeaderIsLandOrRegister="HeaderIsLandOrRegister"
                     @GoBackToLand="GoBackToLand"
    ></register-header>
    <!--TocommitLand： 触发commitLand函数，接收账号密码的数据，来判断是否可以正常登录-->
    <!--ToRegister： 触发ToRegister函数，接收账号密码和再次输入密码的数据，来判断是否可以正常注册-->
    <!--TurnToRegister： 触发TurnToRegister，转向注册页面-->
    <!--registerOrLand： 传过去registerOrLand，用于控制显示登录或注册页面-->
    <register-body @TocommitLand="commitLand"
                   @ToRegister="ToRegister"
                   @TurnToRegister="TurnToRegister"
                   :registerOrLand="registerOrLand"
    ></register-body>
    <!--弹窗-->
    <!--isTrue： 用于控制是否登录成功然后跳转my的页面-->
    <!--isTan： 用于控制是否显示弹窗-->
    <!--message： 用于动态显示弹窗的内容-->
    <!--GotoLand： 触发GotoLand函数，注册成功，跳转登录页面-->
    <!--isTrueRegister： 用于控制注册时 下面的按钮是 确定 还是 前往登陆-->
    <register-tan :isTrue="isTrue"
                  :isTan="isTan"
                  :message="message"
                  @changeisTan="changeisTan"
                  @GotoLand="GotoLand"
                  :isTrueRegister="isTrueRegister"
    ></register-tan>
  </div>
</template>

<script>
import axios from 'axios'
import RegisterHeader from './components/Header'
import RegisterBody from './components/body'
import RegisterTan from './components/Tan'
import {mapMutations} from 'vuex'
export default {
  name: 'register',
  components: {RegisterTan, RegisterBody, RegisterHeader},
  data () {
    return {
      // 头部下拉存储数据
      headerList: [],
      // 登陆信息存储数据
      registerList: [],
      // 用于控制是否登录成功然后跳转my的页面
      isTrue: false,
      // 用于控制是否显示弹窗
      isTan: false,
      // 用于动态显示弹窗的内容
      message: '',
      // 用于控制显示登录或注册页面
      registerOrLand: true,
      // 用于控制注册时 下面的按钮是 确定 还是 前往登陆
      isTrueRegister: false,
      // 传过去时，头部显示 登录 还是 注册
      HeaderIsLandOrRegister: true
    }
  },
  methods: {
    // 取得头部的json文件
    getHeaderInfo () {
      axios.get('/api/publicheader.json')
        .then(this.getHeaderInfoSucc)
    },
    getHeaderInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.headerList = data.headerList
      }
    },
    // 取得用户登录的json文件
    getRegisterInfo () {
      axios.get('/api/register.json')
        .then(this.getRegisterInfoSucc)
    },
    getRegisterInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.registerList = data.registerList
      }
    },
    // 判断是否可以正确登录
    commitLand (LandID, password) {
      var msg = ''
      if (LandID === '' || password === '') {
        msg = '账号密码不能为空'
      } else {
        if ((/^[0-9]*$/.test(LandID))) {
          if (!(/^1(3|4|5|7|8)\d{9}$/.test(LandID))) {
            msg = '手机号码格式错误'
          } else {
            for (var i = 0; i < this.registerList.length; i++) {
              if (LandID === this.registerList[i].ID && password === this.registerList[i].password) {
                this.isTrue = true
                this.$store.commit('changeLandId', this.registerList[i].ID)
                this.$store.commit('changeLandState', true)
                msg = '登陆成功'
                break
              } else if (LandID !== this.registerList[i].ID) {
                msg = '账号不存在'
              } else if (LandID === this.registerList[i].ID && password !== this.registerList[i].password) {
                msg = '密码错误'
              }
            }
          }
        } else {
          if (!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/.test(LandID))) {
            msg = '邮箱格式错误'
          } else {
            for (var j = 0; j < this.registerList.length; j++) {
              if (LandID === this.registerList[j].ID && password === this.registerList[j].password) {
                this.isTrue = true
                this.changeLandId(this.registerList[j].ID)
                this.changeLandState(true)
                msg = '登陆成功'
                break
              } else if (LandID !== this.registerList[j].ID) {
                msg = '账号不存在'
              } else if (LandID === this.registerList[j].ID && password !== this.registerList[j].password) {
                msg = '密码错误'
              }
            }
          }
        }
      }
      // 动态显示弹窗的内容
      this.message = msg
      // 弹窗显示
      this.isTan = true
    },
    ...mapMutations({
      changeLandId: 'changeLandId',
      changeLandState: 'changeLandState'
    }),
    // 用于判断是否可以正确注册
    ToRegister (LandID, password, passwordAgain) {
      var msg = ''
      if (LandID === '' || password === '' || passwordAgain === '') {
        msg = '账号密码不能为空'
      } else {
        for (var i = 0; i < this.registerList.length; i++) {
          if (LandID === this.registerList[i].ID) {
            msg = '账号已存在'
          } else if (password !== passwordAgain) {
            msg = '两次密码不一样'
          } else {
            if ((/^[0-9]*$/.test(LandID))) {
              if (!(/^1(3|4|5|7|8)\d{9}$/.test(LandID))) {
                msg = '手机号码格式错误'
              } else {
                break
              }
            } else {
              if (!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/.test(LandID))) {
                msg = '邮箱格式错误'
              } else {
                break
              }
            }
          }
        }
      }
      // 注册成功时
      if (msg === '') {
        // 将可以注册的，加入到registerList 数据中
        this.registerList.push({'id': this.registerList.length, 'ID': LandID, 'password': password})
        msg = '注册成功'
        // 下面的按钮显示 前往登陆
        this.isTrueRegister = true
      }
      // 动态显示弹窗的内容
      this.message = msg
      // 显示弹窗
      this.isTan = true
    },
    // 隐藏弹窗
    changeisTan () {
      this.isTan = !this.isTan
    },
    // 前往登陆页面
    GotoLand () {
      // 隐藏弹窗
      this.isTan = !this.isTan
      // 隐藏注册页面
      this.registerOrLand = !this.registerOrLand
      // 按钮显示 确定
      this.isTrueRegister = false
      // 头部显示登录
      this.HeaderIsLandOrRegister = !this.HeaderIsLandOrRegister
    },
    // 前往注册页面
    TurnToRegister () {
      // 头部显示注册
      this.HeaderIsLandOrRegister = !this.HeaderIsLandOrRegister
    },
    // 头部返回按钮，返回登录页面
    GoBackToLand () {
      // 头部显示登录
      this.HeaderIsLandOrRegister = !this.HeaderIsLandOrRegister
      // 显示登录页面
      this.registerOrLand = !this.registerOrLand
    }
  },
  mounted () {
    this.getHeaderInfo()
    this.getRegisterInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .register
    width 100%
    margin 0
    padding 0
    background #fff
    .Tan
      position fixed
      width 100%
      height 100%
      top 0
      left 0
</style>
