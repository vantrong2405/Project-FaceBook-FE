<template>
  <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
    <div id="left-bar-top" class="w-full">
      <ul v-if="leftBarMove == 0">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny"> Văn trọng </span>
        </li>

        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/friends.png" class="rounded-full w-9" alt="Bạn bè" />
          <span class="font-semibold text-tiny">Bạn bè</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/groups.png" class="rounded-full w-9" alt="Nhóm" />
          <span class="font-semibold text-tiny">Nhóm</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/marketplace.png" class="rounded-full w-9" alt="Marketplace" />
          <span class="font-semibold text-tiny">Marketplace</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/watch.png" class="rounded-full w-9" alt="Video" />
          <span class="font-semibold text-tiny">Video</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/memories.png" class="rounded-full w-9" alt="Kỷ niệm" />
          <span class="font-semibold text-tiny">Kỷ niệm</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/saved.png" class="rounded-full w-9" alt="Đã lưu" />
          <span class="font-semibold text-tiny">Đã lưu</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/pages.png" class="rounded-full w-9" alt="Trang" />
          <span class="font-semibold text-tiny">Trang</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/events.png" class="rounded-full w-9" alt="Sự kiện" />
          <span class="font-semibold text-tiny">Sự kiện</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/jobs.png" class="rounded-full w-9" alt="Công việc" />
          <span class="font-semibold text-tiny">Công việc</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img src="../../assets/images/png/mostRecent.png" class="rounded-full w-9" alt="Gần đây" />
          <span class="font-semibold text-tiny">Gần đây</span>
        </li>
        <div
          class="flex items-center gap-2 p-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900 transition-color duration-300">
          <div id="svg-see-more-box" class="p-2 rounded-full flex items-center justify-center">
            <svg-see-more class="w-5" />
          </div>
          <span class="font-semibold text-base"> Xem thêm</span>
        </div>

        <div id="privacy" class="w-full">
          <div class="text-myGray-700 text-xs pl-1 mb-14">
            <a class="hover:underline cursor-pointer">Privacy</a>·
            <a class="hover:underline cursor-pointer">Terms</a>·
            <a class="hover:underline cursor-pointer">Adversiting</a>·
            <a class="hover:underline cursor-pointer">Ad Choices</a>·
            <a class="hover:underline cursor-pointer">Cookies</a>·<br />
            <a class="cursor-pointer">More</a>·
            <a>Burkay © 2021</a>
          </div>
        </div>
      </ul>
      <!-- start -->
      <ul v-if="leftBarMove == 1">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <MonitorPlay class=" rounded-full" />
          <span class="font-semibold text-tiny">Trang chủ</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <Video class=" rounded-full" />
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
</template>
<!-- eslint-disable vue/no-export-in-script-setup -->
<script>

import { MonitorPlay } from 'lucide-vue-next';
import { Video } from 'lucide-vue-next';
import { Film } from 'lucide-vue-next';
import { Clapperboard } from 'lucide-vue-next';
import { Rocket } from 'lucide-vue-next';
import { Save } from 'lucide-vue-next';
export default {
  props: {
    leftBarMove: {
      type: Number,
      default: 0
    }
  },
  components: {
    MonitorPlay,
    Film,
    Clapperboard,
    Rocket,
    Save,
    Video
  },
  data() {
    return {
    }
  }
}
</script>




<template>
  <div class="bg-white h-auto desktop:w-180 la
      ptop:w-160 lg:w-160 sm:w-140 w-full sm:m-auto p-1 text-xs font-semibold mobile-x:text-tiny mobile-x:p-8">
    <div class="grid grid-cols-2 shadow-md rounded-lg mb-5">
      <div class="p-3 mt-3">
        <h1 class="font-bold text-xl mb-3">Video mới dành cho bạn</h1>
        <div class="flex items-center mb-3">
          <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
            class="w-14 h-14 rounded-full mr-3" alt="">
          <div>
            <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
            <div class="flex items-center">
              <div class="translate-y-[-62%] text-[#0866FD] mr-2 text-5xl font-bold">.</div>
              <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3 mt-12">
        <div class="flex mt-2">
          <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
            class="w-14 h-14 rounded-full mr-3" alt="">
          <div>
            <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
            <div class="flex items-center">
              <div class="translate-y-[-62%] text-[#0866FD] mr-2 text-5xl font-bold">.</div>
              <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="p-4 mb-4 shadow-md mt-3 rounded-lg">
      <div class="flex items-center mb-3">
        <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
          class="w-12 h-12 rounded-full mr-3" alt="">
        <div>
          <div class="flex items-center">
            <p class="font-semibold">Nhật Dương</p>
            <p class="translate-y-[-10%] ml-1 mr-1 text-[#65679B]">.</p>
            <p class="text-[#0866FD]">Theo dõi</p>
            <div class="fa-solid fa-ellipsis ml-[570px]"></div>
          </div>
          <div class="flex items-center">
            <p class="text-xs text-gray-500">2 tháng 2 lúc 22:31</p>
            <p class="translate-y-[-20%] ml-1 mr-0.5 text-[#65679B]">.</p>
            <i class="fa-solid fa-earth-americas text-[#65676B] text-xs"></i>
          </div>
        </div>
      </div>
      <p class="text-xs font-semibold mb-2">HELLO WORLD</p>
      <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
        class="w-full h-auto mb-4 rounded-lg shadow-md" alt="">
      <div class="flex items-center text-gray-500">
        <i class="fas fa-thumbs-up mr-2"></i>
        <p>Like</p>
        <i class="fas fa-comment ml-4 mr-2"></i>
        <p>Comment</p>
        <i class="fas fa-share ml-4 mr-2"></i>
        <p>Share</p>
        <i
          class="fas fa-thumbs-up ml-auto rounded-full bg-[#049CFD] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
        <i
          class="fa-solid fa-heart mr-0.5 rounded-full bg-[#FC464E] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
        <div class="flex text-xs">
          <span>Thanh Thư và 22K người khác</span>
          <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
          <p>80 bình luận</p>
          <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
          <p>10 triệu lượt xem</p>
        </div>
      </div>
    </div>
  </div>
</template>