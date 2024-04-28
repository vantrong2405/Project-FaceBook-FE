<script>
// SVG
import svgMenu from "../svg/svgMenu.vue";
import svgMessenger from "../svg/svgMessenger.vue";
import svgNotifications from "../svg/svgNotifications.vue";
import svgAccount from "../svg/svgAccount.vue";
import svgCreate from "../svg/svgCreate.vue";
export default {
  components: {
    svgMenu,
    svgMessenger,
    svgNotifications,
    svgAccount,
    svgCreate,
  }
}
</script>

<template>
  <div class="flex items-center gap-1 sm:gap-2 justify-end px-4">

    <div id="pp-info" class="
    p-2
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        bg-myGray-900
        hover:bg-myGray-700
        transition-colors
        duration-300
      ">
      <div id="pp" class="rounded-full overflow-hidden w-7">
        <img src="../../assets/images/pp.jpg" alt="" width="100%" />
      </div>
    </div>
    <div id="menu-box" class="
        p-3
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        bg-myGray-900
        hover:bg-myGray-700
        transition-colors
        duration-300
      ">
      <svg-menu class="w-5 hidden lg:block" />
      <svg-create class="w-5 block lg:hidden" />
    </div>
    <div id="messenger-box" class="
        p-3
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        bg-myGray-900
        hover:bg-myGray-700
        transition-colors
        duration-300
      ">
      <svg-messenger class="w-5" />
    </div>
    <div id="notifications-box" class="
        p-3
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        bg-myGray-900
        hover:bg-myGray-700
        transition-colors
        duration-300
      ">
      <svg-notifications class="w-5" />
    </div>
    <div id="account-box" class="
        p-3
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        bg-myGray-900
        hover:bg-myGray-700
        transition-colors
        duration-300
      ">
      <svg-account class="w-5" />
    </div>
  </div>
</template>
