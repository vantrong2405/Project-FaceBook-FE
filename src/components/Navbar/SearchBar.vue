<script>
import svgSearch from '../svg/svgSearch.vue'
import svgFacebook from '../svg/svgFacebook.vue'
import svgLeft from '../svg/svgLeft.vue'
import { DoorOpen } from 'lucide-vue-next';
export default {
  components: {
    svgSearch,
    svgLeft,
    DoorOpen,
  },
  data() {
    return {
      isFocus: false,
      textSearch: '',
      isShowAll: false
    }
  },
  computed: {

  },
  methods: {
    async handleChangeIsShowAll() {
      this.isShowAll = false
      this.showAllTimeout = clearTimeout(this.showAllTimeout);
      setTimeout(() => {
        this.isShowAll = true;
      }, 1000);
    },
    async searchInfoUser() {

    }

  },

}
</script>

<template>
  <div class="w-72 h-14 py-2 flex items-center gap-1 sm:gap-2 relative"
    :class="isFocus ? ' w-screen pr-4 sm:w-72' : ''">
    <router-link to="/home">
      <div class="__logo">
        <img src="/src/assets/images/logo.png" alt=""
          class="text-face-blue w-10 cursor-pointer ml-4 transition-opacity duration-500"
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
        @blur="isFocus = false" v-model="textSearch" @input="handleChangeIsShowAll()" onchange="searchInfoUser()"
        v-on:keyup.enter="  this.$router.push(`/search/${this.textSearch}`);" />

    </div>
    <ul class="absolute top-[57px] left-[5px] w-[105%] bg-white py-[5px] cursor-pointer shadow-xl rounded-lg z-50"
      v-if="textSearch">
      <li v-if="textSearch && isShowAll">
        <router-link :to="`/search/${textSearch}`" @click="this.textSearch = ''; this.isShowAll = false">
          <div class="w-[95%] h-[45px] hover:bg-[#F2F2F2] mx-auto rounded-lg">
            <div class="w-full h-full flex items-center mx-[10px] gap-2">
              <div>
                <DoorOpen />
              </div>
              <p class="text-[15px] text-black font-medium">
                Kết quả tìm kiếm cho "{{ textSearch }}"
              </p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
