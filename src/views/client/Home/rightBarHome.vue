<template>
     <div class="w-80 hidden xl:block">
        <div class="w-80">
          <div class="fixed w-full">
            <div class="h-screen px-2 pb-12 pt-4 flex-col justify-between hidden xl:flex scroll-container w-80">
              <div class="visible">
                <div>
                  <div class="flex justify-between items-center">
                    <p class="font-semibold text-lg">Quản lý</p>
                    <ellipsis class="p-1 hover:bg-gray-300 rounded-lg cursor-pointer" />
                  </div>

                  <div>
                    <div class="hover:bg-gray-200 rounded-lg">
                      <div class="flex p-1 my-1 cursor-pointer items-center">
                        <img class="w-10 h-10 mr-2 rounded-full"
                          src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                          alt="" />
                        <p class="text-base font-semibold text-gray-600">Đây là page nè</p>
                      </div>
                    </div>

                    <div class="hover:bg-gray-200 py-3 rounded-lg">
                      <div class="cursor-pointer flex items-center">
                        <Repeat class="w-4 h-4" />
                        <p class="ml-2">Chuyển sang page</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-2" />
                <!--Lời mời kết bạn-->
                <div class="mb-3">
                  <div>
                    <div class="flex justify-between box-border my-1">
                      <p class="font-semibold text-gray-600 text-base p-2">Lời mời kết bạn</p>
                      <p class="text-blue-600 hover:bg-gray-200 cursor-pointer box-border p-2 rounded-md">
                        Xem tất cả
                      </p>
                    </div>
                    <!-- start -->
                    <div class="flex hover:bg-gray-200 rounded-lg cursor-pointer mb-2 p-1 py-2" v-for="index in 10"
                      :key="index">
                      <img class="w-10 h-10 mr-2 rounded-full"
                        src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                        alt="" />
                      <div>
                        <div class="justify-between flex w-[155px]">
                          <div class="items-center flex">
                            <p class="font-bold mr-2">Văn Trọng</p>
                            <p class="font-normal">7 ngày</p>
                          </div>
                        </div>
                        <div class="mt-2 flex gap-2">
                          <button class="btn btn-primary btn-sm w-20">Xác nhận</button>
                          <button class="btn btn-danger btn-sm w-20">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-2 mt-2" />
                <div id="contacts" class="w-full flex items-center justfiy-between">
                  <span class="flex-1 bg-red font-semibold text-base pl-5">Liên hệ</span>
                  <div id="contact-buttons" class="flex gap-1">
                    <div
                      class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300">
                      <svg-new-room class="w-4" />
                    </div>
                    <div
                      class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300">
                      <svg-search class="w-4" />
                    </div>
                    <div
                      class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300">
                      <svg-dots class="w-4" />
                    </div>
                  </div>
                </div>
                <div id="firends" class="border-b border-myGray-250">
                  <!-- start render -->
                  <ul v-for="index in 10" :key="index">
                    <li
                      class="flex items-center gap-3 font-semibold text-tiny cursor-pointer hover:bg-myGray-900 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3UevoghwbQpQTS1AlMgdGKIdr0YNyOnAZIJLtXZqYw&s"
                        class="w-10 h-10 rounded-full" alt="" />
                      <span> Nguyễn Minh</span>
                    </li>
                  </ul>
                </div>

                <div id="group-conversation" class="mt-2">
                  <div class="my-4 font-semibold text-base px-3">Cuộc trò chuyện nhóm</div>
                  <div
                    class="flex items-center gap-3 font-semibold text-tiny cursor-pointer hover:bg-myGray-900 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
                    <img src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                      class="w-10 h-10 rounded-full" alt="" />
                    <span class="line-clamp-2">
                      Này eos, quo fugit enim facilis.eos, quo fugit enim facilis.eos, quo fugit
                      enim facilis.eos, quo fugit enim facilis.eos, quo fugit enim facilis.
                      Ipsa.</span>
                  </div>
                  <div
                    class="flex items-center gap-3 w-full cursor-pointer hover:bg-myGray-900 p-3 rounded-lg transition-colors duration-300 mx-2.5">
                    <div id="svg-box" class="rounded-full bg-myGray-900">
                      <svg-create class="w-5" />
                    </div>
                    <span class="font-semibold text-tiny">Tạo nhóm mới</span>
                  </div>
                </div>
                <!-- end -->
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import svgNewRoom from '@/components/svg/svgNewRoom.vue'
import svgSearch from '@/components/svg/svgSearch.vue'
import { Ellipsis, Repeat } from 'lucide-vue-next'
import svgDots from '@/components/svg/svgDots.vue'
import svgCreate from '@/components/svg/svgCreate.vue'
export default {
    components: {
        svgNewRoom,
        svgSearch,
        Ellipsis,
        Repeat,
        svgDots,
        svgCreate
    }
}
</script>
<style>


</style>