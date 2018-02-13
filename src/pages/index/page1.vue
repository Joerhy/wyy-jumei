<template lang="pug">
.goods
    .content-wrapper(ref="contentWrapper")
        div
            ul.types
                li.type-item(v-for="(item, index) in types", :key="index")
                    img(:src="item.src")
                    p.text {{item.name}}
            .activity
                span.title 好物低价-限时购
                span.time 20:00
                span.detail {{hour}}:
                span.detail {{min}}:
                span.detail {{sec}}
                span.more.arrow-right 更多
                ActivityList
            section.mixcart-list
                .tab-title
                    span.title-item(v-for="(item, index) in tabs",
                    @click="tabClick(index)", :class="index===tabIndex?'tab-click':''") {{item}}
                GoodsList
</template>

<script>
import BScroll from 'better-scroll'
import ActivityList from '@/components/ActivityList.vue'
import GoodsList from '@/components/GoodsList.vue'
import data from '../../common/util/mock.js'
export default {
  data () {
    return {
        types: [
        {name: '分类', src: 'static/icon/type.jpg'},
        {name: '签到', src: 'static/icon/sign.jpg'},
        {name: '凑团', src: 'static/icon/tuan.jpg'},
        {name: '宝箱', src: 'static/icon/box.jpg'},
        {name: '颜值贷', src: 'static/icon/money.jpg'},
      ],
      tabs: ["今日10点上线", "明日10点预告"],
      hour: 23,
      min: 59,
      sec: 59,
      interval: null,
      tabIndex: 0
    }
  },
  components: {
      ActivityList,
      GoodsList
  },
  mounted() {
      
      },
  created() {
      //   created是数据初始化的过程，axios会自动解析json格式
      this.$store.dispatch('selectTab', '首页')
    axios.get('/api/data')
    .then(res => {
        this.$store.dispatch('addActivity', res.data.activityLists)
        this.$store.dispatch('goodsList', res.data.goodsList)
        // 异步的数据放在这里，等待他们完成
        this.$nextTick(() => {
            this._initScroll()
        })
    }).catch(err => {
        console.log(err)
    })
      this.interval = setInterval(() => {
          if(this.sec > 0) {
              this.sec--
          } else {
              this.sec = 60
              if(this.min > 0) {
                  this.min--
              } else {
                  this.min = 60
                  this.hour--
              }
          }
          if(this.hour == 0 && this.min == 0 && this.sec == 0) {
              clearInterval(this.interval)
          }
      }, 1000)
  },
  methods: {
      _initScroll() {
          this.typeScroll = new BScroll(this.$refs.contentWrapper, {
              click: true,
              probeType: 3
          })
      },
      tabClick(index) {
          this.tabIndex = index
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus"  scoped>
@import '../../common/stylus/mixin.styl'
.goods
  overflow hidden
  position absolute
  width 100%
  top 2.4rem
  bottom 1.5rem
  display flex
  .content-wrapper
    flex 1
    .types
      // 合理利用弹性布局
      margin-left 0.4rem
      margin-top .4275rem
      height 2rem
      .type-item
        float left
        margin-right .5rem
        text-align center
        img
          height 1.42rem
          width 1.42rem
        .text
          margin-top 0.2rem
    .activity
      padding .6875rem .375rem .15625rem .446667rem
      font-size .346667rem
      color mainColor
      position relative
      border-line()
      .title
        font-size .446667rem
      .time
        font-size .346667rem
        color fontColor
        vertical-align top
        display inline-block
        padding 0rem .45875rem 0rem 1.125rem
      .detail
        border .01rem solid #E4E4E4
        width .88125rem
        height .5625rem
        padding 0rem .09rem
        border-radius 20%
      .more
        position relative
        color fontColor
        arrow-right(.2rem)
    .mixcart-list
      margin-top .5rem
      .tab-title
        padding 0px .8375rem .12rem
        font-size .46875rem
        .title-item
          color fontColor
          &:first-child
            margin-right 1.8375rem
          &.tab-click
            color mainColor

</style>

