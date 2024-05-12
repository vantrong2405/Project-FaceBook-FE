<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="flex ">
    <div class="flex bg-white">
      <div class="w-80 hidden xl:block">
        <div class="w-80">
          <div class="fixed">
            <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
              <div id="left-bar-top" class="w-full">
                <ul>
                  <li class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">Marketplace</h1>
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
                    <div class="bg-red-500 rounded-full p-2">
                      <Store class="rounded-full" />
                    </div>
                    <span class="font-semibold text-tiny">Lướt xem tất cả</span>
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
    </div>
    <div class="w-full px-8">
      <div class="flex justify-between">
        <div class="text-xl font-bold">Lựa chọn hôm nay</div>
        <div class="flex items-center hover:text-blue-400 cursor-pointer">
          <MapPin class="mr-2" />
          <span class>Quận hải châu- 65km</span>
        </div>
      </div>
      <div className="mt-5 grid">
        <div className="grid  grid-cols-4 justify-around">
          <div className="w-[93%] h-[94%] mb-[18px] rounded-md hover:scale-105 hover:delay-250 duration-300 border"
            v-for="index in 10 " :key="index">
            <a href="link-supplier">
              <img className="rounded-t-md h-[200px]"
                src="https://admin.cms.ueb.edu.vn//Uploads/image/News/Thumbnails/2022/1/Thumbnails03012022052442.quan-tri-dai-hoc.jpg"
                alt="" />
              <div class="p-3">
                <div className="font-semibold text-lg">
                  Tôn Hoa Sen
                </div>
                <div className="text-sm">
                  183 Nguyễn Văn Trỗi, Quận Phú Nhuận, HCM
                </div>
                <div className="flex justify-between">
                  <div className="flex text-[13px] pr-5 text-green-400">
                    <p className="text-primary mr-1">163</p>
                    <p> Sản phẩm</p>
                  </div>
                  <div className="flex text-[13px] pl-5 text-red-500">
                    <p className="text-primary mr-1">4.6</p>
                    <p> Đánh giá</p>
                  </div>
                </div>
              </div>
            </a>
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
import { AlarmClockCheck } from 'lucide-vue-next';// icon đồng hồ
// video
import svgSearch from '../../components/svg/svgSearch.vue'
import { Store } from 'lucide-vue-next';
import { MapPin } from 'lucide-vue-next';
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    Tv2,
    Film,
    Clapperboard,
    Rocket,
    Save,
    Settings,
    svgSearch,
    Store,
    MapPin
  }
}
</script>
