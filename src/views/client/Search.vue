<template>
  <div class="fixed left-0 top-[55px] flex h-screen w-[22%] flex-col bg-white pl-[5px] pt-[5px] shadow-md">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Tìm kiếm</h1>
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
                v-model="textSearch"
                v-on:input="handleSearchUser"
                v-on:keyup.enter="handleSearchUser"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll-container flex-1 px-[10px] pb-[22%]">
      <div class="visible">
        <ul>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <MonitorPlay class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Trang chủ</span>
          </li>

          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Tv2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Trực tiếp</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Film class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Reels</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Clapperboard class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Chương trình</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Rocket class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Khám phá</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Save class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Video đã lưu</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="float-right min-h-dvh w-[calc(100%-22%)] bg-[#F0F2F5]" v-if="listUserSearch.length > 0">
    <div class="h-full w-full">
      <div class="mx-auto w-[60%]">
        <div class="my-4 rounded-lg border bg-white shadow-md">
          <template v-for="(value, key) in listUserSearch" :key="key">
            <div class="m-4 mb-3 flex items-center justify-between">
              <router-link :to="`/profile/${value.username}`">
                <div class="">
                  <div class="flex">
                    <img :src="value.avatar ? value.avatar : avatar" class="mr-3 h-12 w-12 rounded-full" alt="" />
                    <div>
                      <div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <p class="mr-2 font-semibold">{{ value ? value.name : "" }}</p>
                            <p class="text-[#0866FD]">Theo dõi</p>
                          </div>
                        </div>
                        <p class="text-xs text-gray-500">Bạn bè</p>
                        <p class="text-xs text-gray-500">Sống tại bình dương</p>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <router-link :to="`/profile/${value.username}`">
                <div class="btn btn-primary">Xem chi tiết</div>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div
    class="float-right my-2 min-h-dvh w-[calc(100%-22%)] bg-[#F0F2F5] text-center text-xl"
    v-if="listUserSearch.length == 0"
  >
    Không có kết quả nào
  </div>
</template>
<script>
import svgSearch from "@/components/svg/svgSearch.vue"
import { Rocket, Clapperboard, Save, Tv2, Film, Settings, MonitorPlay } from "lucide-vue-next"
import { getProfileFromLS } from "@/utils/auth"
import apiSearch from "@/apis/search.api"
export default {
  components: {
    svgSearch,
    Rocket,
    Clapperboard,
    Save,
    Tv2,
    Film,
    Settings,
    MonitorPlay
  },
  watch: {
    "$route.params.id": "updateSearch"
  },
  async mounted() {
    this.updateSearch()
    this.userCurrent = getProfileFromLS()
    await this.getAllUser()
  },
  data() {
    return {
      textSearch: "",
      userCurrent: {},
      avatar: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      listUserSearch: [],
      listUserSearchClone: []
    }
  },
  methods: {
    updateSearch() {
      this.textSearch = this.$route.params.id
    },
    async getAllUser() {
      await apiSearch.searchUser().then((res) => {
        this.listUserSearch = res.data.result
        this.listUserSearchClone = [...this.listUserSearch]
        this.handleSearchUser()
      })
    },
    handleSearchUser() {
      this.listUserSearch = [...this.listUserSearchClone]
      var text = this.textSearch.toLowerCase()
      this.listUserSearch = this.listUserSearch.filter((items) => {
        return items.name.toLowerCase().includes(text)
      })
    }
  }
}
</script>
