<template>
  <div class="body">
    <div class="body-right" v-if="index+1 == navgetid" v-for="(item,index) of bookList" :key="index">
      <!--图片-->
      <div class="right-img">
        <img class="img-a" :src="item.imgUrl"/>
      </div>
      <!--图片下面的进入书城-->
      <div class="right-underimg">
        <a href="##" class="underimmg-box">
        <span class="box-title">
          <span class="title-big">进入当当书城</span>
          <span class="title-small">特价低至1.9折</span>
        </span>
          <span class="iconfont box-icon">&#xe603;</span>
        </a>
        <a href="##" class="underimmg-box">
        <span class="box-title">
          <span class="title-big">进入当当书城</span>
          <span class="title-small">特价低至1.9折</span>
        </span>
          <span class="iconfont box-icon">&#xe603;</span>
        </a>
      </div>
      <!--榜单-->
      <div class="right-bangdan">
        <div class="bangdan-header">榜单</div>
        <div class="bangdan-img">
          <div class="img-content" v-for="items of item.imgchildren" :key="items.id">
            <img class="content-img" :src="items.imgUrl" />
            <span class="content-title">{{items.title}}</span>
          </div>
        </div>
      </div>
      <!--小说-->
      <div class="right-xiaoshuo" v-for="(items,index) of item.children" :key="index">
        <div class="xiaoshuo-header">
        <span class="header-lefttitle">
          <span class="left-title">{{items.title}}</span>
          <span class="iconfont left-icon">&#xe603;</span>
        </span>
          <span class="header-righttitle">
          <span class="right-title">销售榜单</span>
          <span class="iconfont right-icon">&#xe603;</span>
        </span>
        </div>
        <div class="xiaoshuo-content">
          <ul class="content-ul">
            <div class="ul-content" v-if="index < isOpenItem[items.id].count" v-for="(itemss,index) of items.children" :key="index">
              <li class="ul-li border-right">
                <a href="##">
                  <span class="li-word">{{itemss.name}}</span>
                </a>
                <span class="iconfont ul-hot" v-if="itemss.hot">&#xe6ed;</span>
              </li>
            </div>
            <!--展开收起按钮-->
            <div class="ul-content">
              <li class="ul-li">
                <a href="##" >
                  <!--展开功能-->
                  <span v-if="!(isOpenItem[items.id].status)" @click="toopen(items.id,items.children)">
                  <span class="li-zhankai">展开</span>
                  <span class="iconfont zhankai-icon">&#xe633;</span>
                </span>
                  <!--收上功能-->
                  <span v-else @click=" toclose(items.id,5)">
                  <span class="li-zhankai">收上</span>
                  <span class="iconfont zhankai-icon">&#xe634;</span>
                </span>
                </a>
              </li>
            </div>
            <!--。。-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassifyBody',
  props: {
    bookList: Array,
    navid: String
  },
  data () {
    return {
      isid: -1,
      isopen: true,
      count: 5,
      navgetid: '1',
      isOpenItem: [
        {
          status: false,
          count: 5
        }, {
          status: false,
          count: 5
        }
      ]
    }
  },
  methods: {
    toopen (id, item) {
      this.isid = id
      this.isOpenItem[id].status = !this.isOpenItem[id].status
      this.isOpenItem[id].count = item.length
      this.isopen = !this.isopen
    },
    toclose (id, length) {
      this.isid = id
      this.isOpenItem[id].status = !this.isOpenItem[id].status
      this.isOpenItem[id].count = length
      this.isopen = !this.isopen
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-right
    color gray
  .body::-webkit-scrollbar {display:none}
  .body
    position relative
    float left
    width 76.6%
    overflow-y scroll
    background-color #eff4fa
    height 86%
    padding-left 2%
    .body-right
      .right-img
        position relative
        width 99%
        padding-bottom 1vh
        overflow hidden
        .img-a
          width 100%
      .right-underimg
        position relative
        width 100%
        height 8vh
        margin-top 1vh
        margin-bottom 1vh
        overflow hidden
        .underimmg-box
          position relative
          float left
          width 48%
          margin-left 1%
          padding-bottom 2vh
          background-color white
          .box-title
            .title-big
              position relative
              display block
              margin-top .3rem
              margin-left .2rem
              font-size 2vh
              font-weight bold
              color black
            .title-small
              display block
              margin-top .2rem
              margin-left .2rem
              font-size 1.5vh
              color gray
          .box-icon
            display block
            position absolute
            right .2rem
            top 40%
            font-size 1.5vh
            color black
      .right-bangdan
        position relative
        width 99%
        background-color white
        overflow hidden
        .bangdan-header
          position relative
          color black
          font-size 2vh
          font-weight bold
          margin-top 1vh
          margin-left 2vh
          padding-top 1vh
        .bangdan-img
          position relative
          margin-top 1vh
          width 100%
          overflow hidden
          background-color white
          .img-content
            float left
            width 20%
            padding 0 6%
            margin-top .2rem
            padding-bottom .2rem
            .content-img
              width 100%
            .content-title
              text-align center
              width 100%
              display block
              font-size .21rem
              margin-top 2vh
      .right-xiaoshuo
        position relative
        width 99%
        margin-top .2rem
        background-color #fff
        overflow hidden
        .xiaoshuo-header
          width 100%
          margin-top .3rem
          padding-bottom .3rem
          .header-lefttitle
            display inline-block
            float left
            margin-left 2vh
            .left-title
              font-size 1.5vh
              font-weight bold
            .left-icon
              font-size 1.2vh
          .header-righttitle
            display inline-block
            font-size .25rem
            margin-right .35rem
            float right
            .right-title
              font-size .25rem
            .right-icon
              font-size .20rem
        .xiaoshuo-content
          position relative
          width 100%
          margin-top .2rem
          overflow hidden
          .content-ul
            position relative
            width 100%
            height auto
            list-style none
            background-color #25a4bb
            .ul-li
              float left
              width 23%
              padding 2vh 5%
              .li-word
                display inline-block
                overflow hidden
                vertical-align middle
                text-align center
                height .58rem
                width 100%
                line-height .3rem
                text-overflow ellipsis
                font-size .24rem
                color black
              .li-fenge
                position relative
                margin-left .6rem
                margin-bottom -.2rem
              .li-zhankai
                display inline-block
                text-align center
                margin-left 30%
                margin-top .1rem
                font-size .2rem
                color gray
              .zhankai-icon
                color gray
                font-size .1rem
              .ul-hot
                position absolute
                top -.05rem
                left 60%
                display inline
                font-size .4rem
                color red
</style>
