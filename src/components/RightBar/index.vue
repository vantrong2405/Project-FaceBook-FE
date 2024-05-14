<script>
import { Users, Ellipsis, Repeat } from 'lucide-vue-next'
import svgNewRoom from '../svg/svgNewRoom.vue'
import svgSearch from '../svg/svgSearch.vue'
import svgDots from '../svg/svgDots.vue'
import svgCreate from '../svg/svgCreate.vue'
//SVG

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
          name: 'Thiện Ân',
          route: 'src/assets/images/angela-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea ',
            pictures: 'https://picsum.photos/300/',
            like: '128',
            comment: {
              name: 'Thiện Ân',
              route: 'src/assets/images/tyrell-pp.jpg',
              text: 'Lorem ipsum dolor.'
            }
          }
        },
        {
          name: 'Đức Ninh',
          route: 'src/assets/images/tyrell-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!',
            pictures: 'https://picsum.photos/200',
            like: '63',
            comment: {
              name: 'Angela Moss',
              route: 'src/assets/images/angela-pp.jpg',
              text: 'Lorem ipsum dolor sit amet consectetur.'
            }
          }
        },
        {
          name: 'Nhật Dương',
          route: 'src/assets/images/darlene-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!',
            pictures: 'https://picsum.photos/250',
            like: '99',
            comment: {
              name: 'DiPierro',
              route: 'src/assets/images/dominique-pp.jpg',
              text: 'Lorem ipsum dolor sit amet.'
            }
          }
        },
        {
          name: 'Ân Nguyên',
          route: 'src/assets/images/dominique-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!',
            pictures: 'https://picsum.photos/350',
            like: '135',
            comment: {
              name: 'Darlene Alderson',
              route: 'src/assets/images/darlene-pp.jpg',
              text: 'Lorem ipsum.'
            }
          }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="h-screen px-2 pt-10 pb-20 w-[359px] lg:block box-border overflow-auto">
    <!--Trang và trang cá nhân-->
    <div class="">
      <div class="flex justify-between">
        <p class="mx-1  mt-[10px] font-semibold text-md">Quản lý trang và trang cá nhân của bạn</p>
        <ellipsis class="p-1 hover:bg-gray-300 rounded-lg cursor-pointer" />
      </div>

      <div>
        <div class="hover:bg-gray-200 rounded-lg">
          <div class="flex p-1 my-1 cursor-pointer items-center">
            <img class="w-10 h-10 mr-2 rounded-full"
              src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
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
        <div class="flex hover:bg-gray-200 rounded-lg cursor-pointer mb-2 p-1 py-2" v-for="index in 10" :key="index">
          <img class="w-10 h-10 mr-2 rounded-full"
            src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
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
        <div class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300">
          <svg-new-room class="w-4" />
        </div>
        <div class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300">
          <svg-search class="w-4" />
        </div>
        <div class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300">
          <svg-dots class="w-4" />
        </div>
      </div>
    </div>
    <div id="firends" class="border-b border-myGray-250">
      <ul v-for="(user, index) in users" :key="index">
        <li
          class="flex items-center gap-3 font-semibold text-tiny cursor-pointer hover:bg-myGray-900 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
          <img :src="user.route" class="w-10 h-10 rounded-full" alt="" />
          <span> {{ user.name }} </span>
        </li>
      </ul>
    </div>

    <div id="group-conversation" class="mt-2">
      <div class="my-4 font-semibold text-base px-3">Cuộc trò chuyện nhóm</div>
      <div class="flex p-1 my-1 hover:bg-gray-200 rounded-lg cursor-pointer">
        <img class="w-10 h-10 mx-3 rounded-full"
          src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
        <p class="mt-2 text-sm font-semibold text-gray-600">Những chú báo nhỏ</p>
      </div>
      <div
        class="flex items-center gap-3 w-full cursor-pointer hover:bg-myGray-900 p-3 rounded-lg transition-colors duration-300 mx-2.5">
        <div id="svg-box" class="rounded-full bg-myGray-900">
          <svg-create class="w-5" />
        </div>
        <span class="font-semibold text-tiny">Tạo nhóm mới</span>
      </div>
    </div>
  </div>
</template>
