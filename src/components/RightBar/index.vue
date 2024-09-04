<script>
import { Ellipsis, Repeat } from "lucide-vue-next"
import svgNewRoom from "../svg/svgNewRoom.vue"
import svgSearch from "../svg/svgSearch.vue"
import svgDots from "../svg/svgDots.vue"
import svgCreate from "../svg/svgCreate.vue"
export default {
  components: {
    svgNewRoom,
    svgSearch,
    svgDots,
    svgCreate,
    Ellipsis,
    Repeat
  },
  data() {
    return {
      users: [
        {
          name: "Thiện Ân",
          route: "src/assets/images/angela-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea ",
            pictures: "https://picsum.photos/300/",
            like: "128",
            comment: {
              name: "Thiện Ân",
              route: "src/assets/images/tyrell-pp.jpg",
              text: "Lorem ipsum dolor."
            }
          }
        },
        {
          name: "Đức Ninh",
          route: "src/assets/images/tyrell-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
            pictures: "https://picsum.photos/200",
            like: "63",
            comment: {
              name: "Angela Moss",
              route: "src/assets/images/angela-pp.jpg",
              text: "Lorem ipsum dolor sit amet consectetur."
            }
          }
        },
        {
          name: "Nhật Dương",
          route: "src/assets/images/darlene-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
            pictures: "https://picsum.photos/250",
            like: "99",
            comment: {
              name: "DiPierro",
              route: "src/assets/images/dominique-pp.jpg",
              text: "Lorem ipsum dolor sit amet."
            }
          }
        },
        {
          name: "Ân Nguyên",
          route: "src/assets/images/dominique-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
            pictures: "https://picsum.photos/350",
            like: "135",
            comment: {
              name: "Darlene Alderson",
              route: "src/assets/images/darlene-pp.jpg",
              text: "Lorem ipsum."
            }
          }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="box-border h-screen w-[359px] overflow-auto px-2 pb-20 pt-10 lg:block">
    <div>
      <div class="flex justify-between">
        <p class="text-md font-semibold">Quản lý trang và trang cá nhân của bạn</p>
        <ellipsis class="cursor-pointer rounded-lg p-1 hover:bg-gray-300" />
      </div>

      <div>
        <div class="rounded-lg hover:bg-gray-200">
          <div class="my-1 flex cursor-pointer items-center p-1">
            <img
              class="mr-2 h-10 w-10 rounded-full"
              src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
              alt=""
            />
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
        <div class="mb-2 flex cursor-pointer rounded-lg p-1 py-2 hover:bg-gray-200" v-for="index in 10" :key="index">
          <img
            class="mr-2 h-10 w-10 rounded-full"
            src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
            alt=""
          />
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
        <div class="cursor-pointer rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
          <svg-new-room class="w-4" />
        </div>
        <div class="cursor-pointer rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
          <svg-search class="w-4" />
        </div>
        <div class="cursor-pointer rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700">
          <svg-dots class="w-4" />
        </div>
      </div>
    </div>
    <div id="firends" class="border-b border-myGray-250">
      <ul v-for="(user, index) in users" :key="index">
        <li
          class="my-2 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-tiny font-semibold transition-colors duration-300 hover:bg-myGray-900"
        >
          <img :src="user.route" class="h-10 w-10 rounded-full" alt="" />
          <span> {{ user.name }} </span>
        </li>
      </ul>
    </div>

    <div id="group-conversation" class="mt-2">
      <div class="my-4 px-3 text-base font-semibold">Cuộc trò chuyện nhóm</div>
      <div class="my-1 flex cursor-pointer rounded-lg p-1 hover:bg-gray-200">
        <img
          class="mx-3 h-10 w-10 rounded-full"
          src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
          alt=""
        />
        <p class="mt-2 text-sm font-semibold text-gray-600">Những chú báo nhỏ</p>
      </div>
      <div
        class="mx-2.5 flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-myGray-900"
      >
        <div id="svg-box" class="rounded-full bg-myGray-900">
          <svg-create class="w-5" />
        </div>
        <span class="text-tiny font-semibold">Tạo nhóm mới</span>
      </div>
    </div>
  </div>
</template>
