<template lang="pug">
.activity-wrapper.border-line(ref="activityWrapper")
    ul.activity-products
        li.activity-product(
            v-for="(item, index) in activityList", 
            :key="index",
            @click="findProduct(item.id)")
            span.discount {{item.discount}}
                span 折
            .product-img
                img(:src="item.imgs[0]")
            .product-detail
                .product-title {{item.title}}
                .price-wrap 
                    span.jumei-price ￥{{item.nowPrice}}
                    span.del-price.price-line ￥{{item.oldPrice}}
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
    }
  },
  computed: {
      activityList() {
          return this.$store.state.activityList
      }
  },
  methods: {
      findProduct(id) {
          let isfind = false
        //   可以进行async异步处理
        axios.get('/api/data')
        .then(res => {
            this.$store.dispatch('productInfo', res.data.activityLists[id-1])
            // 在这里添加路由就不会出现调整页面的数据替换 异步
            this.$router.push({name: 'product', params: {id: id}})
        }).catch(err => {
            console.log(err)
        })
      }
  },
  created() {
      this.$nextTick(() => {
          this.activityScroll = new BScroll(this.$refs.activityWrapper, {
              click: true,
              scrollX: true
          })
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
@import '../common/stylus/mixin.styl'
.activity-wrapper
  overflow hidden
  width 100%
  .activity-products
    width 140%
    white-space nowrap
    .activity-product
      display inline-block
      width 2.54375rem
      height 4.19375rem
      padding-right .2rem
      padding-top .5rem
      position relative
      .discount
        position absolute
        width .90625rem
        height .90625rem
        background mainColor
        border-radius 50%
        color #fff
        line-height .90625rem
        text-align center
        font-size 0.346667rems
      .product-img
        width 1.4875rem
        height 1.84375rem
        img
          height 100%
      .product-detail
        padding .46875rem 0px .21875rem 0px
        .product-title
          color #000
          font-size .356667rem
          white-space pre-wrap
          line-height .5rem
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp  2
          display -webkit-box
          -webkit-box-orient vertical
          width 2.4rem
        .price-wrap
          padding-top .3125rem
          .jumei-price
            font-size .4rem
          .del-price
            color fontTint
            position relative
            price-line(fontTint, .2)
</style>

