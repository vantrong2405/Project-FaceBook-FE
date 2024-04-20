<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="grid grid-cols-3 px-2 py-1">
    <div class="overflow-y-scroll h-dvh w-[70%]">
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
          <div class="text-[#0064D1] invisible cursor-pointer" data-modal-target="default-modal"
            data-modal-toggle="default-modal">
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
  <!-- Modal toggle -->


  <!-- Main modal -->
  <div id="default-modal" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Chỉnh sửa lối tắt
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Với lối tắt, bạn có thể nhanh chóng truy cập vào những việc mình hay làm nhất trên Facebook. Tuy lối tắt
            được
            sắp xếp tự động nhưng bạn có thể ghim nội dung nào đó để luôn thấy ở đầu hoặc ẩn khỏi danh sách.
          </p>

        </div>
        <!-- Modal footer -->
        <div class="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="default-modal" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
            accept</button>
          <button data-modal-hide="default-modal" type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
        </div>
      </div>
    </div>
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
        { id: 7, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 8, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 9, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 10, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 11, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 12, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 13, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 14, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 15, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
        { id: 16, url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFqXC4dShOxxeeIAbs7EmtfpjWidniF_5qmNaJ2eIX_mmWG2FNfPPdAq3ZEx7lEaOKZMgcGqjVyQf1BxciYsc_I', description: 'video' },
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
        { id: 11, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 12, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 13, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 14, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
        { id: 15, url: 'http://localhost:5173/src/assets/images/daihocduytan.jpg', description: 'DTU - K27 - Sinh viên Đại học Duy Tân 2021 (Official)' },
      ],
      showAllItemsGroup: false,
      showALlItemsTool: false
    }
  },
  computed: {
    displayedItemsTool() {
      return this.showALlItemsTool ? this.itemsTool : this.itemsTool.slice(0, 10);
    },
    displayedItemsGroup() {
      return this.showAllItemsGroup ? this.itemsGroup : this.itemsGroup.slice(0, 10);
    },
  },
  methods: {

  },

}
</script>
<style></style>
