<template>
  <div class="buy">
    <buy-header :headerList="headerList"></buy-header>
    <div class="uptotop" v-show="isfalse" @click="UptoTop">
      <img class="topimg" src="static/img/bottom-icon/go-top.png" />
    </div>
    <buy-listone :Listone="Listone"></buy-listone>
    <buy-listtwo :Listtwo="Listtwo"></buy-listtwo>
    <buy-listthree :Listthree="Listthree"></buy-listthree>
    <buy-listfour :Listfour="Listfour"></buy-listfour>
    <buy-bottom></buy-bottom>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from 'axios'
import BuyHeader from './components/Header'
import CommonFooter from '../../common/footer/footer'
import BuyListone from './components/ListOne'
import BuyListtwo from './components/ListTwo'
import BuyListthree from './components/Listthree'
import BuyListfour from './components/Listfour'
import BuyBottom from './components/bottom'
export default {
  name: 'buy',
  components: {
    BuyBottom,
    BuyListfour,
    BuyListthree,
    BuyListtwo,
    BuyListone,
    CommonFooter,
    BuyHeader
  },
  data () {
    return {
      headerList: [],
      Listone: [],
      Listtwo: [],
      Listthree: [],
      Listfour: [],
      isfalse: false,
      timer: null
    }
  },
  methods: {
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
    },
    handleScroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 100) {
        this.isfalse = true
      } else {
        this.isfalse = false
      }
    },
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
        this.Listtwo = data.Listtwo
        this.Listthree = data.Listthree
        this.Listfour = data.Listfour
      }
    }
  },
  mounted () {
    this.getHeaderInfo()
    this.getBuyInfo()
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
  .buy::-webkit-scrollbar {display:none}
  .buy
    margin 0
    padding 0
    background #eee
    .uptotop
      position fixed
      bottom 10%
      right .15rem
      width 10%
      z-index 800
      .topimg
        width 100%
</style>
