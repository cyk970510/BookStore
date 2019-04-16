<template>
  <div class="car">
    <car-header :headerList="headerList"></car-header>
    <!--回滚顶部-->
    <div class="img-up" v-show="isfalse" @click="UptoTop()">
      <img class="up-img" src="static/img/bottom-icon/go-top.png"/>
    </div>
    <car-goods @tocommit="getcommit" :commitinfo="commitinfo"></car-goods>
    <car-maybe :maybeList="maybeList"></car-maybe>
    <common-footer></common-footer>
    <!--弹窗-->
    <div class="commitToDelect" v-if="isshow">
      <div class="content">
        <div class="title border">是否确定删除该商品</div>
        <div class="bottom">
          <span class="cancle" @click="cancle">取消</span>
          <span class="commit" @click="yescommit">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CarHeader from './components/Header'
import CarGoods from './components/Goods'
import CommonFooter from '../../common/footer/footer'
import CarMaybe from './components/MaybeLike'
export default {
  name: 'car',
  components: {
    CarMaybe,
    CommonFooter,
    CarGoods,
    CarHeader
  },
  data () {
    return {
      headerList: [],
      maybeList: [],
      isshow: false,
      commitinfo: 0,
      isfalse: false
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
    // 获取内容信息
    getInfo () {
      axios.get('/api/car.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.maybeList = data.maybeList
      }
    },
    getcommit () {
      this.isshow = !this.isshow
    },
    cancle () {
      this.isshow = !this.isshow
      this.commitinfo = 0
    },
    yescommit () {
      this.isshow = !this.isshow
      this.commitinfo += 1
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
      var interval = setInterval(function () {
        if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
          document.body.scrollTop -= 30
          document.documentElement.scrollTop -= 30
        } else {
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
          clearInterval(interval)
        }
      })
    }
  },
  mounted () {
    this.getHeaderInfo()
    this.getInfo()
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .car
    margin 0
    padding 0
    .commitToDelect
      z-index 900
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background: rgba(0,0,0,0.5)
      .content
        position relative
        width 70%
        height 3.5rem
        margin 0 auto
        margin-top 4rem
        border-radius .2rem
        background white
        .title
          position relative
          width 100%
          padding 1.2rem 0
          border-radius .2rem .2rem 0 0
          text-align center
          font-size .3rem
        .bottom
          position relative
          width 100%
          padding .26rem 0
          text-align center
          .cancle
            padding .26rem 19.5%
            border-radius 0 0 0 .2rem
          .commit
            padding .26rem 19.5%
            border-radius 0 0 .2rem 0
    .img-up
      position fixed
      bottom 18%
      right .3rem
      width 1rem
      z-index 999
      .up-img
        width 100%
</style>
