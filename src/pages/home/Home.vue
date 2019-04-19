<template>
  <div class="home">
    <home-header></home-header>
    <!--动图-->
    <div class="img-gif">
      <img class="img-gif1" src="static/img/bottom-icon/redpct_icon-1541561310.gif"/>
    </div>
    <!--回滚顶部-->
    <div class="img-up" v-show="isfalse" @click="UptoTop">
      <img class="up-img" src="static/img/bottom-icon/go-top.png"/>
    </div>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-list :listList="listList"></home-list>
    <home-brand :brandList="brandList"></home-brand>
    <home-seckill :seckillList="seckillList"></home-seckill>
    <home-vipshop :vipshopList="vipshopList"></home-vipshop>
    <home-libraryStore :libraryStoreList="libraryStoreList"></home-libraryStore>
    <home-maybe :maybeList="maybeList"></home-maybe>
    <common-footer></common-footer>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeList from './components/List'
import HomeBrand from './components/Brand'
import HomeSeckill from './components/Seckill'
import HomeVipshop from './components/Vipshop'
import HomeLibraryStore from './components/LibraryStore'
import HomeMaybe from './components/MaybeLike'
import CommonFooter from '../../common/footer/footer'
export default {
  name: 'Home',
  components: {
    CommonFooter,
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
      isfalse: false,
      swiperList: [],
      listList: [],
      brandList: [],
      seckillList: [],
      vipshopList: [],
      libraryStoreList: [],
      maybeList: [],
      timer: null
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
    },
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
    },
    changeID () {
      this.changeId('1')
    },
    ...mapMutations(['changeId'])
  },
  mounted () {
    this.getHomeInfo()
    this.changeID()
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
  .home::-webkit-scrollbar {display:none}
  .home
    position relative
    background #eff4fa
    margin 0
    padding 0
    .img-gif
      position fixed
      top 50%
      right 0
      width 1rem
      z-index 999
      .img-gif1
        width 100%
    .img-up
      position fixed
      bottom 9%
      right .3rem
      width 1rem
      z-index 800
      .up-img
        width 100%
</style>
