<template>
  <div class="h-screen bg-white shadow-md w-[22%] fixed top-[55px] left-0 px-[5px] pt-[5px]">
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
    <div class="h-screen px-[10px] scroll-container">
      <div class="visible">
        <ul>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Store class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Lướt xem tất cả</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Bell class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Thông báo</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Mailbox class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Hộp thư</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <ShoppingBasket class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Đang mua</span>
            <ChevronRight class="ml-auto text-[#A7AAAE]" />
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full mb-[10px] cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Tag class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Bán hàng</span>
            <ChevronRight class="ml-auto text-[#A7AAAE]" />
          </li>
          <li>
            <button class="bg-[#DFE9F2] rounded-lg px-0.5 py-0.5 w-full text-[#0E66CA]">
              <div class="items-center text-sm flex justify-center">
                <span class="text-xl">+</span>
                <span class="ml-1.5">Tạo bài niêm yết mới</span>
              </div>
            </button>
          </li>
          <hr class="mt-2 mb-3" />
          <p class="mb-2 text-[18px] font-medium">Bộ lọc</p>
          <div class="flex ml-auto text-[#0866FE] items-center text-sm font-semibold cursor-pointer">
            <span>Đà Nẵng</span>
            <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
            <span>Trong vòng 65 km</span>
          </div>
          <hr class="mt-3" />
          <p class="text-[18px] font-medium">Hạng mục</p>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <CarFront class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Xe cộ</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Home class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Tài sản cho thuê</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Home class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Bán nhà</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Wrench class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Bán nhà</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Heart class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Gia đình</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Video class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Giải trí</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Shovel class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Làm vườn & hoạt động ngoài trời</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Guitar class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Nhạc cụ</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Tag class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Rao vặt</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Tags class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Sản phẩm miễn phí</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Bike class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Sản phẩm thẻ thao</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <PencilLine class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Sở thích</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Tag class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Văn phòng phẩm</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Gamepad2 class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Đồ chơi & trò chơi</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <PawPrint class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Đồ dùng cho thú cưng</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Home class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Đồ gia dụng</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Shirt class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Đồ may mặc</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <Smartphone class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Đồ điện tử</span>
          </li>
          <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
            <div class="bg-[#D8DADF] rounded-full p-1">
              <UsersRound class="rounded-full" />
            </div>
            <span class="font-semibold text-tiny">Nhóm mua và bán</span>
          </li>
        </ul>
      </div>
      <!-- end -->
    </div>
  </div>
  <div class="bg-[#F0F2F5] float-right w-[calc(100%-22%)]">
    <div class="w-full px-2 ml-[20px]">
      <div class="flex justify-between mt-[20px]">
        <div class="text-xl font-bold">Lựa chọn hôm nay</div>
        <div class="flex items-center hover:text-blue-600 cursor-pointer hover:underline">
          <MapPin class="mr-2" />
          <span class>Quận hải châu- 65km</span>
        </div>
      </div>
      <div className="mt-4 grid">
        <div className="grid  grid-cols-4 justify-around">
          <div className="w-[93%] h-[94%] mb-[18px] rounded-md hover:scale-105 hover:delay-250 duration-300 border"
            v-for="index in 10" :key="index">
            <a href="link-supplier">
              <img className="rounded-t-md h-[200px]"
                src="https://admin.cms.ueb.edu.vn//Uploads/image/News/Thumbnails/2022/1/Thumbnails03012022052442.quan-tri-dai-hoc.jpg"
                alt="" />
              <div class="p-3">
                <div className="font-semibold text-lg">Tôn Hoa Sen</div>
                <div className="text-sm">183 Nguyễn Văn Trỗi, Quận Phú Nhuận, HCM</div>
                <div className="flex justify-between">
                  <div className="flex text-[13px] pr-5 text-green-400">
                    <p className="text-primary mr-1">163</p>
                    <p>Sản phẩm</p>
                  </div>
                  <div className="flex text-[13px] pl-5 text-red-500">
                    <p className="text-primary mr-1">4.6</p>
                    <p>Đánh giá</p>
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
import { AlarmClockCheck } from 'lucide-vue-next'
import { Bell } from 'lucide-vue-next'
import { Mailbox } from 'lucide-vue-next'
import { ShoppingBasket } from 'lucide-vue-next'
import { ChevronRight } from 'lucide-vue-next'
import { Tag } from 'lucide-vue-next'
import { CarFront } from 'lucide-vue-next'
import { Home } from 'lucide-vue-next'
import { Wrench } from 'lucide-vue-next'
import { Heart } from 'lucide-vue-next'
import { Video } from 'lucide-vue-next'
import { Shovel } from 'lucide-vue-next'
import { Guitar } from 'lucide-vue-next'
import { Tags } from 'lucide-vue-next'
import { Bike } from 'lucide-vue-next'
import { PencilLine } from 'lucide-vue-next'
import { Gamepad2 } from 'lucide-vue-next'
import { PawPrint } from 'lucide-vue-next'
import { Shirt } from 'lucide-vue-next'
import { Smartphone } from 'lucide-vue-next'
import { UsersRound } from 'lucide-vue-next'
// video
import svgSearch from '../../components/svg/svgSearch.vue'
import { Store } from 'lucide-vue-next'
import { MapPin } from 'lucide-vue-next'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    UsersRound,
    Smartphone,
    Shirt,
    PawPrint,
    Bike,
    Tags,
    Guitar,
    Shovel,
    Video,
    Heart,
    Wrench,
    Home,
    Mailbox,
    CarFront,
    Settings,
    svgSearch,
    Store,
    MapPin,
    Bell,
    ShoppingBasket,
    ChevronRight,
    Tag,
    PencilLine,
    Gamepad2
  }
}
</script>
