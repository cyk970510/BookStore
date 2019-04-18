<template>
  <div class="bodyleft" ref="wrapper">
    <ul class="left-ul">
      <li class="leftitem" v-for="(item,id) of bodyLeftList" :key="id"
          :class="{ leftitembg: flag == id+1}"
          @click="Classifytype(item.id)"
          :ref="item.name"
      >
        <a class="" :name="item.name" @click="toscroll">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'ClassifyLefynav',
  props: {
    bodyLeftList: Array
  },
  data () {
    return {
      flag: 1,
      letter: ''
    }
  },
  methods: {
    Classifytype (id) {
      this.flag = id
      this.$emit('sentid', id)
    },
    toscroll (e) {
      this.letter = e.target.innerText
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .bodyleft::-webkit-scrollbar {display:none}
  .bodyleft
    position relative
    float left
    overflow scroll
    height 11rem
    width 21.4%
    .left-ul
      list-style none
    .leftitem
      width 100%
      padding .3rem 0
      background-color #fff
      font-size .3rem
      text-align center
    .leftitem >>> a
      color black
    .leftitembg
      background-color #eff4fa
    .leftitembg >>> a
      color red
</style>
