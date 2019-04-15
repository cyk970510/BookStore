<template>
  <div class="classify">
    <classify-header :headerList="headerList"></classify-header>
  </div>
</template>

<script>
import axios from 'axios'
import ClassifyHeader from './components/Header'
export default {
  name: 'classify',
  components: {
    ClassifyHeader
  },
  data () {
    return {
      headerList: []
      // bodyLeftList: [],
      // footerList1: [],
      // bookList: [],
      // bookList1: [],
      // statusList: [],
      // navid: ''
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
    }
    // getClassifyInfo () {
    //   axios.get('/api/classify.json')
    //     .then(this.getClassifyInfoSucc)
    // },
    // getClassifyInfoSucc (res) {
    //   res = res.data
    //   if (res.ret && res.data) {
    //     const data = res.data
    //     this.bodyLeftList = data.bodyLeftList
    //     this.footerList1 = data.footerList1
    //   }
    // },
    // getClassifyInfo1 () {
    //   axios.get('/api/book.json')
    //     .then(this.getClassifyInfoSucc1)
    // },
    // getClassifyInfoSucc1 (res) {
    //   res = res.data
    //   if (res.ret && res.data) {
    //     const data = res.data
    //     this.bookList = data.bookList
    //     this.bookList1 = data.bookList1
    //     this.statusList = data.statusList
    //   }
    // }
    // getid (id) {
    //   this.navid = id
    // }
  },
  mounted () {
    // this.getClassifyInfo()
    // this.getClassifyInfo1()
    this.getHeaderInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
