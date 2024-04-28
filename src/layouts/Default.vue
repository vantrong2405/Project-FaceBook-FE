<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="w-full h-full font-face">
        <div class="relative w-full h-14">
            <div class="absolute top-0 w-full h-full">
                <Navbar class="fixed" />
            </div>
        </div>
        <div class="flex gap-5">
            <div class="relative w-80 hidden xl:block">
                <div class="absolute">
                    <LeftBar class="fixed w-80" />
                </div>
            </div>
            <!-- start -->
            <router-view></router-view>
            <!-- end -->
        </div>
        <div class="
      p-4
      flex
      items-center
      justify-center
      rounded-full
      bg-myGray-250
      fixed
      right-5
      bottom-5
      cursor-pointer
      hover:bg-myGray-300
      transition-colors
      duration-300
    ">
            <svg-new-message class="w-5 text-myGray-800" />
        </div>
    </div>
</template>
<script>
import Navbar from "../components/Navbar/index.vue";
import LeftBar from "../components/LeftBar/index.vue";
import svgNewMessage from "../components/svg/svgNewMessage.vue";
export default {
    components: {
        Navbar,
        LeftBar,

        svgNewMessage,
    },
    mounted() {
    },

}
</script>
<style></style>
