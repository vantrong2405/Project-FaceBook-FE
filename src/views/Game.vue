<template>
  <div class="flex ">
    <div class="w-80 hidden xl:block">
      <div class="fixed">
        <div class="fixed w-80">
          <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
            <div id="left-bar-top" class="w-full">
              <ul>
                <li class="flex justify-between items-center">
                  <h1 class="text-2xl font-bold">Video</h1>
                  <Settings />
                </li>
                <li>
                  <div class="w-72 h-14 py-2 flex items-center">
                    <div class="__logo"></div>
                    <div
                      class="h-9 flex items-center justify-center rounded-full cursor-pointer transition-opacity duration-500">
                    </div>
                    <div
                      class="w-10 flex items-center justify-center h-full bg-gray-100 rounded-full overflow-hidden cursor-pointer xl:flex-1 xl:px-4 xl:cursor-text ml-1 sm:m-0">
                      <svg-search class="w-5" fill="currentColor" />
                      <input
                        class="w-full h-full bg-transparent text-sm px-2 border-none outline-none xl:block focus:outline-none focus:ring-transparent" />
                    </div>
                  </div>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                  <MonitorPlay class="rounded-full" />
                  <span class="font-semibold text-tiny">Trang chủ</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                  <Tv2 class="rounded-full" />
                  <span class="font-semibold text-tiny">Trực tiếp</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                  <Film class="rounded-full" />
                  <span class="font-semibold text-tiny">Reels</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                  <Clapperboard class="rounded-full" />
                  <span class="font-semibold text-tiny">Chương trình</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                  <Rocket class="rounded-full" />
                  <span class="font-semibold text-tiny">Khám phá</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                  <Save class="rounded-full" />
                  <span class="font-semibold text-tiny">Video đã lưu</span>
                </li>
              </ul>

              <!-- end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1100px] overflow-hidden mx-auto">
      <p class="text-[24px] font-bold" hidden>Đã chơi gần đây</p>
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
            <div class="dachoiganday mr-[8px] w-[12%]  h-auto relative hover:brightness-90 cursor-pointer shadow-md">
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
            <div class="flex flex-row h-full">
              <div
                class="dachoiganday container mr-[8px] w-[220px] h-[200px] min-w-[180px] max-w-[250px] relative hover:brightness-90 cursor-pointer">
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
                class="dachoiganday container mr-[8px] w-[220px] h-[200px] min-w-[180px] max-w-[250px] relative hover:brightness-90 cursor-pointer">
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
        <p class="text-[24px] font-bold">Lựa chọn hàng đầu dành cho bạn</p>
        <swiper :slidesPerView="6" :spaceBetween="10" :pagination="{
          clickable: true

        }" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" class="mySwiper block w-[1200px]">
          <swiper-slide v-for="index in 20" :key="index">
            <div class="dachoiganday container w-full h-[200px] relative hover:brightness-90 cursor-pointer">
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
        <swiper :slidesPerView="6" :spaceBetween="10" :pagination="{
          clickable: true
        }" :navigation="true" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" class="mySwiper block w-[1200px]">
          <swiper-slide v-for="index in 20" :key="index">
            <div class="dachoiganday container w-full h-[200px] relative hover:brightness-90 cursor-pointer">
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

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>
<style></style>
