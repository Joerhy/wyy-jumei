<template lang="pug">
#app
    router-view
    tabbar(v-show="isTab")
</template>

<script>
import tabbar from '@/components/Tabbar.vue'
export default {
  name: 'app',
  computed: {
      isTab() {
          return this.$store.state.tabHidden
      }
  },
  components: {
      tabbar
  },
  created() {
      this.$router.push('/index/page1')
      if(!storage['cart']) {
          storage.setItem('cart', '[]')
      } else {
          this.$store.state.cart.added = JSON.parse(storage['cart'])
      }
  },
  watch: {
      '$route'() {
          if(!this.$store.state.tabHidden) {
              this.$store.dispatch('tabHidden')
          }
      }
  }
}
</script>

<style lang="stylus" type="stylesheet/stylus">
@import './common/stylus/mixin.styl'
.mint-msgbox
  .mint-msgbox-content
    padding 0.3rem
    border none
  .mint-msgbox-btns
    padding-bottom .3rem
    .mint-msgbox-btn 
      border-radius 10rem
      margin .1rem .4rem
      background #ddd
      color #fff
    .mint-msgbox-confirm  
      background mainColor
      color #fff

</style>
