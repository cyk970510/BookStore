<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-list :listList="listList"></home-list>
    <home-brand :brandList="brandList"></home-brand>
    <home-seckill :seckillList="seckillList"></home-seckill>
    <home-vipshop :vipshopList="vipshopList"></home-vipshop>
    <home-libraryStore :libraryStoreList="libraryStoreList"></home-libraryStore>
    <home-maybe :maybeList="maybeList"></home-maybe>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeList from './components/List'
import HomeBrand from './components/Brand'
import HomeSeckill from './components/Seckill'
import HomeVipshop from './components/Vipshop'
import HomeLibraryStore from './components/LibraryStore'
import HomeMaybe from './components/MaybeLike'
// import CommonFooter from '../../common/footer/footer'
export default {
  name: 'Home',
  components: {
    // CommonFooter,
    HomeMaybe,
    HomeLibraryStore,
    HomeVipshop,
    HomeSeckill,
    HomeBrand,
    HomeList,
    HomeSwiper,
    HomeHeader
  },
  data () {
    return {
      // isfalse: false,
      // lastCity: '',
      swiperList: [],
      listList: [],
      brandList: [],
      seckillList: [],
      vipshopList: [],
      libraryStoreList: [],
      maybeList: []
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
        this.brandList = data.brandList
        this.seckillList = data.seckillList
        this.vipshopList = data.vipshopList
        this.libraryStoreList = data.libraryStoreList
        this.maybeList = data.maybeList
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
