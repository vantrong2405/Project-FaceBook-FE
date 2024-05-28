<template lang="">
    <div class="w-80 hidden xl:block bg-white shadow-sm min-h-screen">
        <div class="w-80">
          <div class="fixed">
            <div class="h-screen px-2 pb-12 pt-4 flex flex-col justify-between xl:flex scroll-container w-80">
              <div class="flex-1 pb-[10%]">
                <div class="visible">
                  <div id="left-bar-top" class="w-full">
                    <ul>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="rounded-full w-9" alt="" />
                        <span class="font-semibold text-tiny">{{ userCurrent.name }}</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/friends.png" class="rounded-full w-9" alt="Bạn bè" />
                        <span class="font-semibold text-tiny">Bạn bè</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/groups.png" class="rounded-full w-9" alt="Nhóm" />
                        <span class="font-semibold text-tiny">Nhóm</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/marketplace.png" class="rounded-full w-9"
                          alt="Marketplace" />
                        <span class="font-semibold text-tiny">Marketplace</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/watch.png" class="rounded-full w-9" alt="Video" />
                        <span class="font-semibold text-tiny">Video</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/memories.png" class="rounded-full w-9" alt="Kỷ niệm" />
                        <span class="font-semibold text-tiny">Kỷ niệm</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/saved.png" class="rounded-full w-9" alt="Đã lưu" />
                        <span class="font-semibold text-tiny">Đã lưu</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/pages.png" class="rounded-full w-9" alt="Trang" />
                        <span class="font-semibold text-tiny">Trang</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/events.png" class="rounded-full w-9" alt="Sự kiện" />
                        <span class="font-semibold text-tiny">Sự kiện</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/jobs.png" class="rounded-full w-9" alt="Công việc" />
                        <span class="font-semibold text-tiny">Công việc</span>
                      </li>
                      <li
                        class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <img src="../../../assets/images/png/mostRecent.png" class="rounded-full w-9" alt="Gần đây" />
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
                        <div class="text-myGray-700 text-xs pl-1">
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
import svgSeeMore from '@/components/svg/svgSeeMore.vue'

export default {
  props: {
    userCurrent: {
      type: Object,
      default: {}
    },
    avatar: {
      type: String,
      default: ""
    },
  },
  components: {
    svgSeeMore
  }
}
</script>
<style lang="">

</style>