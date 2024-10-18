<template>
  <div class="z-20 h-full w-full bg-white font-face">
    <div class="relative z-20 h-14 w-full bg-white">
      <div class="absolute top-0 z-10 h-full w-full">
        <Navbar class="fixed" />
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar/index.vue"

export default {
  mounted() {
    this.userCurrent = JSON.parse(localStorage.getItem("profile"))
  },
  components: {
    Navbar
  },
  data() {
    return {
      userCurrent: {}
    }
  },
  methods: {}
}
</script>
<style></style>
