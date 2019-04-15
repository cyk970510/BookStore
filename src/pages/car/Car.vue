<template>
  <div class="car">
    <car-header :headerList="headerList"></car-header>
    <car-goods @tocommit="getcommit" :commitinfo="commitinfo"></car-goods>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from 'axios'
import CarHeader from './components/Header'
import CarGoods from './components/Goods'
import CommonFooter from '../../common/footer/footer'
export default {
  name: 'car',
  components: {
    CommonFooter,
    CarGoods,
    CarHeader
  },
  data () {
    return {
      headerList: [],
      // maybeList: [],
      // isshow: false,
      commitinfo: 0
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
    // // 获取内容信息
    // getInfo () {
    //   axios.get('/api/car.json')
    //     .then(this.getInfoSucc)
    // },
    // getInfoSucc (res) {
    //   res = res.data
    //   if (res.ret && res.data) {
    //     const data = res.data
    //     this.maybeList = data.maybeList
    //   }
    // },
    getcommit () {
      this.isshow = !this.isshow
    }
    // cancle () {
    //   this.isshow = !this.isshow
    //   this.commitinfo = 0
    // },
    // yescommit () {
    //   this.isshow = !this.isshow
    //   this.commitinfo += 1
    // }
  },
  mounted () {
    this.getHeaderInfo()
    // this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
