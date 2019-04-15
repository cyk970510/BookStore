<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-list :listList="listList"></home-list>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeList from './components/List'
export default {
  name: 'Home',
  components: {
    HomeList,
    HomeSwiper,
    HomeHeader
  },
  data () {
    return {
      // isfalse: false,
      // lastCity: '',
      swiperList: [],
      listList: []
      // hotList: [],
      // pingpaiList: [],
      // discountList: [],
      // footerList: [],
      // libraryCityList: [],
      // maybeList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.listList = data.listList
        // this.hotList = data.hotList
        // this.pingpaiList = data.pingpaiList
        // this.discountList = data.discountList
        // this.footerList = data.footerList
        // this.libraryCityList = data.libraryCityList
        // this.maybeList = data.maybeList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .Home::-webkit-scrollbar {display:none}
  .Home
    background #eff4fa
    margin 0
    padding 0
</style>
