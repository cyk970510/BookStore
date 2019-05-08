<template>
  <div class="detail">
    <detail-header :headerList="headerList"></detail-header>
    <div>aaaaaaaaaaa</div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailHeader from './components/Header'
export default {
  name: 'detail',
  components: {
    DetailHeader
  },
  data () {
    return {
      headerList: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/detail.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.headerList = data.headerList
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
