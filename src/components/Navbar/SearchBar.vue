<script>
import svgSearch from '../svg/svgSearch.vue'
import svgFacebook from '../svg/svgFacebook.vue'
import svgLeft from '../svg/svgLeft.vue'

export default {
  components: {
    svgSearch,
    svgFacebook,
    svgLeft
  },
  data() {
    return {
      isFocus: false
    }
  }
}
</script>

<template>
  <div class="w-72 h-14 py-2 flex items-center gap-1 sm:gap-2" :class="isFocus ? ' w-screen pr-4 sm:w-72' : ''">
    <router-link to="/">
      <div class="__logo">
        <svg-facebook class="text-face-blue w-10 cursor-pointer ml-4 transition-opacity duration-500"
          :class="isFocus ? 'absolute transform -translate-x-96 opacity-0' : 'opacity-100'" />
      </div>
    </router-link>
    <div
      class="p-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-myGray-800 text-myGray-800 transition-opacity duration-500"
      :class="!isFocus ? 'absolute transform -translate-x-96 opacity-0' : 'opacity-100'">
      <svg-left class="w-5 text-gray-600" />
    </div>
    <div
      class="w-10 flex items-center justify-center h-full bg-gray-100 rounded-full overflow-hidden cursor-pointer xl:flex-1 xl:px-4 xl:cursor-text ml-1 sm:m-0"
      @click="isFocus = true" :class="isFocus ? 'flex-1 px-4 cursor-text' : ''">
      <svg-search class="w-5 text-myGray-500" fill="currentColor"
        :class="isFocus ? 'absolute transform -translate-x-96 opacity-0' : 'opacity-100'" />
      <input
        class="w-full h-full bg-transparent text-sm px-2 border-none outline-none text-myGray-250 font-normal xl:block focus:outline-none focus:ring-transparent"
        :class="isFocus ? 'block' : 'hidden'" type="text" placeholder="Search Facebook" @focus="isFocus = true"
        @blur="isFocus = false" />
    </div>
  </div>
</template>
