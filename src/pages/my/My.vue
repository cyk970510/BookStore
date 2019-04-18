<template>
  <div class="my">
    <my-header :headerList="headerList"></my-header>
    <!--回滚顶部-->
    <div class="img-up" v-show="isfalse" @click="UptoTop()">
      <img class="up-img" src="static/img/bottom-icon/go-top.png"/>
    </div>
    <my-body></my-body>
    <my-maybe :maybeList="maybeList"></my-maybe>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from 'axios'
import MyHeader from './components/Header'
import MyBody from './components/body'
import CommonFooter from '../../common/footer/footer'
import MyMaybe from './components/MaybeLike'
export default {
  name: 'my',
  components: {
    MyMaybe,
    CommonFooter,
    MyBody,
    MyHeader
  },
  data () {
    return {
      headerList: [],
      maybeList: [],
      isfalse: false,
      timer: null
    }
  },
  methods: {
    // 获取头部信息
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
    // 获取内容信息
    getInfo () {
      axios.get('/api/my.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.maybeList = data.maybeList
      }
    },
    // 回滚顶部
    handleScroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 100) {
        this.isfalse = true
      } else {
        this.isfalse = false
      }
    },
    UptoTop () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
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
      }, 16)
    }
  },
  mounted () {
    this.getHeaderInfo()
    this.getInfo()
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .my
    width 100%
    margin 0
    padding 0
    background #eee
    .img-up
      position fixed
      bottom 9%
      right .3rem
      width 1rem
      z-index 999
      .up-img
        width 100%
</style>
