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
        <span v-if="editId == item.id" class="finashgoods" @click="tofinashEdit()">完成</span>
        <span v-if="editId == item.id" class="iconfont delecticon" @click="todelectgoods(item.id)">&#xe614;</span>
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
      height .8rem
      width 100%
      .countone
        width 100%
        display inline-block
        margin-top .2rem
        .countcheck
          width .5rem
          height .5rem
          margin-left .2rem
          -webkit-appearance radio
        .counticon
          position absolute
          margin-left .3rem
          font-size .5rem
          color red
        .conuttitle
          margin-left 1.2rem
          font-size .33rem
        .edit
          display inline-block
          float right
          font-size .28rem
          margin-right .5rem
          margin-top .1rem
        .finash
          display inline-block
          float right
          font-size .3rem
          margin-right .5rem
          margin-top .1rem
    .wrapper
      width 100%
      background #fff
      padding-top .2rem
      .top
        width 100%
        display flex
        padding-bottom .2rem
        .goodscheck
          display inline-block
          width 1rem
          height 1rem
          margin-left .2rem
          margin-right .1rem
          margin-top .1rem
          -webkit-appearance radio
        .goodsimg
          width 60%
          margin-left .2rem
        .add
          width 50%
          .down
            display inline-block
            margin-top .5rem
            padding .2rem
            background-color #eee
            margin-right .2rem
            border-radius .1rem
          .up
            display inline-block
            margin-top .5rem
            padding .2rem
            background-color #eee
            margin-left .2rem
            border-radius .1rem
        .goodsinfo
          width 100%
          margin-left .4rem
          .infotitle
            font-size .28rem
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          .infoprice
            margin-top .35rem
            .price
              font-size .32rem
              color red
            .noprice
              color #777
              font-size .23rem
              text-decoration line-through
          .infoimg
            font-size .23rem
            margin-top .3rem
            width .7rem
            padding .05rem
            background red
            color white
          .infocount
            margin-top .2rem
        .delectgoods
          display inline-block
          padding 0 .1rem
          padding-top .3rem
          text-align center
          height 1rem
          background red
          color white
          margin-top .5rem
          margin-right .2rem
          border-radius .1rem
        .countedit
          position relative
          display inline-block
          font-size .5rem
          margin-top 1.5rem
          margin-right .2rem
        .delecticon
          position relative
          right 1.5rem
          top 2rem
          font-size .4rem
          color #aaa
        .finashgoods
          display inline-block
          padding 0 .1rem
          padding-top .6rem
          text-align center
          height 1.3rem
          color white
          margin-top .5rem
          margin-right .1rem
          border-radius .1rem
          background #cacaca
      .bot
        width 100%
        padding-bottom .2rem
        .jiajia
          font-size .26rem
          margin-left .8rem
          border .01rem solid red
          color red
        .zhusi
          margin-left .3rem
          font-size .28rem
        .go
          font-size .26rem
    .total
      position fixed
      z-index 100
      bottom 7.9%
      width 100%
      height .8rem
      background #fff
      padding-bottom .3rem
      .Goodscount
        height .8rem
        margin-top .2rem
        .countcheck
          margin-left .2rem
          width .4rem
          height .4rem
          -webkit-appearance radio
        .checkall
          display inline-block
          vertical-align middle
          font-size .35rem
          margin-left .2rem
        .conut
          display inline-block
          vertical-align middle
          margin-left 1.5rem
          font-size .35rem
        .totalmoney
          display inline-block
          vertical-align bottom
          font-size .32rem
          color red
        .jiesuan
          position absolute
          display inline-block
          background red
          right 0
          top 0
          width 22%
          height 100%
          text-align center
          .title
            display inline-block
            margin-top .3rem
            font-size .3rem
            font-weight bold
            color white
          .goodscount
            font-size .3rem
            font-weight bold
            color white
</style>
