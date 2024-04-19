<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="grid grid-cols-3 px-2 py-1">
    <div class="overflow-y-auto h-[670px] w-[70%]">
      <RouterLink to="/">
        <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-1 rounded-md mt-3">
          <div class=" w-[33px] h-[33px] overflow-hidden rounded-full mr-2">
            <img
              src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c70.23.333.334a_cp0_dst-jpg_s60x60&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=p44wDGH_5w4Ab5VfH8e&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDWMWJpsa3BH-OKSNXfz0NRcirkfVKgo8Jkhsiua-SFzw&oe=6626636E"
              alt="" width="100%" />
          </div>
          <span class="font-medium text-[15px]">Văn Trọng</span>
        </a>
      </RouterLink>
      <template v-for="(value, key) in displayedItemsTool" :key="key">
        <RouterLink to="/">
          <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-1 rounded-md">
            <div class="mr-2">
              <i data-visualcompletion="css-url" v-bind:style="{
                'background-image': 'url(\'' + value.url + '\')',
                'background-position': '0px -304px',
                'background-size': '38px 570px',
                'width': '33px',
                'height': '33px',
                'background-repeat': 'no-repeat',
                'display': 'inline-block'
              }">
              </i>


            </div>
            <span class="font-medium text-[15px] line-clamp-2">Video</span>
          </a>
        </RouterLink>
      </template>

      <RouterLink to="/">
        <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-2 rounded-md"
          v-if="showALlItemsTool === false" @click="showALlItemsTool = true; displayedItemsTool;">
          <div class="mr-2">
            <div class="rounded-full py-1 px-2 bg-[#cccfd34f]">
              <i class="fa-solid fa-angle-down fa-md"></i>
            </div>
          </div>
          <span class="font-medium text-[15px]">Xem
            thêm</span>
        </a>
        <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-2 rounded-md"
          v-if="showALlItemsTool === true" @click="showALlItemsTool = false; displayedItemsTool">
          <div class="mr-2">
            <div class="rounded-full py-1 px-2 bg-[#cccfd34f]">
              <i class="fa-solid fa-angle-up fa-md"></i>
            </div>
          </div>
          <span class="font-medium text-[15px]">Ẩn
            bớt</span>
        </a>
      </RouterLink>
      <hr class="m-2">
      <div class=" item-group">
        <div class="m-2 flex justify-between items-center">
          <div class="text-[17px] font-medium text-[#65676B]">Lối tắt của bạn</div>
          <div class="text-[#0064D1] invisible cursor-pointer">
            Chỉnh sửa
          </div>
        </div>
        <template v-for="(value, key) in displayedItemsGroup" :key="key">
          <RouterLink to="/">
            <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-1 rounded-md">
              <img src="http://localhost:5173/src/assets/images/daihocduytan.jpg" alt="" class="w-[33px] h-[33px] mr-2">
              <span class="font-medium text-[15px] line-clamp-2">DTU - K27 - Sinh viên Đại học Duy Tân 2021
                (Official)</span>
            </a>
          </RouterLink>
        </template>
        <RouterLink to="/">
          <!-- txt -->
          <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-2 rounded-md"
            v-if="showAllItemsGroup === false" @click="showAllItemsGroup = true; displayedItemsGroup">
            <div class="mr-2">
              <div class="rounded-full py-1 px-2 bg-[#cccfd34f]">
                <i class="fa-solid fa-angle-down fa-md"></i>
              </div>
            </div>
            <span class="font-medium text-[15px]">Xem
              thêm</span>
          </a>
          <a href="#" class="flex items-center hover:bg-[#cccccc6f] hover:cursor-pointer p-2 rounded-md"
            v-if="showAllItemsGroup === true" @click="showAllItemsGroup = false; displayedItemsGroup">
            <div class="mr-2">
              <div class="rounded-full py-1 px-2 bg-[#cccfd34f]">
                <i class="fa-solid fa-angle-up fa-md"></i>
              </div>
            </div>
            <span class="font-medium text-[15px]">Ẩn
              bớt</span>
          </a>
        </RouterLink>
        <div class="flex flex-wrap mb-2">
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Quyền riêng tư</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Điều khoản</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Quảng cáo</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Lựa chọn</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Quảng cáo</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">
              <i data-visualcompletion="css-url" class="x1b0d499 x1d69dk1"
                style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/URWFZWqtz7m.png?_nc_eui2=AeHJRKY6U27CN-ocGFiTpwav0cTZKKl7RSTRxNkoqXtFJHocBvH1Y8oGUkLwSe8oQzaBeWBV0eXdJ83XdYygsAtW&quot;); background-position: 0px -872px; background-size: 26px 984px; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i>
            </a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Cookie</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Xem thêm</a>
          </router-link>
          <router-link to="" class="mx-1">
            <a href="" class="text-[13px] hover:underline hover:underline-offset-3">Meta © 2024</a>
          </router-link>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {
  mounted() {
  },
  data() {
    return {
      itemsTool: [
        { id: 1, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 2, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 3, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 4, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 5, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 6, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' }
      ],
      itemsGroup: [
        { id: 1, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 2, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 3, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 4, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 5, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 6, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 7, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 8, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 9, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 10, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
      ],
      showAllItemsGroup: false,
      showALlItemsTool: false
    }
  },
  computed: {
    displayedItemsTool() {
      return this.showALlItemsTool ? this.itemsTool : this.itemsTool.slice(0, 4);
    },
    displayedItemsGroup() {
      return this.showAllItemsGroup ? this.itemsGroup : this.itemsGroup.slice(0, 7);
    },
  },
  methods: {

  },

}
</script>
<style></style>
