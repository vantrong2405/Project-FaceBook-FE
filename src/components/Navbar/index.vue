<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="z-50 grid h-14 w-full grid-cols-2 items-center bg-white shadow-sm md:grid-cols-3">
    <SearchBar class="z-20" />
    <div id="mid" class="hidden h-full items-center justify-center gap-2 md:flex">
      <router-link to="/home">
        <div
          id="svg-home-box"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 lg:w-40"
        >
          <svg-home class="icon w-7" />
        </div>
      </router-link>
      <router-link to="/video">
        <div
          id="svg-groups-box"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 lg:w-40"
        >
          <svg-video class="icon w-7" />
        </div>
      </router-link>
      <router-link to="/market">
        <div
          id="svg-groups-box"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 lg:w-40"
        >
          <svg-market class="icon w-7" />
        </div>
      </router-link>
      <!-- <router-link to="/group">
        <div id="svg-groups-box"
          class="product-items lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-groups class="w-7 icon" />
        </div>
      </router-link> -->
      <router-link to="/game">
        <div
          id="svg-groups-box"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 lg:w-40"
        >
          <svg-game class="icon w-7" />
        </div>
      </router-link>
    </div>
    <RightMenu />
  </div>
</template>

<script>
// SVG
import svgHome from "../svg/svgHome.vue"
import svgGroups from "../svg/svgGroups.vue"
import svgVideo from "../svg/svgVideo.vue"
import svgMarket from "../svg/svgMarket.vue"
import svgGame from "../svg/svgGame.vue"
import SearchBar from "./SearchBar.vue"
import RightMenu from "./RightMenu.vue"
import { getProfileFromLS } from "@/utils/auth"

export default {
  props: {
    leftBarMove: {
      type: Number,
      default: 0
    }
  },
  components: {
    svgHome,
    // svgGroups,
    SearchBar,
    RightMenu,
    svgVideo,
    svgMarket,
    svgGame
  },
  mounted() {
    this.activeItems()
    this.userCurrent = getProfileFromLS()
  },
  data() {
    return {
      userCurrent: {}
    }
  },
  methods: {
    activeItems() {
      const product_items = document.querySelectorAll(".product-items")
      product_items.forEach((value, index) => {
        value.addEventListener("click", () => {
          product_items.forEach((item) => {
            if (item !== value) {
              item.classList.remove("active-icon")
              item.classList.remove("active-tag")
            }
          })
          value.classList.add("active-icon")
          value.classList.add("active-tag")
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
