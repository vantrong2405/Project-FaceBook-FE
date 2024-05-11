<template>
  <div class="flex items-center gap-1 sm:gap-2 justify-end px-4">
    <div
      id="menu-box"
      class="p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
    >
      <svg-menu class="w-5 hidden lg:block" />
      <svg-create class="w-5 block lg:hidden" />
    </div>
    <div
      id="messenger-box"
      class="p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
    >
      <svg-messenger class="w-5" />
    </div>
    <div
      id="notifications-box"
      class="p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
    >
      <svg-notifications class="w-5" />
    </div>
    <div
      id="pp-info"
      class="rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
    >
      <div id="pp" class="rounded-full overflow-hidden w-10 relative border">
        <img src="../../assets/images/pp.jpg" alt="" width="100%" />
        <div class="image-avatar"></div>
      </div>
    </div>
    <div
      id="account-box"
      class="relative p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
    >
      <svg-account class="w-5" />
      <router-link to="/profile">
        <div v-if="isShowProfile" class="absolute top-full left-0 bg-red-500 w-20">Profile</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// SVG
import svgMenu from '../svg/svgMenu.vue'
import svgMessenger from '../svg/svgMessenger.vue'
import svgNotifications from '../svg/svgNotifications.vue'
import svgAccount from '../svg/svgAccount.vue'
import svgCreate from '../svg/svgCreate.vue'
export default {
  components: {
    svgMenu,
    svgMessenger,
    svgNotifications,
    svgAccount,
    svgCreate
  },
  data() {
    return {
      isShowProfile: true
    }
  },
  methods: {}
}
</script>
