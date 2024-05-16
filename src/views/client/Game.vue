<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="h-screen bg-white shadow-md w-[22%] fixed top-[55px] left-0 px-[5px] pt-[5px]">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex justify-between items-center">
          <h1 class="text-2xl font-bold">Chơi game </h1>
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
    <div class="h-screen  scroll-container px-[10px]">
      <div class="visible">
        <ul>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Gamepad2 class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Chơi game</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <CircleUser class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Hoạt động trong game</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Bell class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Thông báo</span>
        </li>
        <hr class="mt-2 mb-2">
        <li class="mx-2">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-[18px]">Game của bạn</p>
            <p class="text-sm text-[#0866FE] py-[5px] px-[8px] hover:bg-[#F2F2F2] cursor-pointer">
              Xem tất cả
            </p>
          </div>
          <p class="text-xs text-[#898A8D] max-w-[300px] break-words">
            Hãy lưu game vào phần Game của bạn để tạo lối tắt tại đây
          </p>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900 mt-4">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Save class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Lưu game</span>
        </li>
        <hr class="my-2" />
        <p class="mx-2 font-semibold text-[18px]">Hạng mục</p>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Gamepad2 class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Tất cả game</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <TrainFront class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Hành động</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Map class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Phiêu lưu</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Computer class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Arcade</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Swords class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Chiến đấu</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Stamp class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Dùng bàn</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Castle class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Xây dựng</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Gamepad2 class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Đánh bài</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <CircleDollarSign class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Sòng bạc</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <DraftingCompass class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Thiết kế</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Puzzle class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Xếp hình</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Grid2X2 class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Hợp nhất</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Puzzle class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Câu đố</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Timer class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Chơi nhanh</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <MessageCircleQuestion class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Đố vui</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Flag class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Đua xe</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <PersonStanding class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Nhập vai</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Bike class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Chạy thi</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Codepen class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Mô phỏng</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <Slack class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Solitaire</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <MessageCircleQuestion class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Thể thao</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <div class="bg-[#D8DADF] rounded-full p-1">
            <SquareLibrary class="rounded-full" />
          </div>
          <span class="font-semibold text-tiny">Từ vựng</span>
        </li>
      </ul>
      </div>
      
      <!-- end -->
    </div>
  </div>
<div class="bg-[#F0F2F5] float-right w-[calc(100%-22%)]">
    <div class="overflow-hidden bg-[#F0F2F5] px-8">
    <p class="text-[24px] font-bold pt-[10px]">Đã chơi gần đây</p>
    <div id="animation-carousel">
      <div class="py-[16px]">
        <div class="flex">
          <div class="dachoiganday mr-[8px] w-[12%] h-auto relative hover:brightness-90 cursor-pointer shadow-md">
            <img class="h-full w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
              alt="" />
            <p class="absolute text-[17px] bottom-[12px] left-[12px] text-white h-[40px] font-[600] leading-[20px]">
              Words With <br />
              Friends
            </p>
          </div>
          <div class="dachoiganday mr-[8px] w-[12%] h-auto relative hover:brightness-90 cursor-pointer shadow-md">
            <img class="h-full w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
              alt="" />
            <p class="absolute text-[17px] bottom-[12px] left-[12px] text-white h-[40px] font-[600] leading-[20px]">
              Words With <br />
              Friends
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-[24px] font-bold">Game chúng tôi thích</p>
      <div id="animation-carousel" class="relative">
        <div class="py-[16px]">
          <div class="flex h-full">
            <div
              class="dachoiganday ml-0 px-0 mr-[10px] container w-[200px] h-[200px] min-w-[180px] max-w-[250px] relative hover:brightness-90 cursor-pointer">
              <div class="w-full h-full flex flex-col rounded-lg overflow-hidden">
                <div class="w-full h-[62%]">
                  <img class="w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt="" />
                </div>
                <div class="w-full h-[38%] relative">
                  <img class="w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt="" />
                  <div class="w-full h-full backdrop-blur-xl bg-black bg-opacity-10 absolute top-0">
                    <div class="mt-[6px] ml-[8px]">
                      <p class="text-white text-[17px] font-medium">Solitarie Classic</p>
                      <p
                        class="text-white text-[13px] font-medium inline-block bg-[#203820] py-[4px] px-[6px] mt-[5px] rounded-2xl">
                        2,2 triệu người chơi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="dachoiganday ml-0 px-0 mr-[10px] container w-[200px] h-[200px] min-w-[180px] max-w-[250px] relative hover:brightness-90 cursor-pointer">
              <div class="w-full h-full flex flex-col rounded-lg overflow-hidden">
                <div class="w-full h-[62%]">
                  <img class="w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt="" />
                </div>
                <div class="w-full h-[38%] relative">
                  <img class="w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt="" />
                  <div class="w-full h-full backdrop-blur-xl bg-black bg-opacity-10 absolute top-0">
                    <div class="mt-[6px] ml-[8px]">
                      <p class="text-white text-[17px] font-medium">Solitarie Classic</p>
                      <p
                        class="text-white text-[13px] font-medium inline-block bg-[#203820] py-[4px] px-[6px] mt-[5px] rounded-2xl">
                        2,2 triệu người chơi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sss w-full mb-2">
      <div class="text-[24px] font-bold mb-4">Lựa chọn hàng đầu dành cho bạn</div>
      <swiper :spaceBetween="10" :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }" :slidesPerView="6" class="mySwiper">
        <swiper-slide v-for="index in 20" :key="index">
          <div class="dachoiganday container w-full h-[200px] relative hover:brightness-90 cursor-pointer p-0">
            <div class="w-full h-full flex flex-col rounded-lg overflow-hidden">
              <div class="w-full h-[62%]">
                <img class="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                  alt="" />
              </div>
              <div class="w-full h-[38%] relative">
                <img class="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                  alt="" />
                <div class="w-full h-full backdrop-blur-xl bg-black bg-opacity-10 absolute top-0">
                  <div class="mt-[6px] ml-[8px]">
                    <p class="text-white text-[17px] font-medium">Solitarie Classic</p>
                    <p
                      class="text-white text-[13px] font-medium inline-block bg-[#203820] py-[4px] px-[6px] mt-[5px] rounded-2xl">
                      2,2 triệu người chơi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="sss w-full mb-2">
      <swiper :spaceBetween="10" :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }" :slidesPerView="6" class="mySwiper">
        <swiper-slide v-for="index in 20" :key="index" class="w-full">
          <div class="dachoiganday container w-full h-[200px] relative hover:brightness-90 cursor-pointer p-0">
            <div class="w-full h-full flex flex-col rounded-lg overflow-hidden">
              <div class="w-full h-[62%]">
                <img class="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                  alt="" />
              </div>
              <div class="w-full h-[38%] relative">
                <img class="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                  alt="" />
                <div class="w-full h-full backdrop-blur-xl bg-black bg-opacity-10 absolute top-0">
                  <div class="mt-[6px] ml-[8px]">
                    <p class="text-white text-[17px] font-medium">Solitarie Classic</p>
                    <p
                      class="text-white text-[13px] font-medium inline-block bg-[#203820] py-[4px] px-[6px] mt-[5px] rounded-2xl">
                      2,2 triệu người chơi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  </div> 
  
 
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Bike, Settings } from 'lucide-vue-next'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../../assets/css/input.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import svgSearch from '../../components/svg/svgSearch.vue'
import { Save } from 'lucide-vue-next'
import { Gamepad2 } from 'lucide-vue-next'
import { CircleUser } from 'lucide-vue-next'
import { Bell } from 'lucide-vue-next'
import { TrainFront } from 'lucide-vue-next'
import { Map } from 'lucide-vue-next'
import { Computer } from 'lucide-vue-next'
import { Swords } from 'lucide-vue-next'
import { Stamp } from 'lucide-vue-next'
import { Castle } from 'lucide-vue-next'
import { CircleDollarSign } from 'lucide-vue-next'
import { DraftingCompass } from 'lucide-vue-next'
import { Puzzle } from 'lucide-vue-next'
import { Grid2X2 } from 'lucide-vue-next'
import { Timer } from 'lucide-vue-next'
import { MessageCircleQuestion } from 'lucide-vue-next'
import { Flag } from 'lucide-vue-next'
import { PersonStanding } from 'lucide-vue-next'
import { Codepen } from 'lucide-vue-next'
import { Slack } from 'lucide-vue-next'
import { Dumbbell } from 'lucide-vue-next'
import { SquareLibrary } from 'lucide-vue-next'

export default {
  components: {
    TrainFront,
    Swiper,
    SwiperSlide,
    Gamepad2,
    svgSearch,
    CircleUser,
    Bell,
    Save,
    Settings,
    Computer,
    Swords,
    Stamp,
    Castle,
    CircleDollarSign,
    DraftingCompass,
    Puzzle,
    Grid2X2,

    Timer,
    MessageCircleQuestion,
    Flag,
    PersonStanding,
    Bike,
    Codepen,
    Slack,
    SquareLibrary,
    // eslint-disable-next-line vue/no-reserved-component-names
    Map
  },
  setup() {
    return {}
  }
}
</script>
<style></style>
