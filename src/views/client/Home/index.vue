<!-- eslint-disable vue/valid-v-model -->
<template>
  <input type="file" hidden name="file" ref="fileInput" id="file" @change="handleFileUpload" />
  <div class="bg-[#F0F2F5] w-full min-h-screen">
    <div class="flex">
      <left-bar-home :userCurrent="userCurrent" :avatar="avatar" />
      <div class="w-full mt-7 mx-44 ">
        <div class="">
          <div class="bg-[white] flex flex-col gap-4 border-[1px] p-2 rounded-lg shadow-sm">
            <div id="storie" class="rounded-lg">
              <div
                class="w-full h-18 rounded-lg py-1 px-2 flex items-center gap-3 cursor-pointer hover:bg-myGray-900 transition-colors duration-300">
                <div id="post-svg-plus" class="p-2.5 bg-face-blue-light rounded-full cursor-pointer">
                  <svg-create class="w-5 text-face-blue" />
                </div>
                <div id="title" class="flex flex-col">
                  <span class="mobile-x:text-lg text-tiny">Create Story</span>
                  <span class="mobile-x:text-tiny text-xs text-myGray-600">Share a photo or write something.</span>
                </div>
              </div>
            </div>
            <div id="new-post" class="h-32 p-2 rounded-lg flex flex-col justify-between">
              <div id="new-post-top" class="p-1 flex gap-3 items-center">
                <div class="_pp_ cursor-pointer">
                  <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="w-10 rounded-full" alt="" />
                </div>
                <input data-bs-toggle="modal" data-bs-target="#create_posts"
                  class="cursor-pointer w-full h-10 rounded-full border-[0px] bg-[#F0F2F5] hover:bg-[#E4E6E9] outline-none text-tiny px-3 font-semibold transition-colors mobile-x:text-base focus:outline-none focus:shadow-none focus:ring-transparent"
                  type="text" name="" :placeholder="placeholderPre" />
              </div>
              <hr class="mx-2" />
              <div id="new-post-bottom" class="flex items-center justify-around px-2">
                <div
                  class="w-full h-10 flex items-center justify-center gap-2 hover:bg-myGray-900 rounded-lg cursor-pointer transition-colors duration-300">
                  <svg-live-video class="w-6 text-red-500" />
                  <span>Live Video</span>
                </div>
                <div
                  class="w-full h-10 flex items-center justify-center gap-2 hover:bg-myGray-900 rounded-lg cursor-pointer transition-colors duration-300">
                  <svg-photo class="w-6 text-green-500" />
                  <span>Photo/video</span>
                </div>
                <div
                  class="w-full h-10 items-center justify-center gap-2 hover:bg-myGray-900 rounded-lg cursor-pointer transition-colors duration-300 hidden mobile-x:flex">
                  <svg-smile class="w-6 text-yellow-400" />
                  <span>Feeling/activity</span>
                </div>
              </div>
            </div>
          </div>
          <ul v-for="(value, index) in allNewFeed" :key="index">
            <li class="w-full bg-[white] my-4 rounded-lg transition-colors duration-300 border-[1px] shadow-sm py-2">
              <div id="post-top" class="w-full flex items-center justify-between p-4 py-2">
                <div id="post-top_left" class="flex items-center gap-2">
                  <router-link :to="`/profile/${value.user.username}`">
                    <div id="post-top_left_pp"
                      class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                      <img :src="value.user.avatar ? value.user.avatar : avatar" class="w-8 h-8 rounded-full" alt="" />
                    </div>
                  </router-link>
                  <router-link :to="`/profile/${value.user.username}`">
                    <div id="post-top_left_title">
                      <p class="hover:underline cursor-pointer font-bold capitalize">
                        {{ value.user.name }}
                      </p>
                      <p class="flex text-xs mt-1 items-center">
                        <span class="hover:underline cursor-pointer">{{
                          dinhDangNgay(value?.created_at ?? '')
                        }}</span>
                        <span class="mx-1">·</span>
                        <svg-world class="w-3" />
                      </p>
                    </div>
                  </router-link>
                </div>
                <div id="post-top_right" class="flex items-center">
                  <div
                    class="w-[32px] h-[32px] rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer duration-300">
                    <svg-dots class="w-4" />
                  </div>
                  <div
                    class="w-[32px] h-[32px] rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer duration-300">
                    <X class="w-10" />
                  </div>
                </div>
              </div>
              <div id="post-middle">
                <div class="font-normal leading-5 text-sm p-4 py-2 whitespace-pre-wrap">
                  {{ value.content }}
                </div>
                <render-image :allNewFeedDetail='value' />
              </div>
              <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                <div id="post-bottom_info" class="flex items-center justify-between">
                  <div id="info_left" class="flex gap-2 cursor-pointer">
                    <svg-like class="w-5" />
                    <span class="hover:underline"> {{ value.likes }}</span>
                  </div>
                  <div id="info_right">
                    <span class="hover:underline cursor-pointer mr-3">{{ value.comments }} Comment</span>
                    <span class="hover:underline cursor-pointer">{{ value.shares }} Share</span>
                  </div>
                </div>
                <div id="post-bottom_buttons"
                  class="font-normal text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-900">
                  <div
                    class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300 "
                    :class="{ 'text-[#0861f2]': value.user_liked.liked }" @click="likePost(value, index)">
                    <i class="fa-solid fa-thumbs-up text-2xl"></i>
                    <span>Like</span>
                  </div>
                  <div
                    class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300"
                    data-bs-toggle="modal" data-bs-target="#modalComment"
                    @click="handleDetailPost(index); contentComment = ''">
                    <svg-comment class="w-5" />
                    <span>Comment</span>
                  </div>
                  <div data-bs-toggle="modal" data-bs-target="#share_posts"
                    class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300">
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
                    <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">Bài viết của {{
                      valueDetailPost?.user?.name ?? '' }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body pb-0">
                    <li>
                      <div id="post-top" class="w-full flex items-center justify-between p-4 py-2">
                        <div id="post-top_left" class="flex items-center gap-2">
                          <div id="post-top_left_pp"
                            class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                            <img
                              :src="valueDetailPost && valueDetailPost.user && valueDetailPost.user.avatar ? valueDetailPost.user.avatar : avatar"
                              class="w-8 h-8 rounded-full" alt="" />
                          </div>
                          <div id="post-top_left_title">
                            <p class="hover:underline cursor-pointer font-bold capitalize">
                              {{ valueDetailPost?.user?.name ?? '' }}
                            </p>
                            <p class="flex text-xs mt-1 items-center">
                              <span class="hover:underline cursor-pointer">{{
                                dinhDangNgay(valueDetailPost ? valueDetailPost.created_at : '')
                              }}</span>
                              <span class="mx-1">·</span>
                              <svg-world class="w-3" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id="post-middle">
                        <div class="font-normal leading-5 text-sm p-4 py-2">
                          {{ valueDetailPost ? valueDetailPost.content : '' }}
                        </div>
                        <render-image :allNewFeedDetail="valueDetailPost" />
                      </div>
                      <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                        <div id="post-bottom_info" class="flex items-center justify-between">
                          <div id="info_left" class="flex gap-2 cursor-pointer">
                            <svg-like class="w-5" />
                            <span class="hover:underline"> {{ value.likes }}</span>
                          </div>
                          <div id="info_right">
                            <span class="hover:underline cursor-pointer mr-3">{{ value.comments }}
                              Comment</span>
                            <span class="hover:underline cursor-pointer">{{ value.shares }} Share</span>
                          </div>
                        </div>
                        <div id="post-bottom_buttons"
                          class="font-normal text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-900">
                          <div
                            class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300 "
                            :class="{ 'text-[#0861f2]': value.user_liked.liked }" @click="likePost(value, index);">
                            <i class="fa-solid fa-thumbs-up text-2xl"></i>
                            <span>Like</span>
                          </div>
                          <div
                            class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                            <svg-comment class="w-5" />
                            <span>Comment</span>
                          </div>
                          <div data-bs-toggle="modal" data-bs-target="#share_posts"
                            class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                            <Forward class="w-5" />
                            <span>Share</span>
                          </div>
                        </div>
                        <div id="post-bottom-comments ">
                          <div id="other" class="flex gap-2 my-2"
                            v-for="(commentDetail, key) in valueDetailPost.postComment " :key="key">
                            <div id="other_pp">
                              <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                                class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                            </div>
                            <div id="other_comment" class=" rounded-lg pb-2 max-w-[80%]">
                              <div class="py-2 px-3 rounded-2xl bg-slate-100">
                                <div id="commnet-name" class="cursor-pointer hover:underline font-bold text-xs">
                                  {{ commentDetail.user[0].name }}
                                </div>
                                <div class="max-w-full break-words" id="comment-title">{{ commentDetail.content }}</div>
                              </div>
                              <div class="px-3 text-xs mt-1">
                                <span class="cursor-pointer hover:underline">Like</span> ·
                                <span class="cursor-pointer hover:underline">Reply</span> ·
                                <span class="cursor-pointer hover:underline">Share</span> ·
                                <span class="cursor-pointer hover:underline">2d</span>
                              </div>
                            </div>
                            <div class="mt-[3%]">
                              <Trash2 class="cursor-pointer  hover:text-black" data-bs-toggle="modal"
                                data-bs-target="#modalDeleteCommment" v-if="userCurrent._id == commentDetail.user_id"
                                @click="valueCommentDetail = commentDetail; console.log(commentDetail)" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div class="modal-footer">
                    <div id="me" class="flex w-full gap-2 px-[15px]">
                      <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="
                              w-9 h-9 rounded-full cursor-pointer" alt="" />
                      <div class="flex w-full flex-col">
                        <div id="me_comment"
                          class="flex w-full outline-none focus:outline-none ring-transparent bg-slate-100 rounded-2xl">
                          <!-- input Comment -->
                          <input
                            class="w-full bg-transparent px-3 outline-none border-0 rounded-2xl focus:outline-none focus:ring-transparent focus:border-black"
                            type="text" placeholder="Viết câu trả lời..." v-model="contentComment"
                            v-on:keyup.enter="commentPost(valueDetailPost._id)" />
                          <div id="me_comment_buttons" class="flex items-center">
                            <div class="p-2 rounded-full cursor-pointer transition-colors duration-300">
                              <svg-smile class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="p-2 hover:bg-myGray-900 rounded-full cursor-pointer transition-colors duration-300">
                              <svg-live-video class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="p-2 hover:bg-myGray-900 rounded-full cursor-pointer transition-colors duration-300">
                              <svg-menu class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="p-2 hover:bg-myGray-900 rounded-full cursor-pointer transition-colors duration-300">
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
      class="p-[14px] flex items-center justify-center rounded-full bg-white border-2 text-black fixed right-5 bottom-5 cursor-pointer hover:bg-myGray-700 transition-colors duration-300">
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
            <div class="w-full flex">
              <a class="w-[40px] h-[40px] hover:brightness-90" href="">
                <img class="w-full h-full rounded-full"
                  src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="" />
              </a>
              <div class="ml-[10px]">
                <p class="text-[15px] font-medium text-black">{{ userCurrent.name }}</p>
                <div class="w-full">
                  <select
                    class="border-0 focus:ring-0  text-[15px] w-full px-[5px] font-medium bg-[#E4E6EB] rounded-md cursor-pointer"
                    name="" id="">
                    <option value="1" selected>Công khai</option>
                    <option value="2">Bạn bè</option>
                    <option value="3">Bạn bè cụ thể</option>
                    <option value="4">Bạn bè ngoại trừ</option>
                    <option value="5">Chỉ mình tôi</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="w-full pb-[50px] mt-3">
              <textarea class="w-full border-0 focus:outline-none focus:ring-0 px-0 break-words resize-none"
                :placeholder="placeholder" rows="3" v-model="content" @paste="handlePaste">
              </textarea>
              <div class="h-[200px] overflow-auto" v-if="media[0]">
                <div v-for="(value, index) in media" :key="index" class="my-3 relative">
                  <img v-if="value.url" :src="value.url" alt="" class="w-full h-[280px] object-content border" />
                  <X class="absolute top-1 right-1 text-4xl hover:text-gray-500 cursor-pointer"
                    @click="handleDeleteMedia(index)" />
                </div>
              </div>
            </div>
            <div class="w-full flex items-center justify-between">
              <img class="h-[38px] cursor-pointer w-[38px]"
                src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
              <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
            </div>
            <div class="w-full py-[15px]">
              <div
                class="mb-[15px] p-[8px] w-full flex items-center justify-between border-1 border-gray-300 rounded-lg">
                <span class="text-black font-medium cursor-pointer">Thêm vào bài viết của bạn</span>
                <div class="flex justify-around">
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]"
                    @click="openFileInput">
                    <img class="cursor-pointer h-[24px] w-[24px]"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeHqUBHb5H6DvGo3fHFIMnuhPL4YoeGsw5I8vhih4azDkvYK82Ph4rTMk09D3rFp2rwKaE5BuKt1RCFgJFAPRiON"
                      alt="" />
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGuHbvZi5VThlabTWO4Jot1ohqwRjkkxMOiGrBGOSTEw013eQjAhLtPOW8G-i21QMySd7WPo7ORquKG89ZSVFi1"
                      alt="" />
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeG3Yrx0YPc7BGvU6hgwmd1wvPIN-OmHLJy88g346YcsnPOTwiP9nl5vjkc3RY4qdb0hvpvvF96JXeJ4M26dypyH"
                      alt="" />
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeGJZzAHVkPgsJxKvjTL4bu_88Ps36vvyGDzw-zfq-_IYIzspbLkXkbpS0cEn9JCveilbvBA3AJMRQWcGB70SX8N"
                      alt="" />
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeFPcLUl2wa_geZXrdq03zCoJTqz5hgP3TklOrPmGA_dOccT_16aJXX9MLVp335HzRu9AVI65L3H3CJ-kx3OOE5N"
                      alt="" />
                  </div>
                  <div
                    class="cursor-pointer w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
              </div>

              <button class="w-full py-[10px] bg-[#0861F2] text-white font-medium rounded-lg" data-bs-dismiss="modal"
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
      <div class="modal-dialog modal-dialog-scrollable ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">Xóa bình luận
              {{ valueCommentDetail?.user?.[0]?.name ?? '' }} </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="flex items-center bg-yellow-500 h-[100px] rounded-md">
              <div class="w-[10%]  text-center">
                <div
                  class="ml-[10px] h-[32px] w-[32px] flex items-center justify-center border-[3px] border-black rounded-full">
                  <i class="fa-solid fa-exclamation text-black text-[20px] "></i>
                </div>
              </div>
              <div class="ml-[10px]">
                <p class="text-red-500 text-[15px] font-medium">Warning</p>
                <p class="text-[15px] text-black">Bạn có muốn xóa bình luận <b>{{ valueCommentDetail ?
                  valueCommentDetail.content : '' }}</b> này không ?</p>
                <p class="text-[15px] text-black"><span class="text-[15px] text-black font-semibold">Lưu ý: </span>Điều
                  này không thể hoàn tác!</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              @click='handleDeleteComment(valueCommentDetail)'>Xóa ngay</button>
          </div>
        </div>
      </div>
    </div>
    <modal-share />
  </div>
</template>
<script>
import svgCreate from '@/components/svg/svgCreate.vue'
import svgLiveVideo from '@/components/svg/svgLiveVideo.vue'
import svgPhoto from '@/components/svg/svgPhoto.vue'
import svgSmile from '@/components/svg/svgSmile.vue'
// item
import svgDots from '@/components/svg/svgDots.vue'
import svgWorld from '@/components/svg/svgWorld.vue'
import svgLike from '@/components/svg/svgLike.vue'
import svgLike2 from '@/components/svg/svgLike2.vue'
import svgComment from '@/components/svg/svgComment.vue'
import svgMenu from '@/components/svg/svgMenu.vue'
import { Forward } from 'lucide-vue-next'
import svgNewMessage from '@/components/svg/svgNewMessage.vue'
import { Users, Ellipsis, Repeat, X, Trash2 } from 'lucide-vue-next'

import http from '@/baseAPI/http'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import LeftBarHome from './leftBarHome.vue'
import rightBarHome from './rightBarHome.vue'
import modalShare from './modalShare.vue'
import renderImage from './renderImage.vue'
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
    LeftBarHome,
    rightBarHome,
    modalShare,
    renderImage,
    Trash2
  },
  async mounted() {
    await this.getDataNewFeed()
    this.userCurrent = JSON.parse(localStorage.getItem('profile'))
    console.log('this.userCurrent: ', this.userCurrent);
    if (this.userCurrent && this.userCurrent.name) {
      this.placeholder = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`;
      this.placeholderPre = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`;
    }
    else {
      this.placeholder = 'Bạn đang nghĩ gì thế?';
      this.placeholderPre = 'Bạn đang nghĩ gì thế?';
    }

  },
  data() {
    return {
      showModalCreatePost: false,
      showModalShare: false,
      media: [],
      showPrivate: false,
      pageMove: 1,
      avatar: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
      fileup: null,
      imageUpload: '',
      typeUpload: '',
      visibility: '',
      content: '',
      mentions: '',
      medias: '',
      allNewFeed: [],
      like: '',
      userCurrent: {},
      indexModalComment: -1,
      placeholder: '',
      valueDetailPost: {},
      contentComment: '',
      placeholderPre: '',
      liked: false,
      valueCommentDetail: ''
    }
  },
  methods: {
    handleFileUpload(event) {
      this.fileup = event.target.files[0]
      this.upFile()
      this.$refs.fileInput.value = '';
    },
    async upFile() {
      if (!this.fileup) {
        console.error('Chưa chọn file.')
        return
      }
      const formData = new FormData()
      formData.append('image', this.fileup)

      await axios
        .post('http://localhost:4000/medias/upload-image', formData, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            console.log(res)
            this.media.push({
              url: res.data.result[0].url,
              type: res.data.result[0].type
            })
            this.fileup = ''
          } else {
            console.error('Lỗi:', res.status)
            console.log(res)
          }
        })
        .catch((error) => {
          console.error('Lỗi khi gửi yêu cầu:', error)
          this.$toast.error('Upload file không thành công', {
            position: 'bottom-right'
          })
        })
    },
    openFileInput() {
      this.$refs.fileInput.click()
    },
    postArticle() {
      if (this.content.trim() != '' || this.media.length > 0) {
        const obj = {
          visibility: 1,
          content: this.content,
          mentions: [],
          medias: this.media
        }
        http
          .post('/posts', obj)
          .then((res) => {
            this.$toast.success('Tạo bài viết thành công', {
              position: 'bottom-right'
            })
            this.getDataNewFeed()
            this.content = ''
            this.media = []

          })
          .catch((errors) => {
            console.log(errors)
            this.$toast.error('Lỗi khi tạo bài viết', {
              position: 'bottom-right'
            })
          })
      } else {
        this.$toast.error('Bài viết chưa có nội dung', {
          position: 'bottom-right'
        })
      }
    },
    getDataNewFeed() {
      axios
        .get('http://localhost:4000/posts', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
          params: {
            limit: 5,
            page: 1
          }
        })
        .then((res) => {
          this.allNewFeed = res.data.result
          this.allNewFeed.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          console.log(this.allNewFeed);
          // this.allNewFeed = this.allNewFeed.filter((value, index) => {
          //   return value.user.username !== this.userCurrent.username
          // })
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    chuyenDoiChuoiNgay(chuoiNgay) {
      return new Date(chuoiNgay);
    },
    dinhDangNgay(chuoiNgay) {
      const ngayHienTai = new Date();
      const ngayGoc = this.chuyenDoiChuoiNgay(chuoiNgay);

      if (isNaN(ngayGoc.getTime())) {
        return 'Ngày không hợp lệ';
      }
      const khoangCach = ngayHienTai - ngayGoc;
      const giay = Math.floor(khoangCach / 1000);
      const phut = Math.floor(giay / 60);
      const gio = Math.floor(phut / 60);
      const ngay = Math.floor(gio / 24);
      const thang = Math.floor(ngay / 30);
      const nam = Math.floor(thang / 12);

      if (phut < 60) {
        return `${phut} phút trước`;
      } else if (gio < 24) {
        return `${gio} giờ trước`;
      } else if (ngay < 30) {
        return `${ngay} ngày trước`;
      } else if (thang < 12) {
        return `${thang} tháng trước`;
      } else {
        return `${nam} năm trước`;
      }
    }
    ,
    async likePost(value, index) {
      const payload = {
        post_id: value._id
      };
      if (value?.user_liked?.liked) {
        try {
          const res = await http.delete(`/likes/post/${payload.post_id}`);
          this.getDataNewFeed();
        } catch (errors) {
          console.log(errors);
        }
      } else {
        try {
          const res = await http.post('/likes', payload);
          this.getDataNewFeed();
          this.liked = this.allNewFeed[index].user_liked.liked
          this.liked = [...this.allNewFeed]

        } catch (errors) {
          console.log(errors);
        }
      }
    },
    handlePaste(event) {
      const clipboardData = event.clipboardData || window.clipboardData
      const items = clipboardData.items
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (item.type.indexOf('image') !== -1) {
          const blob = item.getAsFile()
          const reader = new FileReader()
          reader.onload = (e) => {
            this.media.push({ url: e.target.result, type: 0 })
          }
          reader.readAsDataURL(blob)
        } else if (item.type === 'text/plain') {
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
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
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
          console.log(errors);
        });
    },
    handleDetailPost(index) {
      console.log('>>>>', index);
      this.valueDetailPost = this.allNewFeed[index]
      console.log(this.valueDetailPost);
      if (this.valueDetailPost._id) {
        this.getCommentDetailPost()
      }
    },
    async commentPost(id) {
      const payload = {
        post_id: id,
        content: this.contentComment
      };

      if (this.contentComment.trim() !== '') {
        try {
          const response = await http.post('/comments', payload);
          this.contentComment = '';
          await this.getCommentDetailPost();
          await this.getDataNewFeed();
        } catch (errors) {
          console.log(errors);
        }
      }
    },
    async handleDeleteComment(value) {
      console.log('id comment:', value._id);
      console.log('id post:', value.post_id);
      const payload = {
        post_id: value.post_id
      };
      if (value) {
        try {
          const res = await axios.delete(`http://localhost:4000/comments/post/${value._id}`, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
              'Content-Type': 'application/json'
            },
            data: payload
          });
          await this.getCommentDetailPost();
          await this.getDataNewFeed();
          this.$toast.success('Xóa comment thành công', {
            position: 'bottom-right'
          })
        } catch (errors) {
          console.log('Lỗi: ', errors.response ? errors.response.data : errors.message);
        }
      }
    }
  },

  computed: {

  }
}
</script>
<style></style>
