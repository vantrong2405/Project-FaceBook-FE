<template>
  <div>
    <RouterLink to="/" class="no-underline">Chuyển đến trang home</RouterLink>
    <br>
    <RouterLink to="/video">Chuyển đến trang video</RouterLink>
    <header>
      <HeaderVue />
    </header>
    <!-- content -->
    <div class="wrapper">
      <router-view></router-view>
    </div>

    <footer>
      <FooterVue />
    </footer>
  </div>
</template>
<script>
import HeaderVue from './components/masterpage/Header.vue'
import FooterVue from './components/masterpage/Footer.vue'
import './assets/css/input.css';
export default {
  components: {
    HeaderVue, FooterVue
  }
}
</script>
<style></style>
