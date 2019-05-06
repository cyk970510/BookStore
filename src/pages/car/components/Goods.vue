<template>
  <div class="Goods">
    <!--头部-->
    <div class="Goodscount border-bottom">
      <span class="countone">
        <input class="countcheck" type="checkbox" @click="chooseall" />
        <span class="iconfont counticon">&#xe604;</span>
        <span class="conuttitle">书书网</span>
        <span class="edit" v-if="!isfinash" @click="edit">编辑</span>
        <span class="finash" v-if="isfinash" @click="finash">完成</span>
      </span>
    </div>
    <!--商品信息列表-->
    <div class="wrapper border-bottom" v-for="item of goodsList" :key="item.id">
      <div class="top">
        <!--商品选择框-->
        <input v-if="!isfinash && editId != item.id" class="goodscheck" type="checkbox" @click="singlecheck(item.id)" />
        <!--商品图片-->
        <div class="goodsimg">
          <a><img class="img" src="http://img3m6.ddimg.cn/65/26/24193586-1_l_9.jpg"/></a>
        </div>
        <!--商品数量加与减-->
        <div class="add" v-if="isfinash || editId == item.id">
            <span class="down"  @click="item.count>1 && item.count--">-</span>
            <span class="count">{{item.count}}</span>
            <span class="up" @click="item.count++">+</span>
        </div>
        <!--商品信息-->
        <div class="goodsinfo" v-if="!isfinash && editId != item.id">
          <!--商品名字-->
          <p class="infotitle">{{item.name}}</p>
          <!--商品价钱-->
          <p class="infoprice">
            <span class="price">￥{{item.price}}</span>
            <span class="noprice">￥{{item.noprice}}</span>
          </p>
          <p class="infoimg">限时抢</p>
          <!--商品数量-->
          <div class="infocount">
            <span class="countdouble">x{{item.count}}</span>
          </div>
        </div>
        <!--编辑图标-->
        <span v-if="!isfinash && editId != item.id" class="iconfont countedit" @click="editgoods(item.id)">&#xe642;</span>
        <span v-if="editId == item.id" class="iconfont delecticon" @click="todelectgoods(item.id)">&#xe614;</span>
        <span v-if="editId == item.id" class="finashgoods" @click="tofinashEdit()">完成</span>
        <span v-if="isfinash" class="delectgoods" @click="todelectgoods(item.id)">删除</span>
      </div>
      <!--商品底部信息-->
      <div class="bot">
        <span class="jiajia">加价购</span>
        <span class="zhusi">购买本商品可选加价购</span>
        <span class="iconfont go">&#xe603;</span>
      </div>
    </div>
    <!--底部计算总价钱-->
    <div class="total border-top">
      <div class="Goodscount">
      <span class="countone">
        <input class="countcheck" @click="choose" type="checkbox"/>
        <span class="checkall">全选</span>
        <span class="conut">合计</span>
        <span class="totalmoney">{{allprice | currency}}</span>
        <span class="jiesuan">
          <span class="title">结算</span>
          <span class="goodscount">({{allcount}})</span>
        </span>
      </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarGoods',
  props: {
    commitinfo: Number
  },
  data () {
    return {
      isfinash: false,
      state: false,
      goodsList: [
        {
          id: '0',
          name: '小牛顿科学馆：全新升级版 （科学蓝，30册礼品装',
          price: '300.00',
          noprice: '600.00',
          count: '1'
        },
        {
          id: '1',
          name: '小牛顿科学馆：全新升级版 （科学蓝，30册礼品装',
          price: '500.00',
          noprice: '600.00',
          count: '2'
        },
        {
          id: '2',
          name: '小牛顿科学馆：全新升级版 （科学蓝，30册礼品装',
          price: '30.00',
          noprice: '600.00',
          count: '3'
        }
      ],
      allprice: 0,
      allcount: 0,
      checknum: 0,
      delectId: '',
      editId: ''
    }
  },
  // 过滤器
  filters: {
    currency (value) {
      return '￥' + value.toFixed(2)
    }
  },
  methods: {
    // 全选按钮
    chooseall () {
      var a = document.getElementsByClassName('countcheck')[0]
      var x = document.getElementsByClassName('goodscheck')
      var b = document.getElementsByClassName('countcheck')[1]
      if (a.checked === true) {
        for (var i = 0; i < x.length; i++) {
          x[i].checked = true
          this.allprice += parseInt(this.goodsList[i].price)
          this.allcount += parseInt(this.goodsList[i].count)
          this.checknum += 1
        }
        b.checked = true
      } else {
        for (var j = 0; j < x.length; j++) {
          x[j].checked = false
        }
        this.allprice = 0.00
        this.allcount = 0
        this.checknum = 0
        b.checked = false
      }
    },
    // 全选按钮
    choose () {
      var a = document.getElementsByClassName('countcheck')[0]
      var x = document.getElementsByClassName('goodscheck')
      var b = document.getElementsByClassName('countcheck')[1]
      if (b.checked === true) {
        for (var i = 0; i < x.length; i++) {
          x[i].checked = true
          this.allprice += parseInt(this.goodsList[i].price)
          this.allcount += parseInt(this.goodsList[i].count)
          this.checknum += 1
        }
        a.checked = true
      } else {
        for (var j = 0; j < x.length; j++) {
          x[j].checked = false
        }
        this.allprice = 0.00
        this.allcount = 0
        this.checknum = 0
        a.checked = false
      }
    },
    // 单选按钮
    singlecheck (id) {
      var x = document.getElementsByClassName('goodscheck')
      if (x[id].checked === true) {
        this.allprice += parseInt(this.goodsList[id].price)
        this.allcount += parseInt(this.goodsList[id].count)
        this.checknum += 1
      } else {
        this.allprice -= parseInt(this.goodsList[id].price)
        this.allcount -= parseInt(this.goodsList[id].count)
        this.checknum -= 1
      }
    },
    // 编辑
    edit () {
      this.isfinash = !this.isfinash
    },
    finash () {
      this.isfinash = !this.isfinash
    },
    // 删除购物车
    todelectgoods (id) {
      this.delectId = id
      this.$emit('tocommit')
    },
    // 编辑按钮
    editgoods (id) {
      this.editId = id
    },
    tofinashEdit () {
      this.editId = ''
    }
  },
  watch: {
    checknum () {
      if (this.checknum === 0) {
        var a = document.getElementsByClassName('countcheck')
        a[0].checked = false
        a[1].checked = false
      }
    },
    // 监听删除对应商品
    commitinfo () {
      if (this.commitinfo > 0) {
        var a = ''
        for (var i = 0; i < this.goodsList.length; i++) {
          if (this.goodsList[i].id === this.delectId) {
            a = i
          }
        }
        this.goodsList.splice(a, 1)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .Goods >>> input[type="checkbox"]
    border: 1px solid #000;
    border-radius: 50%;
  .Goods
    position relative
    width 100%
    .Goodscount
      height 5vh
      width 100%
      .countone
        width 100%
        display inline-block
        margin-top 1vh
        .countcheck
          width 3vh
          height 3vh
          margin-left 2vh
          -webkit-appearance radio
        .counticon
          position absolute
          margin-left 3vh
          margin-top .5vh
          font-size 2.5vh
          color red
        .conuttitle
          position absolute
          margin-top .7vh
          margin-left 8vh
          font-size 2vh
        .edit
          display inline-block
          float right
          font-size 2vh
          margin-right .5rem
          margin-top .1rem
        .finash
          display inline-block
          float right
          font-size 2vh
          margin-right .5rem
          margin-top .1rem
    .wrapper
      width 100%
      background #fff
      padding-top 2vh
      .top
        position relative
        width 100%
        padding-bottom 2vh
        overflow hidden
        .goodscheck
          position relative
          float left
          width 3vh
          height 3vh
          top 5vh
          margin-left 2vh
          -webkit-appearance radio
        .goodsimg
          float left
          margin-right 2vh
          margin-left 2vw
        .add
          float left
          margin-left 5%
          width 35%
          margin-top 3vh
          .down
            display inline-block
            margin-top .5rem
            padding 2vh
            background-color #eee
            margin-right 2vh
            border-radius .1rem
            font-size 2vh
          .up
            display inline-block
            margin-top .5rem
            padding 2vh
            background-color #eee
            margin-left 2vh
            border-radius .1rem
            font-size 2vh
        .goodsinfo
          float left
          width 40%
          margin-left 1vh
          .infotitle
            font-size 2vh
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          .infoprice
            margin-top 3vh
            .price
              font-size 2vh
              color red
            .noprice
              color #777
              font-size 1.5vh
              text-decoration line-through
          .infoimg
            font-size 2vh
            margin-top .3rem
            width 30%
            padding .3vh
            background red
            color white
          .infocount
            margin-top 2vh
        .delectgoods
          position relative
          float right
          display inline-block
          padding 0 .1rem
          padding-top .3rem
          text-align center
          height 1rem
          background red
          color white
          margin-right 2vh
          margin-top 5vh
          border-radius .1rem
        .countedit
          position absolute
          font-size .5rem
          top 14vh
          right 2vh
        .delecticon
          position absolute
          right 25%
          bottom 20%
          font-size 3vh
          color #aaa
        .finashgoods
          position relative
          display inline-block
          float right
          padding 0 .1rem
          padding-top .6rem
          text-align center
          height 6.4vh
          color white
          margin-top 5vh
          margin-right 2vh
          border-radius .1rem
          background red
      .bot
        position relative
        width 100%
        padding-bottom .2rem
        .jiajia
          font-size 2vh
          margin-left 7vh
          border .01rem solid red
          color red
        .zhusi
          margin-left .3rem
          font-size 2vh
        .go
          font-size 2vh
    .total
      position fixed
      background #fff
      z-index 100
      bottom 7.9%
      width 100%
      height 3vh
      padding 2vh 0
      .Goodscount
        overflow hidden
        margin-left 2vh
        .countcheck
          margin-left 2vh
          width 3vh
          height 3vh
          -webkit-appearance radio
        .checkall
          display inline-block
          vertical-align middle
          font-size 2vh
          margin-left 2vh
        .conut
          display inline-block
          vertical-align middle
          margin-left 6vh
          font-size 2vh
        .totalmoney
          position absolute
          margin-top .6vh
          margin-left 1vh
          display inline-block
          vertical-align bottom
          font-size 2vh
          color red
        .jiesuan
          position absolute
          display flex
          background red
          right 0
          top 0
          width 22%
          height 100%
          align-items center
          justify-content center
          .title
            display inline-block
            font-size 2vh
            font-weight bold
            color white
          .goodscount
            display inline-block
            font-size 2vh
            font-weight bold
            color white
</style>
