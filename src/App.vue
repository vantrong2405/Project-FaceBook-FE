<template class="bg-[#E4E6E8]">
  <div>
    <header>
      <HeaderVue />
    </header>
    <!-- content -->
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <!-- end content -->

  </div>
</template>
<script>
import HeaderVue from './components/masterpage/Header.vue'
import FooterVue from './components/masterpage/Footer.vue'

export default {
  components: {
    HeaderVue
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
@import './assets/css/input.css';
</style>
