<template>
  <div class="hidden w-80 xl:block">
    <div class="w-80">
      <div class="fixed w-full">
        <div class="scroll-container hidden h-screen w-80 flex-col justify-between px-2 pb-12 pt-4 xl:flex">
          <div class="visible">
            <div>
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">Quản lý</p>
                <ellipsis class="cursor-pointer rounded-lg p-1 hover:bg-gray-300" />
              </div>

              <div>
                <div class="rounded-lg hover:bg-gray-200">
                  <div class="my-1 flex cursor-pointer items-center p-1">
                    <img class="mr-2 h-10 w-10 rounded-full"
                      src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                      alt="" />
                    <p class="text-base font-semibold text-gray-600">Đây là page nè</p>
                  </div>
                </div>

                <div class="rounded-lg py-3 hover:bg-gray-200">
                  <div class="flex cursor-pointer items-center">
                    <Repeat class="h-4 w-4" />
                    <p class="ml-2">Chuyển sang page</p>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-2" />
            <div class="mb-3">
              <div>
                <div class="my-1 box-border flex justify-between">
                  <p class="p-2 text-base font-semibold text-gray-600">Lời mời kết bạn</p>
                  <p class="box-border cursor-pointer rounded-md p-2 text-blue-600 hover:bg-gray-200">Xem tất cả</p>
                </div>
                <div class="mb-2 flex cursor-pointer rounded-lg p-1 py-2 hover:bg-gray-200" v-for="index in 10"
                  :key="index">
                  <img class="mr-2 h-10 w-10 rounded-full"
                    src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                    alt="" />
                  <div>
                    <div class="flex w-[155px] justify-between">
                      <div class="flex items-center">
                        <p class="mr-2 font-bold">Văn Trọng</p>
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
            <div id="contacts" class="justfiy-between flex w-full items-center">
              <span class="bg-red flex-1 pl-5 text-base font-semibold">Liên hệ</span>
              <div id="contact-buttons" class="flex gap-1">
                <div
                  class="cursor-pointer rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
                  <svg-new-room class="w-4" />
                </div>
                <div
                  class="cursor-pointer rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
                  <svg-search class="w-4" />
                </div>
                <div
                  class="cursor-pointer rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
                  <svg-dots class="w-4" />
                </div>
              </div>
            </div>
            <div id="firends" class="border-b border-myGray-250">
              <ul v-for="index in 10" :key="index">
                <li
                  class="my-2 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-tiny font-semibold transition-colors duration-300 hover:bg-myGray-900">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3UevoghwbQpQTS1AlMgdGKIdr0YNyOnAZIJLtXZqYw&s"
                    class="h-10 w-10 rounded-full" alt="" />
                  <span> Nguyễn Minh</span>
                </li>
              </ul>
            </div>

            <div id="group-conversation" class="mt-2">
              <div class="my-4 px-3 text-base font-semibold">Cuộc trò chuyện nhóm</div>
              <div
                class="my-2 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-tiny font-semibold transition-colors duration-300 hover:bg-myGray-900">
                <img src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                  class="h-10 w-10 rounded-full" alt="" />
                <span class="line-clamp-2">
                  Này eos, quo fugit enim facilis.eos, quo fugit enim facilis.eos, quo fugit enim facilis.eos, quo fugit
                  enim facilis.eos, quo fugit enim facilis. Ipsa.</span>
              </div>
              <div
                class="mx-2.5 flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-myGray-900">
                <div id="svg-box" class="rounded-full bg-myGray-900">
                  <svg-create class="w-5" />
                </div>
                <span class="text-tiny font-semibold">Tạo nhóm mới</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import svgNewRoom from "@/components/svg/svgNewRoom.vue"
import svgSearch from "@/components/svg/svgSearch.vue"
import { Ellipsis, Repeat } from "lucide-vue-next"
import svgDots from "@/components/svg/svgDots.vue"
import svgCreate from "@/components/svg/svgCreate.vue"
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
