<script>
//SVG
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
    svgCreate
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
  <div class="h-screen px-5 py-5 hidden w-80 lg:block">
    <div id="contacts" class="w-full flex items-center justfiy-between">
      <span class="flex-1 font-semibold text-base pl-5">Liên hệ</span>
      <div id="contact-buttons" class="flex gap-1">
        <div
          class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300"
        >
          <svg-new-room class="w-4" />
        </div>
        <div
          class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300"
        >
          <svg-search class="w-4" />
        </div>
        <div
          class="p-2 rounded-full bg-myGray-900 hover:bg-myGray-700 cursor-pointer transition-colors duration-300"
        >
          <svg-dots class="w-4" />
        </div>
      </div>
    </div>
    <div id="firends" class="border-b border-myGray-250">
      <ul v-for="(user, index) in users" :key="index">
        <li
          class="flex items-center gap-3 font-semibold text-tiny cursor-pointer hover:bg-myGray-900 rounded-lg my-2 px-3 py-2 transition-colors duration-300"
        >
          <img :src="user.route" class="w-10 h-10 rounded-full" alt="" />
          <span> {{ user.name }} </span>
        </li>
      </ul>
    </div>
    <div id="group-conversation" class="mt-2">
      <div class="my-4 font-semibold text-base px-3">Group conversations</div>
      <div
        class="flex items-center gap-3 w-full cursor-pointer hover:bg-myGray-900 p-3 rounded-lg transition-colors duration-300"
      >
        <div id="svg-box" class="p-2 rounded-full bg-myGray-900">
          <svg-create class="w-5" />
        </div>
        <span class="font-semibold text-tiny">Create New Group</span>
      </div>
    </div>
  </div>
</template>
