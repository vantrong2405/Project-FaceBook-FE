<!-- eslint-disable vue/valid-v-model -->
<template>
  <input type="file" hidden name="file" ref="fileInput" id="file" @change="handleFileUpload" />
  <div class="min-h-screen w-full bg-[#F0F2F5]">
    <div class="flex">
      <left-bar-home :userCurrent="userCurrent" :avatar="avatar" />
      <div class="mx-44 mt-7 w-full">
        <div class="">
          <div class="flex flex-col gap-4 rounded-lg border-[1px] bg-[white] p-2 shadow-sm">
            <div id="storie" class="rounded-lg">
              <div
                class="h-18 flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1 transition-colors duration-300 hover:bg-myGray-900">
                <div id="post-svg-plus" class="cursor-pointer rounded-full bg-face-blue-light p-2.5">
                  <svg-create class="w-5 text-face-blue" />
                </div>
                <div id="title" class="flex flex-col">
                  <span class="text-tiny mobile-x:text-lg">Create Story</span>
                  <span class="text-xs text-myGray-600 mobile-x:text-tiny">Share a photo or write something.</span>
                </div>
              </div>
            </div>
            <div id="new-post" class="flex h-32 flex-col justify-between rounded-lg p-2">
              <div id="new-post-top" class="flex items-center gap-3 p-1">
                <div class="_pp_ cursor-pointer">
                  <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="h-9 w-10 rounded-full" alt="" />
                </div>
                <input data-bs-toggle="modal" data-bs-target="#create_posts"
                  class="h-10 w-full cursor-pointer rounded-full border-[0px] bg-[#F0F2F5] px-3 text-tiny font-semibold outline-none transition-colors hover:bg-[#E4E6E9] focus:shadow-none focus:outline-none focus:ring-transparent mobile-x:text-base"
                  type="text" name="" :placeholder="placeholderPre" />
              </div>
              <hr class="mx-2" />
              <div id="new-post-bottom" class="flex items-center justify-around px-2">
                <div
                  class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900">
                  <svg-live-video class="w-6 text-red-500" />
                  <span>Live Video</span>
                </div>
                <div
                  class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900">
                  <svg-photo class="w-6 text-green-500" />
                  <span>Photo/video</span>
                </div>
                <div
                  class="hidden h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900 mobile-x:flex">
                  <svg-smile class="w-6 text-yellow-400" />
                  <span>Feeling/activity</span>
                </div>
              </div>
            </div>
          </div>
          <ul v-for="(value, index) in allNewFeed" :key="index">
            <li class="my-4 w-full rounded-lg border-[1px] bg-[white] py-2 shadow-sm transition-colors duration-300">
              <div id="post-top" class="flex w-full items-center justify-between p-4 py-2">
                <div id="post-top_left" class="flex items-center gap-2">
                  <router-link :to="`/profile/${value.user.username}`">
                    <div id="post-top_left_pp" class="w-max cursor-pointer rounded-full border-2 ring-opacity-70">
                      <img :src="value.user.avatar ? value.user.avatar : avatar" class="h-8 w-8 rounded-full" alt="" />
                    </div>
                  </router-link>
                  <router-link :to="`/profile/${value.user.username}`">
                    <div id="post-top_left_title">
                      <p class="cursor-pointer font-bold capitalize hover:underline">
                        {{ value.user.name }}
                      </p>
                      <p class="mt-1 flex items-center text-xs">
                        <span class="cursor-pointer hover:underline">{{ dinhDangNgay(value?.created_at ?? "") }}</span>
                        <span class="mx-1">·</span>
                        <svg-world class="w-3" />
                      </p>
                    </div>
                  </router-link>
                </div>
                <div id="post-top_right" class="flex items-center">
                  <div
                    class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-gray-200">
                    <svg-dots class="w-4" />
                  </div>
                  <div
                    class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-gray-200">
                    <X class="w-10" />
                  </div>
                </div>
              </div>
              <div id="post-middle">
                <div class="whitespace-pre-wrap p-4 py-2 text-sm font-normal leading-5">
                  {{ value.content }}
                </div>
                <render-image :allNewFeedDetail="value" />
              </div>
              <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                <div id="post-bottom_info" class="flex items-center justify-between">
                  <div id="info_left" class="flex cursor-pointer gap-2">
                    <svg-like class="w-5" />
                    <span class="hover:underline"> {{ value.likes }}</span>
                  </div>
                  <div id="info_right">
                    <span class="mr-3 cursor-pointer hover:underline">{{ value.comments }} Comment</span>
                    <span class="cursor-pointer hover:underline">{{ value.shares }} Share</span>
                  </div>
                </div>
                <div id="post-bottom_buttons"
                  class="my-2 flex items-center border-b border-t border-myGray-900 text-sm font-normal sm:text-tiny">
                  <div
                    class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                    :class="{ 'text-[#0861f2]': value.user_liked.liked }" @click="likePost(value, index)">
                    <i class="fa-solid fa-thumbs-up text-2xl"></i>
                    <span>Like</span>
                  </div>
                  <div
                    class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                    data-bs-toggle="modal" data-bs-target="#modalComment" @click="
                      handleDetailPost(index);
                    contentComment = ''
                      ">
                    <svg-comment class="w-5" />
                    <span>Comment</span>
                  </div>
                  <div data-bs-toggle="modal" data-bs-target="#share_posts"
                    class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900">
                    <Forward class="w-5" />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </li>
            <!-- modal comment ne -->
            <div class="modal fade" id="modalComment" tabindex="-1" aria-labelledby="modalCommentLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">
                      Bài viết của {{ valueDetailPost?.user?.name ?? "" }}
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body pb-0">
                    <li>
                      <div id="post-top" class="flex w-full items-center justify-between p-4 py-2">
                        <div id="post-top_left" class="flex items-center gap-2">
                          <div id="post-top_left_pp"
                            class="w-max cursor-pointer rounded-full border-2 border-black ring-2 ring-blue-500 ring-opacity-70">
                            <img :src="valueDetailPost && valueDetailPost.user && valueDetailPost.user.avatar
                              ? valueDetailPost.user.avatar
                              : avatar
                              " class="h-8 w-8 rounded-full" alt="" />
                          </div>
                          <div id="post-top_left_title">
                            <p class="cursor-pointer font-bold capitalize hover:underline">
                              {{ valueDetailPost?.user?.name ?? "" }}
                            </p>
                            <p class="mt-1 flex items-center text-xs">
                              <span class="cursor-pointer hover:underline">{{
                                dinhDangNgay(valueDetailPost ? valueDetailPost.created_at : "")
                                }}</span>
                              <span class="mx-1">·</span>
                              <svg-world class="w-3" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id="post-middle">
                        <div class="p-4 py-2 text-sm font-normal leading-5">
                          {{ valueDetailPost ? valueDetailPost.content : "" }}
                        </div>
                        <render-image :allNewFeedDetail="valueDetailPost" />
                      </div>
                      <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                        <div id="post-bottom_info" class="flex items-center justify-between">
                          <div id="info_left" class="flex cursor-pointer gap-2">
                            <svg-like class="w-5" />
                            <span class="hover:underline"> {{ value.likes }}</span>
                          </div>
                          <div id="info_right">
                            <span class="mr-3 cursor-pointer hover:underline">{{ value.comments }} Comment</span>
                            <span class="cursor-pointer hover:underline">{{ value.shares }} Share</span>
                          </div>
                        </div>
                        <div id="post-bottom_buttons"
                          class="my-2 flex items-center border-b border-t border-myGray-900 text-sm font-normal sm:text-tiny">
                          <div
                            class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                            :class="{ 'text-[#0861f2]': value.user_liked.liked }" @click="likePost(value, index)">
                            <i class="fa-solid fa-thumbs-up text-2xl"></i>
                            <span>Like</span>
                          </div>
                          <div
                            class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900">
                            <svg-comment class="w-5" />
                            <span>Comment</span>
                          </div>
                          <div data-bs-toggle="modal" data-bs-target="#share_posts"
                            class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900">
                            <Forward class="w-5" />
                            <span>Share</span>
                          </div>
                        </div>
                        <div id="post-bottom-comments ">
                          <div id="other" class="my-2 flex gap-2"
                            v-for="(commentDetail, key) in valueDetailPost.postComment" :key="key">
                            <div id="other_pp">
                              <img :src="userCurrent.avatar ? userCurrent.avatar : avatar"
                                class="h-9 w-9 cursor-pointer rounded-full" alt="" />
                            </div>
                            <div id="other_comment" class="max-w-[80%] rounded-lg pb-2">
                              <div class="rounded-2xl bg-slate-100 px-3 py-2">
                                <div id="commnet-name" class="cursor-pointer text-xs font-bold hover:underline">
                                  {{ commentDetail.user[0].name }}
                                </div>
                                <div class="max-w-full break-words" id="comment-title">
                                  {{ commentDetail.content }}
                                </div>
                              </div>
                              <div class="mt-1 px-3 text-xs">
                                <span class="cursor-pointer hover:underline">Like</span> ·
                                <span class="cursor-pointer hover:underline">Reply</span> ·
                                <span class="cursor-pointer hover:underline">Share</span> ·
                                <span class="cursor-pointer hover:underline">2d</span>
                              </div>
                            </div>
                            <div class="mt-[3%]">
                              <Trash2 class="cursor-pointer hover:text-black" data-bs-toggle="modal"
                                data-bs-target="#modalDeleteCommment" v-if="userCurrent._id == commentDetail.user_id"
                                @click="
                                  valueCommentDetail = commentDetail
                                  " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div class="modal-footer">
                    <div id="me" class="flex w-full gap-2 px-[15px]">
                      <img :src="userCurrent.avatar ? userCurrent.avatar : avatar"
                        class="h-9 w-9 cursor-pointer rounded-full" alt="" />
                      <div class="flex w-full flex-col">
                        <div id="me_comment"
                          class="flex w-full rounded-2xl bg-slate-100 outline-none ring-transparent focus:outline-none">
                          <!-- input Comment -->
                          <input
                            class="w-full rounded-2xl border-0 bg-transparent px-3 outline-none focus:border-black focus:outline-none focus:ring-transparent"
                            type="text" placeholder="Viết câu trả lời..." v-model="contentComment"
                            v-on:keyup.enter="commentPost(valueDetailPost._id)" />
                          <div id="me_comment_buttons" class="flex items-center">
                            <div class="cursor-pointer rounded-full p-2 transition-colors duration-300">
                              <svg-smile class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900">
                              <svg-live-video class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900">
                              <svg-menu class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900">
                              <svg-photo class="w-4 text-myGray-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <right-bar-home />
    </div>
    <div
      class="fixed bottom-5 right-5 flex cursor-pointer items-center justify-center rounded-full border-2 bg-white p-[14px] text-black transition-colors duration-300 hover:bg-myGray-700">
      <svg-new-message class="w-5" />
    </div>
    <!-- modal create ne-->
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
                <img class="h-full w-full rounded-full" :src="userCurrent.avatar ? userCurrent.avatar : avatar"
                  alt="" />
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
                  <img v-if="value.url" :src="value.url" alt="" class="object-content h-[280px] w-full border" />
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
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="h-[24px] w-[24px] cursor-pointer"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGuHbvZi5VThlabTWO4Jot1ohqwRjkkxMOiGrBGOSTEw013eQjAhLtPOW8G-i21QMySd7WPo7ORquKG89ZSVFi1"
                      alt="" />
                  </div>
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="h-[24px] w-[24px] cursor-pointer"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeG3Yrx0YPc7BGvU6hgwmd1wvPIN-OmHLJy88g346YcsnPOTwiP9nl5vjkc3RY4qdb0hvpvvF96JXeJ4M26dypyH"
                      alt="" />
                  </div>
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="h-[24px] w-[24px] cursor-pointer"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeGJZzAHVkPgsJxKvjTL4bu_88Ps36vvyGDzw-zfq-_IYIzspbLkXkbpS0cEn9JCveilbvBA3AJMRQWcGB70SX8N"
                      alt="" />
                  </div>
                  <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
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

              <button class="w-full rounded-lg bg-[#0861F2] py-[10px] font-medium text-white" data-bs-dismiss="modal"
                aria-label="Close" v-on:click="postArticle">
                Đăng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal delete-comment -->
    <div class="modal fade" id="modalDeleteCommment" tabindex="-1" aria-labelledby="modalCommentLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">
              Xóa bình luận {{ valueCommentDetail?.user?.[0]?.name ?? "" }}
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="flex h-[100px] items-center rounded-md bg-yellow-500">
              <div class="w-[10%] text-center">
                <div
                  class="ml-[10px] flex h-[32px] w-[32px] items-center justify-center rounded-full border-[3px] border-black">
                  <i class="fa-solid fa-exclamation text-[20px] text-black"></i>
                </div>
              </div>
              <div class="ml-[10px]">
                <p class="text-[15px] font-medium text-red-500">Warning</p>
                <p class="text-[15px] text-black">
                  Bạn có muốn xóa bình luận
                  <b>{{ valueCommentDetail ? valueCommentDetail.content : "" }}</b> này không ?
                </p>
                <p class="text-[15px] text-black">
                  <span class="text-[15px] font-semibold text-black">Lưu ý: </span>Điều này không thể hoàn tác!
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              @click="handleDeleteComment(valueCommentDetail)">
              Xóa ngay
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal-share />
  </div>
</template>
<script>
import svgCreate from "@/components/svg/svgCreate.vue"
import svgLiveVideo from "@/components/svg/svgLiveVideo.vue"
import svgPhoto from "@/components/svg/svgPhoto.vue"
import svgSmile from "@/components/svg/svgSmile.vue"
// item
import svgDots from "@/components/svg/svgDots.vue"
import svgWorld from "@/components/svg/svgWorld.vue"
import svgLike from "@/components/svg/svgLike.vue"
import svgLike2 from "@/components/svg/svgLike2.vue"
import svgComment from "@/components/svg/svgComment.vue"
import svgMenu from "@/components/svg/svgMenu.vue"
import { Forward } from "lucide-vue-next"
import svgNewMessage from "@/components/svg/svgNewMessage.vue"
import { Users, Ellipsis, Repeat, X, Trash2 } from "lucide-vue-next"

import http from "@/baseAPI/http"
import axios from "axios"
import { useToast } from "vue-toast-notification"
import leftBarHome from "./components/leftBarHome.vue"
import rightBarHome from "./components/rightBarHome.vue"
import modalShare from "./components/modalShare.vue"
import renderImage from "./components/renderImage.vue"
import { getProfileFromLS } from "@/utils/auth"
export default {
  components: {
    svgCreate,
    svgLiveVideo,
    svgPhoto,
    svgSmile,
    svgDots,
    svgWorld,
    svgLike,
    svgComment,
    svgMenu,
    Forward,
    svgNewMessage,
    X,
    leftBarHome,
    rightBarHome,
    modalShare,
    renderImage,
    Trash2
  },
  async mounted() {
    this.userCurrent = getProfileFromLS()
    await this.getDataNewFeed()
    if (this.userCurrent && this.userCurrent.name) {
      this.placeholder = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`
      this.placeholderPre = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`
    } else {
      this.placeholder = "Bạn đang nghĩ gì thế?"
      this.placeholderPre = "Bạn đang nghĩ gì thế?"
    }
  },
  data() {
    return {
      showModalCreatePost: false,
      showModalShare: false,
      media: [],
      showPrivate: false,
      pageMove: 1,
      avatar: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      fileup: null,
      imageUpload: "",
      typeUpload: "",
      visibility: "",
      content: "",
      mentions: "",
      medias: "",
      allNewFeed: [],
      like: "",
      userCurrent: {},
      indexModalComment: -1,
      placeholder: "",
      valueDetailPost: {},
      contentComment: "",
      placeholderPre: "",
      liked: false,
      valueCommentDetail: ""
    }
  },
  methods: {
    handleFileUpload(event) {
      this.fileup = event.target.files[0]
      this.upFile()
      this.$refs.fileInput.value = ""
    },
    async upFile() {
      if (!this.fileup) {
        console.error("Chưa chọn file.")
        return
      }
      const formData = new FormData()
      formData.append("image", this.fileup)

      await axios
        .post("http://localhost:4000/medias/upload-image", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            console.log(res)
            this.media.push({
              url: res.data.result[0].url,
              type: res.data.result[0].type
            })
            this.fileup = ""
          } else {
            console.error("Lỗi:", res.status)
            console.log(res)
          }
        })
        .catch((error) => {
          console.error("Lỗi khi gửi yêu cầu:", error)
          this.$toast.error("Upload file không thành công", {
            position: "bottom-right"
          })
        })
    },
    openFileInput() {
      this.$refs.fileInput.click()
    },
    postArticle() {
      if (this.content.trim() != "" || this.media.length > 0) {
        const obj = {
          visibility: 1,
          content: this.content,
          mentions: [],
          medias: this.media
        }
        http
          .post("/posts", obj)
          .then((res) => {
            this.$toast.success("Tạo bài viết thành công", {
              position: "bottom-right"
            })
            this.getDataNewFeed()
            this.content = ""
            this.media = []
          })
          .catch((errors) => {
            console.log(errors)
            this.$toast.error("Lỗi khi tạo bài viết", {
              position: "bottom-right"
            })
          })
      } else {
        this.$toast.error("Bài viết chưa có nội dung", {
          position: "bottom-right"
        })
      }
    },
    getDataNewFeed() {
      axios
        .get("http://localhost:4000/posts", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          },
          params: {
            limit: 5,
            page: 1
          }
        })
        .then((res) => {
          this.allNewFeed = res.data.result
          this.allNewFeed.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    chuyenDoiChuoiNgay(chuoiNgay) {
      return new Date(chuoiNgay)
    },
    dinhDangNgay(chuoiNgay) {
      const ngayHienTai = new Date()
      const ngayGoc = this.chuyenDoiChuoiNgay(chuoiNgay)

      if (isNaN(ngayGoc.getTime())) {
        return "Ngày không hợp lệ"
      }
      const khoangCach = ngayHienTai - ngayGoc
      const giay = Math.floor(khoangCach / 1000)
      const phut = Math.floor(giay / 60)
      const gio = Math.floor(phut / 60)
      const ngay = Math.floor(gio / 24)
      const thang = Math.floor(ngay / 30)
      const nam = Math.floor(thang / 12)

      if (phut < 60) {
        return `${phut} phút trước`
      } else if (gio < 24) {
        return `${gio} giờ trước`
      } else if (ngay < 30) {
        return `${ngay} ngày trước`
      } else if (thang < 12) {
        return `${thang} tháng trước`
      } else {
        return `${nam} năm trước`
      }
    },
    async likePost(value, index) {
      const payload = {
        post_id: value._id
      }
      if (value?.user_liked?.liked) {
        try {
          const res = await http.delete(`/likes/post/${payload.post_id}`)
          this.getDataNewFeed()
        } catch (errors) {
          console.log(errors)
        }
      } else {
        try {
          const res = await http.post("/likes", payload)
          this.getDataNewFeed()
          this.liked = this.allNewFeed[index].user_liked.liked
          this.liked = [...this.allNewFeed]
        } catch (errors) {
          console.log(errors)
        }
      }
    },
    handlePaste(event) {
      const clipboardData = event.clipboardData || window.clipboardData
      const items = clipboardData.items
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (item.type.indexOf("image") !== -1) {
          const blob = item.getAsFile()
          const reader = new FileReader()
          reader.onload = (e) => {
            this.media.push({ url: e.target.result, type: 0 })
          }
          reader.readAsDataURL(blob)
        } else if (item.type === "text/plain") {
          item.getAsString((url) => {
            if (this.isImageUrl(url)) {
              this.media.push({ url: url, type: 0 })
            }
          })
        }
      }
      event.preventDefault()
    },
    isImageUrl(url) {
      return /\.(jpeg|jpg|gif|png|webp)$/.test(url)
    },
    handleDeleteMedia(index) {
      if (index >= 0) this.media.splice(index, 1)
    },
    getCommentDetailPost() {
      axios
        .get(`http://localhost:4000/comments/${this.valueDetailPost._id}/post`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          },
          params: {
            limit: 100,
            page: 1
          }
        })
        .then((res) => {
          this.valueDetailPost.postComment = res.data.result.postComment
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    handleDetailPost(index) {
      console.log(">>>>", index)
      this.valueDetailPost = this.allNewFeed[index]
      console.log(this.valueDetailPost)
      if (this.valueDetailPost._id) {
        this.getCommentDetailPost()
      }
    },
    async commentPost(id) {
      const payload = {
        post_id: id,
        content: this.contentComment
      }

      if (this.contentComment.trim() !== "") {
        try {
          const response = await http.post("/comments", payload)
          this.contentComment = ""
          await this.getCommentDetailPost()
          await this.getDataNewFeed()
        } catch (errors) {
          console.log(errors)
        }
      }
    },
    async handleDeleteComment(value) {
      console.log("id comment:", value._id)
      console.log("id post:", value.post_id)
      const payload = {
        post_id: value.post_id
      }
      if (value) {
        try {
          const res = await axios.delete(`http://localhost:4000/comments/post/${value._id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
              "Content-Type": "application/json"
            },
            data: payload
          })
          await this.getCommentDetailPost()
          await this.getDataNewFeed()
          this.$toast.success("Xóa comment thành công", {
            position: "bottom-right"
          })
        } catch (errors) {
          console.log("Lỗi: ", errors.response ? errors.response.data : errors.message)
        }
      }
    }
  },

  computed: {}
}
</script>
<style></style>
