<template>
  <div class="relative w-80 hidden xl:block">
    <div class="absolute">
      <div class="fixed w-80">
        <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
          <div id="left-bar-top" class="w-full">

            <!-- start -->
            <ul>
              <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                <MonitorPlay class=" rounded-full" />
                <span class="font-semibold text-tiny">Trang chủ</span>
              </li>
              <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                <Tv2 class=" rounded-full" />
                <span class="font-semibold text-tiny">Trực tiếp</span>
              </li>
              <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                <Film class=" rounded-full" />
                <span class="font-semibold text-tiny">Reels</span>
              </li>
              <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                <Clapperboard class=" rounded-full" />
                <span class="font-semibold text-tiny">Chương trình</span>
              </li>
              <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                <Rocket class=" rounded-full" />
                <span class="font-semibold text-tiny">Khám phá</span>
              </li>
              <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                <Save class=" rounded-full" />
                <span class="font-semibold text-tiny">Video đã lưu</span>
              </li>
            </ul>

            <!-- end -->

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ms-80">
    <div class="mx-56">
      <div class="flex justify-between items-center shadow-md rounded-lg mb-5 border">
        <div class="p-3 mt-3">
          <h1 class="font-bold text-xl mb-3">Video mới dành cho bạn</h1>
          <div class="flex items-center mb-3">
            <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
              class="w-14 h-14 rounded-full mr-3" alt="">
            <div>
              <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
              <div class="flex items-center">
                <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 mt-12">
          <div class="flex mt-2 items-center">
            <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
              class="w-14 h-14 rounded-full mr-3" alt="">
            <div>
              <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
              <div class="flex items-center">
                <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="shadow-md my-5 rounded-lg border" v-for="index in 10" :key="index">
        <div class="flex  mb-3 justify-between m-4">
          <div class="flex">
            <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
              class="w-12 h-12 rounded-full mr-3" alt="">
            <div>
              <div>
                <div class="flex items-center">
                  <p class="font-semibold mr-2">Nhật Dương</p>
                  <p class="text-[#0866FD]">Theo dõi</p>
                </div>
                <p class="text-xs text-gray-500">2 tháng 2 lúc 22:31</p>
              </div>
            </div>
          </div>
          <Ellipsis />
        </div>
        <p class="text-xs font-semibold mb-2 mx-3">HELLO WORLD</p>
        <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
          class="w-full h-[500px] object-cover mb-4 rounded-lg shadow-md" alt="">
        <div class="flex items-center text-gray-500  mx-3 py-2 justify-between">
          <div class="flex items-center">
            <i class="fas fa-thumbs-up mr-2"></i>
            <p>Like</p>
            <i class="fas fa-comment ml-4 mr-2"></i>
            <p>Comment</p>
            <i class="fas fa-share ml-4 mr-2"></i>
            <p>Share</p>
          </div>
          <div class="flex text-xs">
            <i
              class="fas fa-thumbs-up ml-auto rounded-full bg-[#049CFD] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
            <i
              class="fa-solid fa-heart mr-0.5 rounded-full bg-[#FC464E] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
            <span>Thanh Thư và 22K người khác</span>
            <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
            <p>80 bình luận</p>
            <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
            <p>10 triệu lượt xem</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MonitorPlay } from 'lucide-vue-next';
import { Tv2 } from 'lucide-vue-next';
import { Film } from 'lucide-vue-next';
import { Clapperboard } from 'lucide-vue-next';
import { Rocket } from 'lucide-vue-next';
import { Save } from 'lucide-vue-next';
import { Ellipsis } from 'lucide-vue-next';
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    MonitorPlay,
    Tv2,
    Film,
    Clapperboard,
    Rocket,
    Save,
    Ellipsis
  }
}
</script>