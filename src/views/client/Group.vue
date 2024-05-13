<template>
  <div class="flex">
    <div class="flex bg-white">
      <div class="w-80 hidden xl:block">
        <div class="w-80">
          <div class="fixed">
            <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
              <div id="left-bar-top" class="w-full">
                <ul>
                  <li class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">Marketplace</h1>
                    <Settings class="rounded-full bg-[#E4E6EB] p-1" />
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
                    <div class="bg-[#D8DADF] rounded-full p-1">
                      <Newspaper class="rounded-full" />
                    </div>
                    <span class="font-semibold text-tiny">Bảng feed của bạn</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <div class="bg-[#D8DADF] rounded-full p-1">
                      <Telescope class="rounded-full" />
                    </div>
                    <span class="font-semibold text-tiny">Khám phá</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <div class="bg-[#D8DADF] rounded-full p-1">
                      <UsersRound class="rounded-full" />
                    </div>
                    <span class="font-semibold text-tiny">Nhóm của bạn</span>
                  </li>
                  <li>
                    <button class="bg-[#DFE9F2] rounded-lg px-0.5 py-0.5 w-full text-[#0E66CA]">
                      <div class="items-center text-sm">
                        <span class="text-xl">+</span>
                        <span class="ml-1.5">Tạo nhóm mới</span>
                      </div>
                    </button>
                  </li>
                  <hr class="mt-2 mb-3">
                  <div class="flex items-center">
                    <p class="font-semibold">Nhóm bạn đã tham gia</p>
                    <p class="text-sm ml-auto text-[#0866FE]">Xem tất cả</p>
                  </div>
                </ul>

                <!-- end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Newspaper } from 'lucide-vue-next'
import { Settings } from 'lucide-vue-next'
import { Telescope } from 'lucide-vue-next'
import { UsersRound } from 'lucide-vue-next'
// video
import svgSearch from '../../components/svg/svgSearch.vue'
import { Store } from 'lucide-vue-next';
import { MapPin } from 'lucide-vue-next';
export default {
  components: {
    Settings,
    Newspaper,
    svgSearch,
    Telescope,
    UsersRound,
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>
