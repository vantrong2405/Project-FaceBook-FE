<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="shadow-sm w-full h-14 grid grid-cols-2 md:grid-cols-3 items-center z-50 bg-white">
    <SearchBar class="z-20" />
    <div id="mid" class="h-full items-center justify-center gap-2 hidden md:flex">
      <router-link to="/home">
        <div id="svg-home-box"
          class="product-items lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-home class="w-7 icon" />
        </div>
      </router-link>
      <router-link to="/video">
        <div id="svg-groups-box"
          class="product-items lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-video class="w-7 icon" />
        </div>
      </router-link>
      <router-link to="/market">
        <div id="svg-groups-box"
          class="product-items lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-market class="w-7 icon" />
        </div>
      </router-link>
      <router-link to="/group">
        <div id="svg-groups-box"
          class="product-items lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-groups class="w-7 icon" />
        </div>
      </router-link>
      <router-link to="/game">
        <div id="svg-groups-box"
          class="product-items lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-game class="w-7 icon" />
        </div>
      </router-link>
    </div>
    <RightMenu />
  </div>
</template>

<script>
// SVG
import svgHome from '../svg/svgHome.vue'
import svgGroups from '../svg/svgGroups.vue'
import svgVideo from '../svg/svgVideo.vue'
import svgMarket from '../svg/svgMarket.vue'
import svgGame from '../svg/svgGame.vue'
import SearchBar from './SearchBar.vue'
import RightMenu from './RightMenu.vue'

export default {
  props: {
    leftBarMove: {
      type: Number,
      default: 0
    },
  },
  components: {
    svgHome,
    svgGroups,
    SearchBar,
    RightMenu,
    svgVideo,
    svgMarket,
    svgGame
  },
  mounted() {
    this.activeItems()
    this.userCurrent = JSON.parse(localStorage.getItem('profile'))
  },
  data() {
    return {
      userCurrent: {}
    }
  },
  methods: {
    activeItems() {
      const product_items = document.querySelectorAll('.product-items')
      product_items.forEach((value, index) => {
        value.addEventListener('click', () => {
          product_items.forEach((item) => {
            if (item !== value) {
              item.classList.remove('active-icon')
              item.classList.remove('active-tag')
            }
          })
          value.classList.add('active-icon')
          value.classList.add('active-tag')
        })
      })
    }
  }
}
</script>
<style>
#svg-home-box,
#svg-groups-box,
#svg-more-box {
  max-width: 120px;
  min-width: 56px;
}
</style>
