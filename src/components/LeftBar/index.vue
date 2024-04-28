<!-- eslint-disable vue/no-export-in-script-setup -->
<script>
import svgSeeMore from "../svg/svgSeeMore.vue";
import Privacy from "./Privacy.vue";
import Item from "./Item.vue";
export default {
  components: {
    svgSeeMore,
    Privacy,
    Item,
  },
  data() {
    return {
      items: [
        {
          title: "Elliot Anderson",
          route: "src/assets/images/pp.jpg",
        },
        {
          title: "Friends",
          route: "src/assets/images/png/friends.png",
        },
        {
          title: "Groups",
          route: "src/assets/images/png/groups.png",
        },
        {
          title: "Marketplace",
          route: "src/assets/images/png/marketplace.png",
        },
        {
          title: "Watch",
          route: "src/assets/images/png/watch.png",
        },
        {
          title: "Memories",
          route: "src/assets/images/png/memories.png",
        },
        {
          title: "Saved",
          route: "src/assets/images/png/saved.png",
        },
        {
          title: "Pages",
          route: "src/assets/images/png/pages.png",
        },
        {
          title: "Events",
          route: "src/assets/images/png/events.png",
        },
        {
          title: "Jobs",
          route: "src/assets/images/png/jobs.png",
        },
        {
          title: "Most Recent",
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
      <ul v-for="(item, index) in items" :key="index">
        <Item :item="item" />
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
        <span class="font-semibold text-base"> See more </span>
      </div>
    </div>
    <div id="privacy" class="w-full hidden 2xl:block">
      <Privacy />
    </div>
  </div>
</template>
