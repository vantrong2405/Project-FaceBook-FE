<!-- eslint-disable vue/no-export-in-script-setup -->
<script>
import svgSeeMore from "../svg/svgSeeMore.vue";
import Privacy from "./Privacy.vue";
export default {
  components: {
    svgSeeMore,
    Privacy,
  },
  data() {
    return {
      items: [
        {
          title: "Bạn bè",
          route: "src/assets/images/png/friends.png",
        },
        {
          title: "Nhóm",
          route: "src/assets/images/png/groups.png",
        },
        {
          title: "Marketplace",
          route: "src/assets/images/png/marketplace.png",
        },
        {
          title: "Video",
          route: "src/assets/images/png/watch.png",
        },
        {
          title: "Kỷ niệm",
          route: "src/assets/images/png/memories.png",
        },
        {
          title: "Đã lưu",
          route: "src/assets/images/png/saved.png",
        },
        {
          title: "Trang",
          route: "src/assets/images/png/pages.png",
        },
        {
          title: "Sự kiện",
          route: "src/assets/images/png/events.png",
        },
        {
          title: "Công việc",
          route: "src/assets/images/png/jobs.png",
        },
        {
          title: "Gần đây",
          route: "src/assets/images/png/mostRecent.png",
        },
      ]
    }
  },
}
</script>

<template>
  <div class="
      h-screen
      px-2
      py-4
      flex-col
      justify-between
      hidden
      xl:flex
    ">
    <div id="left-bar-top" class="w-full">
      <!-- ssss -->

      <ul>
        <!-- start -->
        <li class="
      flex
      items-center
      gap-2
      px-3
      py-2
      w-full
      cursor-pointer
      rounded-lg
      hover:bg-myGray-900
    ">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">
            Văn trọng
          </span>
        </li>
        <!-- end -->
      </ul>
      <!-- ssss -->
      <ul v-for="(item, index) in items" :key="index">
        <!-- start -->
        <li class="
      flex
      items-center
      gap-2
      px-3
      py-2
      w-full
      cursor-pointer
      rounded-lg
      hover:bg-myGray-900
    ">
          <img :src="item.route" class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">
            {{ item.title }}
          </span>
        </li>
        <!-- end -->
      </ul>
      <div class="
          flex
          items-center
          gap-2
          p-2
          w-full
          cursor-pointer
          rounded-lg
        hover:bg-myGray-900
          transition-color
          duration-300
        ">
        <div id="svg-see-more-box" class="
            p-2
            rounded-full
            flex
            items-center
            justify-center
          ">
          <svg-see-more class="w-5 " />
        </div>
        <span class="font-semibold text-base"> Xem thêm</span>
      </div>
    </div>
    <div id="privacy" class="w-full hidden 2xl:block">
      <Privacy />
    </div>
  </div>
</template>
