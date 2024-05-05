<template>
    <div id="app" class="container">
        <div class="grid grid-cols-3 gap-8">
            <!-- Video Column -->
            <div class="col-span-1 shadow-xl w-96">
                <div class="p-4">
                    <div class="flex items-center">
                        <h1 class="text-2xl font-bold mb-4">Video</h1>
                        <i
                            class="fa-solid fa-gear rounded-full border border-gray-100 bg-gray-200 w-9 h-9 px-2 py-1 text-xl ml-auto"></i>
                    </div>
                    <form class="mt-2 relative flex items-center">
                        <i class="fa-solid fa-magnifying-glass absolute ml-3 text-gray-600"></i>
                        <input type="text" class="rounded-full font-semibold p-1 pr-3 pl-10 bg-gray-200"
                            placeholder="Tìm kiếm video">
                    </form>
                    <div>
                        <div class="video-menu mt-3 hover:bg-gray-200 rounded-lg">
                            <div class="mt-3 items-center rounded-lg"></div>
                            <div class="flex items-center">
                                <i
                                    class="fa-solid fa-tv rounded-full border w-9 h-9 px-2 pt-1.5 mr-3 text-base bg-[#1877F2] text-white"></i>
                                <p>Trang chủ</p>
                            </div>
                        </div>
                        <div class="video-menu">
                            <div class="mt-3 relative flex items-center"></div>
                            <div class="flex items-center hover:bg-gray-200 rounded-lg">
                                <i
                                    class="fa-solid fa-video rounded-full border border-gray-100 w-9 h-9 bg-gray-200 px-2 py-1 mr-2 text-lg"></i>
                                <p>Trực tiếp</p>
                            </div>
                        </div>
                        <div class="video-menu">
                            <div class="mt-3 relative flex items-center"></div>
                            <div class="flex items-center hover:bg-gray-200 rounded-lg">
                                <i
                                    class="fa-solid fa-file-video rounded-full border border-gray-100 w-9 h-9 bg-gray-200 px-2.5 mr-3 text-2xl"></i>
                                <p>Reel</p>
                            </div>
                        </div>
                        <div class="video-menu">
                            <div class="mt-3 relative flex items-center"></div>
                            <div class="flex items-center hover:bg-gray-200 rounded-lg">
                                <i
                                    class="fa-solid fa-film rounded-full border border-gray-100 w-9 h-9 bg-gray-200 px-2 py-1 mr-3 text-xl"></i>
                                <p>Chương trình</p>
                            </div>
                        </div>
                        <div class="video-menu">
                            <div class="mt-3 relative flex items-center"></div>
                            <div class="flex items-center hover:bg-gray-200 rounded-lg">
                                <i
                                    class="fa-solid fa-rocket rounded-full border border-gray-100 w-9 h-9 bg-gray-200 px-1.5 py-1 mr-3 text-xl"></i>
                                <p>Khám phá</p>
                            </div>
                        </div>
                        <div class="video-menu">
                            <div class="mt-3 relative flex items-center"></div>
                            <div class="flex items-center hover:bg-gray-200 rounded-lg">
                                <i
                                    class="fa-solid fa-bookmark rounded-full border border-gray-100 w-9 h-9 bg-gray-200 px-2.5 py-1 mr-3 text-xl"></i>
                                <p>Video đã lưu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Content -->

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>