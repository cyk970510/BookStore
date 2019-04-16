<template>
  <div class="my">
    <my-header :headerList="headerList"></my-header>
  </div>
</template>

<script>
import axios from 'axios'
import MyHeader from './components/Header'
export default {
  name: 'my',
  components: {
    MyHeader
  },
  data () {
    return {
      headerList: []
      // maybeList: []
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
    }
    // // 获取内容信息
    // getInfo () {
    //   axios.get('/api/my.json')
    //     .then(this.getInfoSucc)
    // },
    // getInfoSucc (res) {
    //   res = res.data
    //   if (res.ret && res.data) {
    //     const data = res.data
    //     this.maybeList = data.maybeList
    //   }
    // }
  },
  mounted () {
    this.getHeaderInfo()
    // this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .my
    width 100%
    margin 0
    padding 0
    background #eee
</style>
