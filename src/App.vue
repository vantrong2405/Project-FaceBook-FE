<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script>
import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js'
const default_layout = 'default'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  }
}
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css');
/* @import './assets/admin/css/bootstrap.min.css';
@import './assets/admin/css/bootstrap-extended.css'; */
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
</style>
