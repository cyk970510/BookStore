<template>
  <div class="classify">
    <classify-header :headerList="headerList"></classify-header>
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
      navid: ''
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
    }
  },
  mounted () {
    this.getClassifyInfo()
    this.getClassifyInfo1()
    this.getHeaderInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
