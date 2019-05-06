<template>
  <div class="classify">
    <classify-header :headerList="headerList"></classify-header>
    <!--回滚顶部-->
    <div class="img-up" v-show="isfalse" @click="UptoTop">
      <img class="up-img" src="static/img/bottom-icon/go-top.png"/>
    </div>
    <classify-lefynav :bodyLeftList="bodyLeftList" @sentid="getid"></classify-lefynav>
    <classify-body :bookList="bookList" :navid="navid"></classify-body>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from 'axios'
import ClassifyHeader from './components/Header'
import ClassifyLefynav from './components/Leftnav'
import ClassifyBody from './components/Body'
import CommonFooter from '../../common/footer/footer'
export default {
  name: 'classify',
  components: {
    CommonFooter,
    ClassifyBody,
    ClassifyLefynav,
    ClassifyHeader
  },
  data () {
    return {
      // 头部数据
      headerList: [],
      // 左边nav数据
      bodyLeftList: [],
      // footerList1: [],
      // 中间内容图书数据
      bookList: [],
      // 左边nav的每项id
      navid: '',
      isfalse: false,
      timer: null
    }
  },
  methods: {
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
    getClassifyInfo () {
      axios.get('/api/classify.json')
        .then(this.getClassifyInfoSucc)
    },
    getClassifyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bodyLeftList = data.bodyLeftList
        this.footerList1 = data.footerList1
      }
    },
    getClassifyInfo1 () {
      axios.get('/api/book.json')
        .then(this.getClassifyInfoSucc1)
    },
    getClassifyInfoSucc1 (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bookList = data.bookList
      }
    },
    getid (id) {
      this.navid = id
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
          if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
            document.body.scrollTop -= 150
            document.documentElement.scrollTop -= 150
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
    this.getClassifyInfo()
    this.getClassifyInfo1()
    this.getHeaderInfo()
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
  .classify
    margin 0
    padding 0
    display block
    height 100vh
    overflow hidden
    .img-up
      position fixed
      bottom 9%
      right .3rem
      width 1rem
      z-index 800
      .up-img
        width 100%
</style>
