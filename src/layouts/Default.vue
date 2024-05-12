<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="w-full h-full font-face z-20 bg-white">
    <div class="relative w-full h-14 bg-white z-20">
      <div class="absolute top-0 w-full h-full z-10">
        <Navbar class="fixed" />
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar/index.vue'

export default {
  components: {
    Navbar
  },
  mounted() {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style></style>
