<template class="bg-[#E4E6E8]">
  <div>
    <header>
      <HeaderVue />
    </header>
    <!-- content -->
    <div class="wrapper">
      <router-view :items="items" :showAllItems="showAllItems"
        @handleChangShowAllItemsEvent="handleChangShowAllItemsEvent"></router-view>
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
      items: [
        { id: 1, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 2, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 3, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 4, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 5, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 6, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 7, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 8, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 9, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 10, img: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
      ],
      showAllItems: false
    }
  },
  computed: {

  },
  methods: {
    handleChangShowAllItemsEvent() {
      this.showAllItems = !this.showAllItems
    }
  }
}
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
@import './assets/css/input.css';
</style>
