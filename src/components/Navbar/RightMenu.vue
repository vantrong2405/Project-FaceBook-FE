<!-- eslint-disable no-undef -->
<template>
  <div class="flex items-center justify-end gap-1 px-4 sm:gap-2">
    <div id="menu-box"
      class="flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 text-lg transition-colors duration-300 hover:bg-myGray-700"
      @click="
        isShowMenu = !isShowMenu,
        isShowMore = false,
        isShowMessager = false,
        isShowNotice = false
        ">
      <svg-menu class="hidden w-5 lg:block" />

      <svg-create class="block w-5 lg:hidden" />
    </div>

    <!--Mess-->
    <div id="messenger-box"
      class="flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700"
      @click="
        isShowMenu = false,
        isShowMore = false,
        isShowMessager = !isShowMessager,
        isShowNotice = false
        ">
      <svg-messenger class="w-5" />
      <!--Messenger-->
    </div>

    <!-- end mes -->

    <div id="notifications-box" @click="
      isShowMenu = false,
      isShowMore = false,
      isShowMessager = false,
      isShowNotice = !isShowNotice,
      AnimationEvent
      "
      class="flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
      <svg-notifications class="w-5" />
    </div>

    <div id="pp-info" @click="
      isShowMore = !isShowMore,
      isShowMenu = false,
      isShowMessager = false,
      isShowNotice = false
      "
      class="flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 transition-colors duration-300 hover:bg-myGray-700">
      <div id="pp" class="naybanoiw relative h-9 w-9 overflow-hidden rounded-full border">
        <img :src="profileInFor.avatar ? profileInFor.avatar : avatar" alt="" width="100%" style="height: 100%" />
      </div>
    </div>
  </div>

  <!--Menu-->
  <div v-if="isShowMenu == true">
    <div
      class="absolute right-0 top-full box-border max-w-xl border-spacing-0 rounded-xl border-2 border-solid bg-gray-100 shadow-2xl">
      <header class="mx-4 my-2 px-2 pt-1 text-2xl font-semibold">Menu</header>
      <div class="flex">
        <div class="mx-2 my-2 w-96 rounded-xl bg-white">
          <div>
            <div class="">
              <input type="text" class="mx-2 my-3 rounded-2xl border-none bg-gray-100 outline-none"
                placeholder="Tìm kiếm trong menu" />
            </div>
          </div>

          <div>
            <span class="mx-4 font-semibold">Xã hội</span>
            <div>
              <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                <div>
                  <CalendarDays class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Sự kiện</p>
                  <p class="text-xs text-gray-400">
                    Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                <div>
                  <Users class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Bạn bè</p>
                  <p class="text-xs text-gray-400">Tìm kiếm bạn bè hoặc những người bạn có thể biết.</p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                <div>
                  <Group class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Nhóm</p>
                  <p class="text-xs text-gray-400">Kết nối với những người cùng chung sở thích.</p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                <div>
                  <Newspaper class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Bảng tin</p>
                  <p class="text-xs text-gray-400">Xem bài viết phù hợp của những người và Trang bạn theo dõi.</p>
                </div>
              </a>
            </div>
          </div>

          <hr class="mx-3 my-2" />

          <div>
            <span class="mx-4 font-semibold">Giải trí</span>
            <div>
              <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                <div>
                  <MonitorPlay class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Video chơi game</p>
                  <p class="text-xs text-gray-400">
                    Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                <div>
                  <Tv class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Video</p>
                  <p class="text-xs text-gray-400">
                    Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="my-2 mr-2 h-[450px] w-52 rounded-xl bg-white">
          <div>
            <h1 class="m-2 mx-4 box-border text-xl font-semibold">Tạo</h1>
          </div>
          <div>
            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <SquarePen class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Đăng</p>
                </div>
              </a>
            </div>

            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <BookOpen class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Tin</p>
                </div>
              </a>
            </div>

            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <Videotape class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Thước phim</p>
                </div>
              </a>
            </div>

            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <Sparkle class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Sự kiện trong đời</p>
                </div>
              </a>
            </div>

            <hr class="mx-4 my-2" />

            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <PanelsTopLeft class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Trang</p>
                </div>
              </a>
            </div>

            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <Megaphone class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Quảng cáo</p>
                </div>
              </a>
            </div>

            <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
              <a href="" class="flex">
                <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                  <Group class="m-1" />
                </div>
                <div>
                  <p class="font-xl box-border pt-1 font-semibold">Nhóm</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--EndMenu-->

  <!--Mess-->
  <div v-if="isShowMessager == true">
    <div class="absolute right-0 top-full box-border w-[350px] rounded-lg border-2 border-solid bg-white">
      <div class="flex justify-between">
        <h3 class="font-semiboldbold mx-3 my-1 text-2xl"><b>Đoạn chat</b></h3>
        <div class="flex">
          <div class="mx-1 my-2 box-border cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-200">
            <Ellipsis class="h-5 w-5" />
          </div>
          <div class="mx-1 my-2 box-border cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-200">
            <ExternalLink class="h-5 w-5" />
          </div>
          <div class="mx-1 my-2 box-border cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-200">
            <MessageCirclePlus class="h-5 w-5" />
          </div>

          <div></div>
        </div>
      </div>

      <div>
        <input type="text" class="mx-4 rounded-xl bg-gray-100" placeholder="Tìm kiếm trên Messenger" />
      </div>

      <div>
        <div>
          <div>
            <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
              <div>
                <img class="mx-2 my-2 h-14 w-14 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
            <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
              <div>
                <img class="mx-2 my-2 h-14 w-14 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
            <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
              <div>
                <img class="mx-2 my-2 h-14 w-14 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
            <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
              <div>
                <img class="mx-2 my-2 h-14 w-14 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--EndMess-->

  <!--Notice-->
  <div v-if="isShowNotice == true">
    <div
      class="absolute right-0 top-full box-border h-[92vh] w-96 overflow-auto rounded-lg border-2 border-solid bg-white pb-20 font-semibold shadow-2xl">
      <div class="m-2">
        <div class="z-50 my-1 py-1">
          <header class="z-0 flex justify-between bg-white">
            <h3 class="mx-2 text-xl font-bold">Thông báo</h3>
            <Ellipsis class="mx-2 rounded-lg p-1 hover:bg-gray-200" />
          </header>
        </div>

        <div class="mx-3 bg-white">
          <button
            class="my-1 mr-3 rounded-3xl px-2 py-1 text-center hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500">
            Tất cả
          </button>
          <button
            class="my-1 mr-3 rounded-3xl px-2 py-1 text-center hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500">
            Chưa đọc
          </button>
        </div>

        <div class="mx-2 my-1 flex justify-between bg-white">
          <div>
            <p class="font-semibold">Trước đó</p>
          </div>
          <div class="rounded-lg hover:bg-gray-200">
            <a href="https://www.facebook.com/notifications">
              <p class="px-2 py-1 text-blue-400">Xem tất cả</p>
            </a>
          </div>
        </div>

        <div v-for="index in 5" :key="index">
          <a href="" class=" ">
            <div class="mx-1 flex rounded-xl p-2 hover:bg-gray-200">
              <div class="mr-2">
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
                  class="h-12 w-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>Văn trọng</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  </div>

  <div v-if="isShowMore == true">
    <div
      class="absolute right-0 top-full mt-1 box-content w-[390px] rounded-xl border-2 border-solid bg-gray-50 shadow-xl">
      <div>
        <div class="m-3 box-border rounded-xl border-2 border-solid bg-white p-1 shadow-sm">
          <div class="mx-1 my-1 rounded-xl hover:bg-gray-100">
            <router-link :to="`/profile/${userCurrent.username}`" @click="handleDeleteActive" class="flex">
              <div>
                <img class="mx-1 my-2 h-10 w-10 rounded-full" :src="profileInFor.avatar ? profileInFor.avatar : avatar"
                  alt="" />
              </div>
              <div>
                <p class="mx-2 my-1 mt-3 text-base font-semibold">{{ userCurrent.name }}</p>
              </div>
            </router-link>
          </div>

          <hr class="mx-2 my-2" />
          <a href="https://www.facebook.com/notifications"
            class="mx-2 mb-3 flex rounded-lg bg-gray-200 py-2 hover:bg-gray-400 focus:hidden">
            <div class="mx-auto flex items-center">
              <div class="mr-4">
                <Repeat class="my-1 w-4" />
              </div>
              <p class="bg-red text-base font-semibold" target="_blank">Xem tất cả trang cá nhân</p>
            </div>
          </a>
        </div>
        <div>
          <div class="mx-3 my-2">
            <a href="" class="flex justify-between rounded-xl px-1 py-2 hover:bg-gray-200">
              <div class="flex">
                <div class="rounded-full bg-gray-300 py-1">
                  <Settings class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="mx-2 my-1 text-base font-semibold">Cài đặt và quyền riêng tư</div>
              </div>

              <div class="mx-2 mt-1">
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>

          <div class="mx-3 my-2">
            <a href="" class="flex justify-between rounded-xl px-1 py-2 hover:bg-gray-200">
              <div class="flex">
                <div class="rounded-full bg-gray-300 py-1">
                  <CircleHelp class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="mx-2 my-1 text-base font-semibold">Cài đặt và quyền riêng tư</div>
              </div>
              <div class="mx-2 mt-1">
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>
          <div class="mx-3 my-2">
            <router-link to="/reset-password">
              <div class="flex justify-between rounded-xl px-1 py-1 hover:bg-gray-200">
                <div class="flex">
                  <div class="rounded-full bg-gray-300 py-1">
                    <LogOut class="mx-1.5 my-0.5 p-1" />
                  </div>
                  <div class="mx-2 py-1 text-base font-semibold">Đổi mật khẩu</div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="mx-3 my-2">
            <div class="flex justify-between rounded-xl px-1 py-1 hover:bg-gray-200" @click="logOut()">
              <div class="flex">
                <div class="rounded-full bg-gray-300 py-1">
                  <LogOut class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="mx-2 py-1 text-base font-semibold">Đăng xuất</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import svgMenu from "../svg/svgMenu.vue"
import svgMessenger from "../svg/svgMessenger.vue"
import svgNotifications from "../svg/svgNotifications.vue"
import svgCreate from "../svg/svgCreate.vue"
import {
  BookOpen,
  CalendarDays,
  CircleHelp,
  Ellipsis,
  ExternalLink,
  LogOut,
  Megaphone,
  MessageCirclePlus,
  PanelsTopLeft,
  Settings,
  Sparkle,
  SquarePen,
  Tv,
  Videotape,
  Repeat,
  Users,
  Group,
  MonitorPlay,
  Newspaper
} from "lucide-vue-next"

import "vue-toast-notification/dist/theme-sugar.css"
import apiProfile from "@/apis/profile.api"
import { clearLS } from "@/utils/auth"
import apiAuth from "@/apis/auth.api"
export default {
  mounted() {
    this.userCurrent = JSON.parse(localStorage.getItem("profile"))
    this.getProfile()
  },
  components: {
    svgMenu,
    svgMessenger,
    svgNotifications,
    svgCreate,
    BookOpen,
    CalendarDays,
    ExternalLink,
    Ellipsis,
    MessageCirclePlus,
    Megaphone,
    Settings,
    PanelsTopLeft,
    Sparkle,
    CircleHelp,
    SquarePen,
    Tv,
    Videotape,
    Users,
    Group,
    MonitorPlay,
    Newspaper,
    LogOut,
    Repeat
  },
  data() {
    return {
      isShowMenu: false,
      isShowMessager: false,
      isShowNotice: false,
      isShowMore: false,
      avatar: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      userCurrent: {},
      profileInFor: {}
    }
  },
  methods: {
    getProfile() {
      const dataProfile = apiProfile.getProfile(this.userCurrent.username)
      dataProfile.then((res) => {
        this.profileInFor = res.data.result
      })
    },
    logOut() {
      const logout = apiAuth.loginAccount({ refresh_token: localStorage.getItem("refresh_token") || '' })
      logout.then((res) => {
        if (res.status === 200) {
          clearLS()
          this.$router.push("/")
          this.$toast.success(res.data.message, {
            position: "bottom-right"
          })
        }
      })
    }
  }
}
</script>
