<template>
  <div class="buy">
    <buy-header :headerList="headerList"></buy-header>
    <buy-listone :Listone="Listone"></buy-listone>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from 'axios'
import BuyHeader from './components/Header'
import CommonFooter from '../../common/footer/footer'
import BuyListone from './components/ListOne'
export default {
  name: 'buy',
  components: {
    BuyListone,
    CommonFooter,
    BuyHeader
  },
  data () {
    return {
      headerList: [],
      Listone: []
      // Listtwo: [],
      // Listthree: [],
      // Listfour: [],
      // isfalse: false
    }
  },
  methods: {
    // Totop () {
    //   var interval = setInterval(function () {
    //     if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    //       document.body.scrollTop -= 30
    //       document.documentElement.scrollTop -= 30
    //     } else {
    //       document.body.scrollTop = 0
    //       document.documentElement.scrollTop = 0
    //       clearInterval(interval)
    //     }
    //   })
    // },
    // handleScroll () {
    //   const top = document.documentElement.scrollTop
    //   if (top > 100) {
    //     this.isfalse = true
    //   } else {
    //     this.isfalse = false
    //   }
    // },
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
    getBuyInfo () {
      axios.get('/api/buy.json')
        .then(this.getBuyInfoSucc)
    },
    getBuyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.Listone = data.Listone
        // this.Listtwo = data.Listtwo
        // this.Listthree = data.Listthree
        // this.Listfour = data.Listfour
      }
    }
  },
  mounted () {
    this.getHeaderInfo()
    this.getBuyInfo()
  }
  // activated () {
  //   window.addEventListener('scroll', this.handleScroll)
  //   this.getHeaderInfo()
  //   this.getBuyInfo()
  // },
  // deactivated () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>

<style lang="stylus" scoped>

</style>
