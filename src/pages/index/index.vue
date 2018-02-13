<template lang="pug">
.page
    .header 
        .left(@click="leftVisible=true") 
            img.iconImg(src="../../assets/icon/magic.png")
        .search(@click="searchVisible=true")
            img(src="../../assets/icon/search_icon.png", alt="搜索")
            span.text 搜索商品 分类 功效 用户
        .right  
            img.iconImg(src="../../assets/icon/message.png")
    mt-popup.search-content(v-model="searchVisible", position="right")
        ul.searchType
            li.item.search-active(v-for="item in searchTypeList") {{item.name}}
        .input-block    
            input.search-input(type="text", placeholder="搜索 商品 分类 功效")
            span.cancel(@click="searchVisible=false") 取消
        ul.hot-block
            li.hot-item 热搜
            li.hot-item(v-for="item in hots") {{item}}
    mt-popup.left-block(v-model="leftVisible", position="left", modal="true")
        ul.left-content
            li.left-item(v-for="item in lefts") {{item}}
    navbar(:navs="navs", :chooseItem="chooseItem")
    v-touch(@swipeleft="onSwipeleft", @swiperight="onSwiperight", :priority="1")
        transition(:name="transitionName")
            keep-alive
                router-view.Router(@click="start($event)")
</template>

<script>
import navbar from '@/components/NavBar.vue'
export default {
  data () {
    return {
        leftVisible: false,
        searchVisible: false,
        navs: ['特卖','极速免税店','母婴','轻奢','服饰','鞋包','食品'],
        searchTypeList: [
            {
                name: '商品'
            },
            {
                name: '口碑'
            },
            {
                name: '用户'
            },
            {
                name: '店铺'
            },
        ],
        transitionName: 'slide-right',
        chooseItem: 0,
        lefts: ["我的订单","现金券","二维码","宝箱"],
        hots: ["颜值贷","口红","面膜","洗面奶","防晒喷雾","香水","眼影","眉笔","遮瑕","粉饼","精华","补水"]
    }
  },
  components: {
      navbar
  },
  computed: {
      getNavState() {
          return this.$store.state.navState
      }
  },
  created() {
      this.$router.push('/index/page1')
  },
  watch: {
    //   监听计算属性，它来自于vuex中的状态
    getNavState(state) {
        var index = state + 1;
        // 跳转子页面this.$router.push()
        this.$router.push('/index/page' + index)
    },
    '$route'(to, from) {
        let toNum = to.name.replace(/[^0-9]/ig, '')
        let fromNum = from.name.replace(/[^0-9]/ig, '')
        if(toNum > fromNum) {
           this.transitionName = 'slide-left' 
        } else {
            this.transitionName = 'slide-right' 
        }
    }
  },
  methods: {
        onSwipeleft() {
            let index = this.getNavState;
            if(this.$route.name == null) {
                return;
            }
            if(++index >= this.navs.length) {
                index = this.navs.length - 1

            }
            this.chooseItem = index + 1
            this.$store.state.navState = index
        },
        onSwiperight() {
            let index = this.getNavState;
            if(this.$route.name == null) {
                return;
            }
            if(--index < 0) {
                index = 0

            }
            this.chooseItem = index + 1
            this.$store.state.navState = index
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin.styl'
.header
  width 10rem
  .left
    margin .3rem .2rem 0rem .2rem
    display inline-block
    vertical-align middle
    .iconImg
      height .9875rem
      width .9875rem
  .search
    display inline-block
    height .96875rem
    width 6.9375rem
    background mainTint
    border-radius .475rem
    border .001rem solid mainTint
    text-align center
    font-size .446667rem
    color rgba(7, 17, 27, .6)
    line-height .96875rem
    vertical-align middle
    margin-top .1rem
    img
      width .7rem
      height .7rem
      vertical-align middle
    .text
    // 文字图片设置同样的高度即可 在来来个
      height .7rem
      display inline-block
      line-height .7rem
  .right
    vertical-align middle
    display inline-block
    margin 0rem .1rem 0rem .3rem
    .iconImg
      height .7875rem
      width .7875rem
.search-content
  height 100%
  width 100%
  .searchType
    margin .5rem 1.71875rem 0.46875rem 0.4125rem
    display flex
    .item 
      flex 1
      text-align center
      color fontTint
      font-size .4rem
      &.search-active
        color mainColor  
  .input-block
    margin-left 0.4125rem
    .search-input
      width 7.0125rem
      height 1rem
      border-radius .12rem
      border 1px solid mainColor
      display inline-block
      font-size .44rem
      padding-left .8rem
    .cancel
      display inline-block
      height 1rem
      width 1.6rem
      text-align center
      font-size .44rem
      color fontTint
  .hot-block
    margin 0.625rem .7rem 0rem 0.4125rem
    font-size 0.4rem
    .hot-item
      float left
      height 0.6375rem
      line-height 0.6375rem
      min-width 1rem
      padding 0.14rem 0.15rem
      border-radius .15rem
      text-align center
      border .02rem solid borderColor
      margin 0rem 0.3125rem 0.3125rem 0rem
      &:first-child
        border none 
        width 1.4rem
        font-weight 600
        text-align right
.left-block
  position absolute
  left 0.3125rem
  top 4rem
  width 3.59375rem
  height 5.6rem 
  display flex
  flex-direction column
  box-shadow 0rem 0rem .3rem fontColor
  .left-item
    text-align center
    height 1.4rem
    line-height 1.4rem
    font-size .47rem
    color fontColor
    border-1px(60%,20%)
    &:last-child
      border-1px(0)

.Router
  width 100%;
  transition: all .4s ease
  // slide-right-leave-active 右滑动 左路由 
  //在过渡的结束状态 跳向下一个的页面的透明度要设置为0  过渡结束的时候都是不显示的
  // slide-right-enter中的透明度为0 代表过渡刚进入也是不显示的
  &.slide-left-enter, &.slide-right-leave-active 
    opacity 0
    // 向左滑动 其实路由向右走 然后
    transform translateX(100%)
  &.slide-left-leave-active, &.slide-right-enter
    opacity 0
    transform translateX(-100%)

</style>

