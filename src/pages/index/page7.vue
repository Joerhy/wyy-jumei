<template lang="pug">
.page
    .content(ref="popWrapper")
        ul
            li.item-list(v-for="(item, index) in pops", :keys="index")
                .pop-image
                    img(v-lazy="item.img")
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
        pops: [
        {img: 'http://mp7.jmstatic.com/product/003/885/3885746_std/3885746_1000_1000.jpg@base@tag=imgScale&w=800&q=90?v=1505532027',},
        {img: 'http://mp6.jmstatic.com/product/003/781/3781300_std/3781300_1000_1000.jpg?v=1505095340&imageView2/2/w/800/q/90'},
        {img: 'http://mp5.jmstatic.com/product/003/690/3690558_std/3690558_1000_1000.jpg?v=1498205617&imageView2/2/w/800/q/90'},
        {img: 'http://mp6.jmstatic.com/product/000/827/827128_std/827128_1000_1000.jpg?v=1504669693&imageView2/2/w/800/q/90'},
        {img: 'http://mp5.jmstatic.com/product/003/597/3597234_std/3597234_1000_1000.jpg?v=1504773864&imageView2/2/w/800/q/90'},
      ]
    }
  },
  methods: {
    _initScroll () {
      this.popScroll = new BScroll(this.$refs.popWrapper, {
        click: true,
        probeType: 3
      })
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin.styl'
.page 
  overflow hidden
  height 100%
  position absolute
  left 0
  right 0
  .header
    position fixed
    left 0
    right 0
    top .1rem
    right 0
    height 1.24rem
    border-1px()
    line-height 1.24rem
    font-size .52rem
    text-align center
  .nav
    margin-left 1rem
    padding .1rem 0
  .content
    margin-top -0.1rem
    margin-bottom .5rem
    height 14rem
    .item-list
      background #ffffff
      height 5rem
      &:last-child
        padding-bottom 2rem
      .pop-image
        width 100%
        position relative
        img
          width 100%
        img[lazy=loading]
          display block
          width  100%
          height 5rem
          background #000
          margin auto
</style>
