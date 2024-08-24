<template>
    <div class="modal fade" id="create_posts" tabindex="-1" aria-labelledby="create_post" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title flex justify-center text-2xl font-bold text-blue-500" id="exampleModalLabel">
                        Tạo bài viết
                    </h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="flex w-full">
                        <a class="h-[40px] w-[40px] hover:brightness-90" href="">
                            <img class="h-full w-full rounded-full"
                                :src="userCurrent.avatar ? userCurrent.avatar : avatar" alt="" />
                        </a>
                        <div class="ml-[10px]">
                            <p class="text-[15px] font-medium text-black">{{ userCurrent.name }}</p>
                            <div class="w-32">
                                <select class="form-select border-black py-1 shadow-none outline-none"
                                    aria-label="Default select example">
                                    <option class="truncate" value="1" selected>Công khai</option>
                                    <option class="truncate" value="2">Bạn bè</option>
                                    <option class="truncate" value="3">Bạn bè cụ thể</option>
                                    <option class="truncate" value="4">Chỉ mình tôi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 w-full pb-[50px]">
                        <textarea class="w-full resize-none break-words border-0 px-0 focus:outline-none focus:ring-0"
                            :placeholder="placeholder" rows="3" v-model="content" @paste="handlePaste">
              </textarea>
                        <div class="h-[200px] overflow-auto" v-if="media[0]">
                            <div v-for="(value, index) in media" :key="index" class="relative my-3">
                                <img v-if="value.url" :src="value.url" alt=""
                                    class="object-content h-[280px] w-full border" />
                                <X class="absolute right-1 top-1 cursor-pointer text-4xl hover:text-gray-500"
                                    @click="handleDeleteMedia(index)" />
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full items-center justify-between">
                        <img class="h-[38px] w-[38px] cursor-pointer"
                            src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
                        <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
                    </div>
                    <div class="w-full py-[15px]">
                        <div
                            class="border-1 mb-[15px] flex w-full items-center justify-between rounded-lg border-gray-300 p-[8px]">
                            <span class="cursor-pointer font-medium text-black">Thêm vào bài viết của bạn</span>
                            <div class="flex justify-around">
                                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]"
                                    @click="openFileInput">
                                    <img class="h-[24px] w-[24px] cursor-pointer"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeHqUBHb5H6DvGo3fHFIMnuhPL4YoeGsw5I8vhih4azDkvYK82Ph4rTMk09D3rFp2rwKaE5BuKt1RCFgJFAPRiON"
                                        alt="" />
                                </div>
                                <div
                                    class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                                    <img class="h-[24px] w-[24px] cursor-pointer"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGuHbvZi5VThlabTWO4Jot1ohqwRjkkxMOiGrBGOSTEw013eQjAhLtPOW8G-i21QMySd7WPo7ORquKG89ZSVFi1"
                                        alt="" />
                                </div>
                                <div
                                    class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                                    <img class="h-[24px] w-[24px] cursor-pointer"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeG3Yrx0YPc7BGvU6hgwmd1wvPIN-OmHLJy88g346YcsnPOTwiP9nl5vjkc3RY4qdb0hvpvvF96JXeJ4M26dypyH"
                                        alt="" />
                                </div>
                                <div
                                    class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                                    <img class="h-[24px] w-[24px] cursor-pointer"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeGJZzAHVkPgsJxKvjTL4bu_88Ps36vvyGDzw-zfq-_IYIzspbLkXkbpS0cEn9JCveilbvBA3AJMRQWcGB70SX8N"
                                        alt="" />
                                </div>
                                <div
                                    class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                                    <img class="h-[24px] w-[24px] cursor-pointer"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeFPcLUl2wa_geZXrdq03zCoJTqz5hgP3TklOrPmGA_dOccT_16aJXX9MLVp335HzRu9AVI65L3H3CJ-kx3OOE5N"
                                        alt="" />
                                </div>
                                <div
                                    class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                        </div>

                        <button class="w-full rounded-lg bg-[#0861F2] py-[10px] font-medium text-white"
                            data-bs-dismiss="modal" aria-label="Close" v-on:click="addPost">
                            Đăng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>