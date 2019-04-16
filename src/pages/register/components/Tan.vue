<template>
  <!--弹窗-->
  <div class="Tan" v-if="isTan">
    <div class="wrapper">
      <div class="title">
        <span class="titleText">{{message}}</span>
      </div>
      <footer class="foot">
        <!--登陆时显示的按钮是确定-->
        <span class="commit" @click="changeIsTan" v-if="!isTrueRegister">确定</span>
        <!--注册时，成功了显示按钮前往登陆-->
        <span class="commit" @click="GoToLand" v-if="isTrueRegister">前往登陆</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterTan',
  props: {
    // 从父层判断是否可以成功，来控制跳不跳转到My页面
    isTrue: Boolean,
    // 控制是否显示弹窗
    isTan: Boolean,
    // 动态显示弹窗内容
    message: String,
    // 控制显示弹窗下面的按钮是 ’确定‘ 还是’前往登陆‘
    isTrueRegister: Boolean
  },
  data () {
    return {
      // isTan: false
    }
  },
  methods: {
    // 判断是否登陆成功
    // 登陆成功了跳到my页面
    // 触发changeisTan来隐藏弹窗
    changeIsTan () {
      if (this.isTrue) {
        this.$router.push('/my')
        this.$emit('changeisTan')
      } else {
        this.$emit('changeisTan')
      }
    },
    // 注册成功了，跳转到登陆
    GoToLand () {
      this.$emit('GotoLand')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .Tan
    position fixed
    width 100%
    height 100%
    background RGB(0,0,0,0.5)
    .wrapper
      position absolute
      width 80%
      height 25%
      margin-top 3.5rem
      margin-left 10%
      background white
      border-radius .1rem
      .title
        position relative
        width 100%
        height 70%
        border-radius .1rem .1rem 0 0
        text-align center
        font-size .35rem
        .titleText
          position absolute
          display block
          width 100%
          height .5rem
          top 0
          left 0
          right 0
          bottom 0
          margin auto
      .foot
        position relative
        width 100%
        height 30%
        border-radius 0 0 .1rem .1rem
        background #ff463c
        text-align center
        font-size .35rem
        .commit
          position absolute
          display block
          width 100%
          height .3rem
          top 0
          left 0
          right 0
          bottom 0
          margin auto
          color white
</style>
