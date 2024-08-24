<template>
  <div class="relative flex h-14 w-72 items-center gap-1 py-2 sm:gap-2 -z-30"
    :class="isFocus ? 'w-screen pr-4 sm:w-72' : ''">
    <router-link to="/home">
      <div class="__logo">
        <img src="/src/assets/images/logo.png" alt=""
          class="ml-4 w-10 cursor-pointer text-face-blue transition-opacity duration-500"
          :class="isFocus ? 'absolute -translate-x-96 transform opacity-0' : 'opacity-100'" />
      </div>
    </router-link>
    <div
      class="flex cursor-pointer items-center justify-center rounded-full p-2 text-myGray-800 transition-opacity duration-500 hover:bg-myGray-800"
      :class="!isFocus ? 'absolute -translate-x-96 transform opacity-0' : 'opacity-100'">
      <svg-left class="w-5 text-gray-600" />
    </div>
    <div
      class="ml-1 flex h-full w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 sm:m-0 xl:flex-1 xl:cursor-text xl:px-4"
      @click="isFocus = true" :class="isFocus ? 'flex-1 cursor-text px-4' : ''">
      <svg-search class="w-5 text-myGray-500" fill="currentColor"
        :class="isFocus ? 'absolute -translate-x-96 transform opacity-0' : 'opacity-100'" />
      <input
        class="h-full w-full border-none bg-transparent px-2 text-sm font-normal text-myGray-250 outline-none focus:outline-none focus:ring-transparent xl:block"
        :class="isFocus ? 'block' : 'hidden'" type="text" placeholder="Search Facebook" @focus="isFocus = true"
        @blur="isFocus = false" v-model="textSearch" @input="handleChangeIsShowAll()" onchange="searchInfoUser()"
        v-on:keyup.enter="this.$router.push(`/search/${this.textSearch}`)" />
    </div>
    <ul class="absolute left-[5px] top-[57px] z-50 w-[105%] cursor-pointer rounded-lg bg-white py-[5px] shadow-xl"
      v-if="textSearch">
      <li v-if="textSearch && isShowAll">
        <router-link :to="`/search/${textSearch}`" @click="
          this.textSearch = '',
          this.isShowAll = false
          ">
          <div class="mx-auto h-[45px] w-[95%] rounded-lg hover:bg-[#F2F2F2]">
            <div class="mx-[10px] flex h-full w-full items-center gap-2">
              <div>
                <DoorOpen />
              </div>
              <p class="text-[15px] font-medium text-black">Kết quả tìm kiếm cho "{{ textSearch }}"</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import svgSearch from "../svg/svgSearch.vue"
import svgFacebook from "../svg/svgFacebook.vue"
import svgLeft from "../svg/svgLeft.vue"
import { DoorOpen } from "lucide-vue-next"
export default {
  components: {
    svgSearch,
    svgLeft,
    DoorOpen
  },
  data() {
    return {
      isFocus: false,
      textSearch: "",
      isShowAll: false
    }
  },
  computed: {},
  methods: {
    async handleChangeIsShowAll() {
      this.isShowAll = false
      this.showAllTimeout = clearTimeout(this.showAllTimeout)
      setTimeout(() => {
        this.isShowAll = true
      }, 1000)
    }
  }
}
</script>