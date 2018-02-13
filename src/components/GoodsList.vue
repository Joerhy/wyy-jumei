<template lang="pug">
ul.online-wrap
    li.deal-item.border-line(v-for="(good, index) in goodsList", :key="index", @click="findProduct(good.id)")
        .good-img
            img(v-lazy="good.imgs[0]", alt="图片")
        .good-detail
            .good-title {{good.title}}
            .price-wrap
                .price-list
                    span.jumei-price ￥{{good.nowPrice}}
                    span.del-price.price-line ￥{{good.oldPrice}}
                .buy-num {{good.buyNum}} 人购买
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
      goodsList() {
          let data = JSON.parse(JSON.stringify(this.$store.state.activityList))
          data.push(...this.$store.state.activityList)
          return data
      }
  },
  methods: {
      findProduct(id) {
          let isfind = false
        //   可以进行async异步请求
        axios.get('/api/data')
        .then(res => {
            this.$store.dispatch('productInfo', res.data.activityLists[id-1])
            // 在这里添加路由就不会出现调整页面的数据替换 异步
            this.$router.push({name: 'product', params: {id: id}})
        }).catch(err => {
            console.log(err)
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
@import '../common/stylus/mixin.styl'
.online-wrap
  padding-bottom .6rem
  .deal-item
    position relative
    border-line()
    padding .266667rem 0.241rem
    display flex
    position relative
    .good-img
      display inline-block
      width 3.40625rem
      height 2.96875rem
      img
        height 100%
      img[lazy=loading]
        height 100%
        margin auto
        background fontTint
    .good-detail
      padding-left .21875rem
      width 9rem
      .good-title
        font-size .3675rem
        line-height .5rem
        width 60%
      .price-wrap
        position absolute
        color fontTint
        bottom 10%
        .price-list
          .jumei-price
            color mainColor
            font-size .5125rem
          .del-price
            position relative
            font-size .275rem
            price-line(fontTint, .2)
        .buy-num
          padding .1rem
          font-size 12px
</style>

