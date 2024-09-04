<template>
  <div class="header-wrapper">
    <TopRocker></TopRocker>
    <MenuRocker></MenuRocker>
  </div>
  <div class="page-wrapper">
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>

  <div class="overlay toggle-icon"></div>
  <a href="javaScript:;" class="back-to-top"><i class="bx bxs-up-arrow-alt"></i></a>
  <FooterRocker></FooterRocker>
</template>
<script>
import FooterRocker from "../components/MasterpageAdmin/FooterRocker.vue"
import MenuRocker from "../components/MasterpageAdmin/MenuRocker.vue"
import TopRocker from "../components/MasterpageAdmin/TopRocker.vue"
import "../assets/admin/js/bootstrap.bundle.min.js"
import "../assets/admin/js/jquery.min.js"
import "../assets/admin/plugins/simplebar/js/simplebar.min.js"
import "../assets/admin/plugins/metismenu/js/metisMenu.min.js"
import "../assets/admin/plugins/perfect-scrollbar/js/perfect-scrollbar.js"
import "../assets/admin/js/index.js"
import "../assets/admin/js/app.js"
export default {
  name: "app",
  components: {
    FooterRocker,
    MenuRocker,
    TopRocker
  }
}
</script>
<style>
@import "../assets/admin/plugins/simplebar/css/simplebar.css";
@import "../assets/admin/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../assets/admin/css/app.css";
@import "../assets/admin/css/icons.css";
@import "../assets/admin/css/dark-theme.css";
@import "../assets/admin/css/semi-dark.css";
@import "../assets/admin/css/header-colors.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
</style>
