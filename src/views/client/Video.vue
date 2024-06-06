<template>
  <div class="h-screen bg-white shadow-md w-[22%] flex flex-col fixed top-[55px] left-0 pl-[5px] pt-[5px]">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex justify-between items-center">
          <h1 class="text-2xl font-bold">Nhóm</h1>
          <div
            class="h-[36px] w-[36px] rounded-full cursor-pointer flex items-center justify-center bg-[#E4E6EB] hover:bg-gray-300">
            <Settings />
          </div>
        </li>
        <li>
          <div class="w-full h-14 py-2 flex items-center">
            <div class="__logo"></div>
            <div
              class="h-9 flex items-center justify-center rounded-full cursor-pointer transition-opacity duration-500">
            </div>
            <div
              class="w-10 flex items-center justify-center h-full bg-gray-100 rounded-full overflow-hidden cursor-pointer xl:flex-1 xl:px-4 xl:cursor-text ml-1 sm:m-0">
              <svg-search class="w-5" fill="currentColor" />
              <input
                class="w-full h-full bg-transparent text-sm px-2 border-none outline-none xl:block focus:outline-none focus:ring-transparent"
                placeholder="Tìm kiếm nhóm" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1 pb-[22%] px-[10px] scroll-container">
      <div class="visible">
        <ul>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <MonitorPlay class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Trang chủ</span>
          </li>

          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Tv2 class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Trực tiếp</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Film class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Reels</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Clapperboard class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Chương trình</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Rocket class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Khám phá</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Save class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Video đã lưu</span>
          </li>
        </ul>
      </div>
      <!-- end -->
    </div>
  </div>
  <div class="bg-[#F0F2F5] float-right w-[calc(100%-22%)]">
    <div class="w-full h-full">
      <div class="mx-auto w-[58%]">
        <div class="flex justify-between items-center shadow-md rounded-lg mb-3 border bg-white mt-[15px]">
          <div class="p-3 mt-3">
            <h1 class="font-bold text-xl mb-3">Video mới dành cho bạn</h1>
            <div class="flex items-center mb-3">
              <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="w-14 h-14 rounded-full mr-3" alt="" />
              <div>
                <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
                <div class="flex items-center">
                  <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 mt-12">
            <div class="flex mt-2 items-center mb-4">
              <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="w-14 h-14 rounded-full mr-3" alt="" />
              <div>
                <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
                <div class="flex items-center">
                  <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="shadow-md my-5 rounded-lg border bg-white" v-for="index in 10" :key="index">
          <div class="flex mb-3 justify-between m-4">
            <div class="flex">
              <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="w-12 h-12 rounded-full mr-3" alt="" />
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
          <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="w-full h-[500px] object-cover mb-1 shadow-md"
            alt="" />
          <div class="flex items-center text-gray-500 mx-3 py-2 justify-between">
            <div class="flex">
              <div class="flex items-center px-[10px] py-[6px] cursor-pointer hover:bg-[#F2F2F2] rounded-lg">
                <i class="fas fa-thumbs-up mr-2"></i>
                <p>Like</p>
              </div>
              <div class="flex items-center px-[10px] py-[6px] cursor-pointer hover:bg-[#F2F2F2] rounded-lg">
                <i class="fas fa-comment mr-2"></i>
                <p>Comment</p>
              </div>
              <div class="flex items-center px-[10px] py-[6px] cursor-pointer hover:bg-[#F2F2F2] rounded-lg">
                <i class="fas fa-share mr-2"></i>
                <p>Share</p>
              </div>
            </div>
            <div class="flex text-xs">
              <i
                class="fas fa-thumbs-up ml-auto rounded-full bg-[#049CFD] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
              <i
                class="fa-solid fa-heart mr-0.5 rounded-full bg-[#FC464E] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
              <span class="mr-2 cursor-pointer hover:underline">Thanh Thư và 22K người khác</span>
              <p class="mr-2 cursor-pointer hover:underline">80 bình luận</p>
              <p>10 triệu lượt xem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MonitorPlay } from 'lucide-vue-next'
import { Tv2 } from 'lucide-vue-next'
import { Film } from 'lucide-vue-next'
import { Clapperboard } from 'lucide-vue-next'
import { Rocket } from 'lucide-vue-next'
import { Save } from 'lucide-vue-next'
import { Ellipsis } from 'lucide-vue-next'
import { Settings } from 'lucide-vue-next'
import { AlarmClockCheck } from 'lucide-vue-next' // icon đồng hồ
// video
import svgSearch from '../../components/svg/svgSearch.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    MonitorPlay,
    Tv2,
    Film,
    Clapperboard,
    Rocket,
    Save,
    Ellipsis,
    Settings,
    svgSearch
  }
}
</script>
