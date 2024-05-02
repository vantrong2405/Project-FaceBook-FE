<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="w-full h-full font-face z-20 bg-white">
    <div class="relative w-full h-14 bg-white z-20">
      <div class="absolute top-0 w-full h-full z-10">
        <Navbar class="fixed" :leftBarMove="leftBarMove" @handleChangeleftBarMoveEvent="handleChangeleftBarMoveEvent" />
      </div>
    </div>
    <div class="flex gap-5">
      <div class="relative w-80 hidden xl:block">
        <div class="absolute">
          <LeftBar class="fixed w-80" :leftBarMove="leftBarMove" />
        </div>
      </div>
      <!-- start -->
      <router-view :leftBarMove="leftBarMove"></router-view>
      <!-- end -->
    </div>
    <div
      class="p-4 flex items-center justify-center rounded-full bg-white border-2 text-black fixed right-5 bottom-5 cursor-pointer hover:bg-myGray-700 transition-colors duration-300">
      <svg-new-message class="w-5" />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar/index.vue'
import LeftBar from '../components/LeftBar/index.vue'
import svgNewMessage from '../components/svg/svgNewMessage.vue'
export default {
  components: {
    Navbar,
    LeftBar,

    svgNewMessage
  },
  mounted() {
    this.activeItems()
  },
  data() {
    return {
      leftBarMove: 0
    }
  },
  methods: {
    activeItems() {
      const product_items = document.querySelectorAll('.product-items a')
      product_items.forEach((value, index) => {
        value.onclick = () => {
          product_items.forEach((item) => {
            if (item !== value) {
              item.classList.remove('active-tag')
              const icon = item.querySelector('i')
              if (icon) {
                icon.classList.remove('active-icon')
              }
            }
          })
          // Thêm class 'active' cho phần tử hiện tại
          value.classList.add('active-tag')
          const icon = value.querySelector('i')
          if (icon) {
            icon.classList.add('active-icon')
          }
        }
      })
    },
    handleChangeleftBarMoveEvent(data) {
      this.leftBarMove = data
      // console.log(this.leftBarMove);
    }
  }
}
</script>
<style></style>
