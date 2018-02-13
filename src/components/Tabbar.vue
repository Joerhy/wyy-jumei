<template lang="pug">
.footer
    mt-tabbar.border-1px-top(v-model="selected", fixed)
        mt-tab-item(v-for="(item, index) in tabList", :id="item.name", :key="index") {{item.name}}
            img(:src="'/static/icon/' + item.img + (selected==item.name?'choose':'') + '.png'", slot="icon") 
</template>

<script>
export default {
  data () {
    return {
        selected: '首页',
        tabList: [
            {
                img: 'index',
                url: '/',
                name: '首页'
            },
            {
                img: 'brand',
                url: '/brandsale',
                name: '名品特卖'
            },
            {
                img: 'live',
                url: '/livecommunity',
                name: '直播特区'
            },
            {
                img: 'cart',
                url: '/shopcart',
                name: '购物车'
            },
            {
                img: 'me',
                url: '/myself',
                name: '我的'
            },
        ]
    }
  },
  computed: {
      otherSelect() {
          return this.$store.state.selectTab
      }
  },
  watch: {
    //   监听是否从其他的页面跳转过来的数据
    otherSelect() {
        this.selected = this.otherSelect
    },
    selected: {
        handler(val, oldval) {
            for(let i = 0, len = this.tabList.length; i < len; i++) {
                if(this.tabList[i].name === val) {
                    this.$router.push(this.tabList[i].url)
                }
            }
        }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus" scoped>
@import '../common/stylus/mixin.styl'
.mint-tabbar
  background #fff
  border-1px-top()
  height 1.5625rem
  padding-top -.4rem
  .mint-tab-item.is-selected
    color #FE4070
    background #fff
    text-decoration none
</style>

