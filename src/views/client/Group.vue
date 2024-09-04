<template>
  <div class="fixed left-0 top-[55px] flex h-screen w-[22%] flex-col bg-white pl-[5px] pt-[5px] shadow-md">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Nhóm</h1>
          <div
            class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-gray-300"
          >
            <Settings />
          </div>
        </li>
        <li>
          <div class="flex h-14 w-full items-center py-2">
            <div class="__logo"></div>
            <div
              class="flex h-9 cursor-pointer items-center justify-center rounded-full transition-opacity duration-500"
            ></div>
            <div
              class="ml-1 flex h-full w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 sm:m-0 xl:flex-1 xl:cursor-text xl:px-4"
            >
              <svg-search class="w-5" fill="currentColor" />
              <input
                class="h-full w-full border-none bg-transparent px-2 text-sm outline-none focus:outline-none focus:ring-transparent xl:block"
                placeholder="Tìm kiếm nhóm"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll-container flex-1 px-[10px] pb-[22%]">
      <div class="visible">
        <ul>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-[12px] hover:bg-myGray-900">
            <Newspaper class="rounded-full" />
            <span class="text-tiny font-semibold">Bảng feed của bạn</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-[12px] hover:bg-myGray-900">
            <Compass class="rounded-full" />
            <span class="text-tiny font-semibold">Khám phá</span>
          </li>
          <li
            class="mb-[10px] flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-[12px] hover:bg-myGray-900"
          >
            <Users class="rounded-full" />
            <span class="text-tiny font-semibold">Nhóm của bạn</span>
          </li>
          <li
            class="flex cursor-pointer items-center justify-center rounded-lg bg-[#EBF5FF] py-[6px] hover:bg-[#DFE9F2]"
          >
            <Plus class="text-[#0064D1]"></Plus>
            <span class="text-[15px] font-medium text-[#0064D1]">Tạo nhóm mới</span>
          </li>
        </ul>
        <hr class="mt-[15px]" />
        <div class="my-[12px] flex flex-row items-center justify-between">
          <p class="text-[15px] font-medium">Nhóm bạn đã tham gia</p>
          <p class="cursor-pointer rounded-md px-[8px] py-[5px] text-[15px] text-[#0064D1] hover:bg-[#F2F2F2]">
            Xem tất cả
          </p>
        </div>
        <ul class="" v-for="(group, index) in group" :key="index">
          <li class="flex h-[55px] w-full cursor-pointer flex-row items-center rounded-lg px-[8px] hover:bg-[#F2F2F2]">
            <div class="flex h-full items-center">
              <img :src="group.route" alt="" class="h-[40px] w-[40px] leading-[55px]" />
            </div>
            <div class="ml-[10px]">
              <p class="mt-[2px] text-[14px] font-medium">{{ group.name }}</p>
              <p class="text-[13px] text-[#65676B]">Lần hoạt động gần nhất: {{ group.time }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="float-right w-[calc(100%-22%)] bg-[#F0F2F5]">
    <div class="h-full w-full">
      <div class="mx-auto w-[58%]">
        <p class="mb-[-15px] pt-[20px] text-[15px] font-medium">Hoạt động gần đây</p>
        <div class="my-4 rounded-lg border bg-white shadow-md" v-for="index in 10" :key="index">
          <div class="m-[10px] mb-3 flex justify-between">
            <div class="flex">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg"
                class="mr-3 h-[40px] w-[40px] rounded-lg"
                alt=""
              />
              <div>
                <div>
                  <div class="flex items-center">
                    <p class="mr-2 font-semibold">Nhật Dương</p>
                    <p class="text-[#0866FD]">Theo dõi</p>
                  </div>
                  <p class="text-xs text-gray-500">2 tháng 2 lúc 22:31</p>
                </div>
              </div>
            </div>
            <Ellipsis />
          </div>
          <p class="mx-3 mb-2 text-xs font-semibold">HELLO WORLD</p>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg"
            class="mb-1 h-[500px] w-full object-cover"
            alt=""
          />
          <div class="mx-3 flex items-center justify-between py-2 text-gray-500">
            <div class="flex">
              <div class="flex cursor-pointer items-center rounded-lg px-[10px] py-[6px] hover:bg-[#F2F2F2]">
                <i class="fas fa-thumbs-up mr-2"></i>
                <p>Like</p>
              </div>
              <div class="flex cursor-pointer items-center rounded-lg px-[10px] py-[6px] hover:bg-[#F2F2F2]">
                <i class="fas fa-comment mr-2"></i>
                <p>Comment</p>
              </div>
              <div class="flex cursor-pointer items-center rounded-lg px-[10px] py-[6px] hover:bg-[#F2F2F2]">
                <i class="fas fa-share mr-2"></i>
                <p>Share</p>
              </div>
            </div>
            <div class="flex text-xs">
              <i
                class="fas fa-thumbs-up ml-auto h-5 w-5 items-center rounded-full bg-[#049CFD] px-1 pt-0.5 text-xs text-white"
              ></i>
              <i
                class="fa-solid fa-heart mr-0.5 h-5 w-5 items-center rounded-full bg-[#FC464E] px-1 pt-0.5 text-xs text-white"
              ></i>
              <span class="mr-2 cursor-pointer hover:underline">Thanh Thư và 22K người khác</span>
              <p class="mr-2 cursor-pointer hover:underline">80 bình luận</p>
              <p>10 triệu lượt xem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Compass, Users, Ellipsis, Plus, Newspaper, Settings } from "lucide-vue-next"
import svgSearch from "../../components/svg/svgSearch.vue"
export default {
  data() {
    return {
      group: [
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        },
        {
          name: "DTU - Đại Học Duy Tân",
          route: "src/assets/images/avatar.jpg",
          time: "5 giờ trước"
        }
      ]
    }
  },
  method: {},
  components: {
    svgSearch,
    Newspaper,
    Compass,
    Users,
    Settings,
    Plus,
    Ellipsis
  }
}
</script>
<style></style>
