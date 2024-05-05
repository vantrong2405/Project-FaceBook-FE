<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="shadow-lg w-full h-14 grid grid-cols-2 md:grid-cols-3 items-center z-50 bg-white">
    <SearchBar class="z-20" />
    <div id="mid" class="h-full items-center justify-center gap-2 hidden md:flex">
      <router-link to="/">
        <div id="svg-home-box" @click="handleChangeleftBarMove(0)"
          class="lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-home class="w-7" />
        </div>
      </router-link>
      <router-link to="/video">
        <div id="svg-groups-box" @click="handleChangeleftBarMove(1)"
          class="lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-video class="w-7" />
        </div>
      </router-link>
      <router-link to="/market">
        <div id="svg-groups-box" @click="handleChangeleftBarMove(2)"
          class="lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-market class="w-7" />
        </div>
      </router-link>
      <router-link to="/group">
        <div id="svg-groups-box" @click="handleChangeleftBarMove(3)"
          class="lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-groups class="w-7" />
        </div>
      </router-link>
      <router-link to="/game">
        <div id="svg-groups-box" @click="handleChangeleftBarMove(4)"
          class="lg:w-40 h-12 flex items-center justify-center cursor-pointer hover:bg-myGray-900 rounded-lg transition-colors duration-300">
          <svg-game class="w-7" />
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
    }
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
  data() {
    return {}
  },
  methods: {
    handleChangeleftBarMove(data) {
      this.$emit('handleChangeleftBarMoveEvent', data)
    }
  },
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