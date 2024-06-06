<template>
    <div class="h-screen bg-white shadow-md w-[22%] flex flex-col fixed top-[55px] left-0 pl-[5px] pt-[5px]">
        <div id="left-bar-top" class="p-[10px]">
            <ul>
                <li class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">Nhóm</h1>
                    <div
                        class="h-[36px] w-[36px] rounded-full cursor-pointer flex items-center justify-center bg-[#E4E6EB] hover:bg-gray-300">
                        <Settings />
                    </div>
                </li>
                <li>
                    <div class="w-full h-14 py-2 flex items-center">
                        <div class="__logo"></div>
                        <div
                            class="h-9 flex items-center justify-center rounded-full cursor-pointer transition-opacity duration-500">
                        </div>
                        <div
                            class="w-10 flex items-center justify-center h-full bg-gray-100 rounded-full overflow-hidden cursor-pointer xl:flex-1 xl:px-4 xl:cursor-text ml-1 sm:m-0">
                            <svg-search class="w-5" fill="currentColor" />
                            <input
                                class="w-full h-full bg-transparent text-sm px-2 border-none outline-none xl:block focus:outline-none focus:ring-transparent"
                                placeholder="Tìm kiếm nhóm" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="flex-1 pb-[22%] px-[10px] scroll-container">
            <div class="visible">
                <ul>
                    <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <div class="rounded-full bg-[#E4E6EB] p-1">
                            <MonitorPlay class="rounded-full" />
                        </div>
                        <span class="font-semibold text-tiny">Trang chủ</span>
                    </li>

                    <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <div class="rounded-full bg-[#E4E6EB] p-1">
                            <Tv2 class="rounded-full" />
                        </div>
                        <span class="font-semibold text-tiny">Trực tiếp</span>
                    </li>
                    <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <div class="rounded-full bg-[#E4E6EB] p-1">
                            <Film class="rounded-full" />
                        </div>
                        <span class="font-semibold text-tiny">Reels</span>
                    </li>
                    <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <div class="rounded-full bg-[#E4E6EB] p-1">
                            <Clapperboard class="rounded-full" />
                        </div>
                        <span class="font-semibold text-tiny">Chương trình</span>
                    </li>
                    <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <div class="rounded-full bg-[#E4E6EB] p-1">
                            <Rocket class="rounded-full" />
                        </div>
                        <span class="font-semibold text-tiny">Khám phá</span>
                    </li>
                    <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                        <div class="rounded-full bg-[#E4E6EB] p-1">
                            <Save class="rounded-full" />
                        </div>
                        <span class="font-semibold text-tiny">Video đã lưu</span>
                    </li>
                </ul>
            </div>
            <!-- end -->
        </div>
    </div>
    <div class="bg-[#F0F2F5] float-right w-[calc(100%-22%)]">
        <div class="w-full h-full">
            <div class="mx-auto w-[60%]">
                <div class="shadow-md my-4 rounded-lg border bg-white">
                    <div class="flex mb-3 justify-between m-4 items-center" v-for="index in 10" :key="index">
                        <div class="flex">
                            <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="w-12 h-12 rounded-full mr-3"
                                alt="" />
                            <div>
                                <div>
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <p class="font-semibold mr-2">Nhật Dương</p>
                                            <p class="text-[#0866FD]">Theo dõi</p>
                                        </div>

                                    </div>
                                    <p class="text-xs text-gray-500">Bạn bè</p>
                                    <p class="text-xs text-gray-500">Sống tại bình dương</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn btn-primary">Thêm bạn bè</div>
                    </div>


                </div>
            </div>
        </div>
    </div>

</template>
<script>
import svgSeeMore from '@/components/svg/svgSeeMore.vue'
export default {
    components: {
        // svgSeeMore
    },
    watch: {
        '$route.params.id': 'updateSearch'
    },
    mounted() {
        this.updateSearch()
        this.userCurrent = JSON.parse(localStorage.getItem('profile'))
    },
    data() {
        return {
            textSearch: "",
            userCurrent: {},
            avatar: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
        }
    },
    methods: {
        updateSearch() {
            this.textSearch = this.$route.params.id;
            console.log(this.textSearch);
        }
    },
    computed: {
    }
}
</script>
<style></style>