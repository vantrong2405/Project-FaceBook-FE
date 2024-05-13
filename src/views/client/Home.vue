<template>
  <div class="relative">
    <div class="flex bg-[#F0F2F5]">
    <!-- left bar -->
    <div class="flex ">
      <div class="w-80 hidden xl:block ">
        <div class="w-80 bg-white">
          <div class="fixed">
            <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
              <div id="left-bar-top" class="w-full">
                <ul>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="http://localhost:5173/src/assets/images/pp.jpg" class="rounded-full w-9" alt="" />
                    <span class="font-semibold text-tiny"> Văn trọng </span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/friends.png" class="rounded-full w-9" alt="Bạn bè" />
                    <span class="font-semibold text-tiny">Bạn bè</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/groups.png" class="rounded-full w-9" alt="Nhóm" />
                    <span class="font-semibold text-tiny">Nhóm</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/marketplace.png" class="rounded-full w-9" alt="Marketplace" />
                    <span class="font-semibold text-tiny">Marketplace</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/watch.png" class="rounded-full w-9" alt="Video" />
                    <span class="font-semibold text-tiny">Video</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/memories.png" class="rounded-full w-9" alt="Kỷ niệm" />
                    <span class="font-semibold text-tiny">Kỷ niệm</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/saved.png" class="rounded-full w-9" alt="Đã lưu" />
                    <span class="font-semibold text-tiny">Đã lưu</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/pages.png" class="rounded-full w-9" alt="Trang" />
                    <span class="font-semibold text-tiny">Trang</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/events.png" class="rounded-full w-9" alt="Sự kiện" />
                    <span class="font-semibold text-tiny">Sự kiện</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/jobs.png" class="rounded-full w-9" alt="Công việc" />
                    <span class="font-semibold text-tiny">Công việc</span>
                  </li>
                  <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
                    <img src="../../assets/images/png/mostRecent.png" class="rounded-full w-9" alt="Gần đây" />
                    <span class="font-semibold text-tiny">Gần đây</span>
                  </li>
                  <div
                    class="flex items-center gap-2 p-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900 transition-color duration-300">
                    <div id="svg-see-more-box" class="p-2 rounded-full flex items-center justify-center">
                      <svg-see-more class="w-5" />
                    </div>
                    <span class="font-semibold text-base"> Xem thêm</span>
                  </div>

                  <div id="privacy" class="w-full">
                    <div class="text-myGray-700 text-xs pl-1 mb-14">
                      <a class="hover:underline cursor-pointer">Privacy</a>·
                      <a class="hover:underline cursor-pointer">Terms</a>·
                      <a class="hover:underline cursor-pointer">Adversiting</a>·
                      <a class="hover:underline cursor-pointer">Ad Choices</a>·
                      <a class="hover:underline cursor-pointer">Cookies</a>·<br />
                      <a class="cursor-pointer">More</a>·
                      <a>Burkay © 2021</a>
                    </div>
                  </div>
                </ul>
                <!-- start -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div
        class=" h-auto desktop:w-180 la ptop:w-160 lg:w-160 sm:w-140 w-full sm:m-auto p-1 text-xs font-semibold mobile-x:text-tiny mobile-x:p-8">
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
                <img src="../../assets/images/pp.jpg" class="w-10 rounded-full" alt="" />
              </div>
              <input @click="showModalCreatePost=true"
                class="cursor-pointer w-full h-10 rounded-full border-[0px] bg-[#F0F2F5] hover:bg-[#E4E6E9] outline-none text-tiny px-3 font-semibold transition-colors  mobile-x:text-base focus:outline-none focus:shadow-none focus:ring-transparent"
                type="text" name="" placeholder="What's on your mind, Elliot ?" />
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
        <!-- start -->

        <ul v-for="(user, index) in users" :key="index">
          <li class="w-full bg-[white] my-4 rounded-lg transition-colors duration-300 border-[1px] shadow-sm py-2">
            <div id="post-top" class="w-full flex items-center justify-between p-4 py-2">
              <div id="post-top_left" class="flex items-center gap-2">
                <div id="post-top_left_pp"
                  class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                  <img :src="user.route" class="w-8 h-8 rounded-full" alt="" />
                </div>
                <div id="post-top_left_title">
                  <p class="hover:underline cursor-pointer">{{ user.name }}</p>
                  <p class="flex text-xs mt-1 items-center">
                    <span class="hover:underline cursor-pointer">3d</span>
                    <span class="mx-1">·</span>
                    <svg-world class="w-3" />
                  </p>
                </div>
              </div>
              <div id="post-top_right" class="flex items-center">
                <div
                  class="w-[32px] h-[32px] rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer duration-300">
                  <svg-dots class="w-4" />
                </div>
                <div
                  class="w-[32px] h-[32px] rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer duration-300">
                  <X class="w-10 " />
                </div>
              </div>
            </div>
            <div id="post-middle">
              <p class="px-3 font-normal leading-5 text-sm">
                {{ user.post.title }}
              </p>
              <img :src="user.post.pictures" class="w-full my-2" alt="" />
            </div>
            <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
              <div id="post-bottom_info" class="flex items-center justify-between">
                <div id="info_left" class="flex gap-2 cursor-pointer">
                  <svg-like class="w-5" />
                  <span class="hover:underline"> {{ user.post.like }} </span>
                </div>
                <div id="info_right">
                  <span class="hover:underline cursor-pointer">1 Comment</span>
                </div>
              </div>
              <div id="post-bottom_buttons"
                class="font-normal text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-900">
                <div
                  class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                  <svg-like2 class="w-5" />
                  <span>Like</span>
                </div>
                <div
                  class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                  <svg-comment class="w-5" />
                  <span>Comment</span>
                </div>
                <div
                  class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-900 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                  <Forward class="w-5" />
                  <span>Share</span>
                </div>
              </div>
              <div id="post-bottom-comments ">
                <div id="other" class="flex gap-2 my-2">
                  <div id="other_pp">
                    <img :src="user.post.comment.route" class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                  </div>
                  <div id="other_comment" class="max-w-full rounded-lg pb-2">
                    <div class="py-2 px-3 rounded-2xl bg-slate-100">
                      <div id="commnet-name" class="cursor-pointer hover:underline font-bold text-xs">
                        {{ user.post.comment.name }}
                      </div>
                      <div id="comment-title">
                        {{ user.post.comment.text }}
                      </div>
                    </div>
                    <div class="px-3 text-xs mt-1">
                      <span class="cursor-pointer hover:underline">Like</span> ·
                      <span class="cursor-pointer hover:underline">Reply</span> ·
                      <span class="cursor-pointer hover:underline">Share</span> ·
                      <span class="cursor-pointer hover:underline">2d</span>
                    </div>
                  </div>
                </div>
                <div id="me" class="flex w-full gap-2">
                  <img src="../../assets/images/pp.jpg" class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                  <div class="flex w-full flex-col">
                    <div id="me_comment"
                      class="flex w-full outline-none focus:outline-none ring-transparent bg-slate-100 rounded-2xl">
                      <input
                        class="w-full bg-transparent px-3 outline-none border-0  rounded-2xl focus:outline-none focus:ring-transparent focus:border-black"
                        type="text" placeholder="Write a public comment..." />
                      <div id="me_comment_buttons" class="flex items-center">
                        <div class="p-2 rounded-full cursor-pointer transition-colors duration-300">
                          <svg-smile class="w-4 text-myGray-600" />
                        </div>
                        <div class="p-2 hover:bg-myGray-900 rounded-full cursor-pointer transition-colors duration-300">
                          <svg-live-video class="w-4 text-myGray-600" />
                        </div>
                        <div class="p-2 hover:bg-myGray-900 rounded-full cursor-pointer transition-colors duration-300">
                          <svg-menu class="w-4 text-myGray-600" />
                        </div>
                        <div class="p-2 hover:bg-myGray-900 rounded-full cursor-pointer transition-colors duration-300">
                          <svg-photo class="w-4 text-myGray-600" />
                        </div>
                      </div>
                    </div>
                    <span class="text-xs">Press Enter the post</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <!-- end -->
      </div>
    </div>
    <div class="w-80 hidden lg:block">
      <div class="absolute">
        <RightBar class="fixed top-0 right-0 mt-[20px]" />
      </div>
    </div>
  </div>
  <div
    class="p-[14px] flex items-center justify-center rounded-full bg-white border-2 text-black fixed right-5 bottom-5 cursor-pointer hover:bg-myGray-700 transition-colors duration-300">
    <svg-new-message class="w-5" />
  </div>
  <!-- Modal Create Post -->
  <div v-if="showModalCreatePost" id="ModalCreatePost" class="absolute top-[-10%] right-0 bottom-0 left-0 bg-white bg-opacity-50 z-50">
    <div class="w-[35%]  fixed top-[10%] left-[35%] ">
      <div class="w-full h-full relative bg-white  shadow-lg rounded-lg">
          <p class="text-center py-[14px] text-black text-[20px] font-bold border-b border-[rgba(0, 0, 0, 0.1)]">Tạo bài viết </p>
          <div class="w-full mx-[16px] py-[16px] flex ">
            <a class="w-[40px] h-[40px] hover:brightness-90" href="">
              <img class="w-full h-full rounded-full" src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYBFPsf8BS-VIw3-Z8E96YN00GSPXOvNyYMm5GvieB4ICA&oe=6647C7E6" alt="">
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black">Ân Nguyên</p>
              <div class="w-full flex ">
                  <div class="flex py-[2px] px-[5px] items-center cursor-pointer bg-[#E4E6EB] rounded-md">
                    <i class="fa-solid fa-earth-americas text-[12px] pr-[4px]"></i>
                    <p class="text-[13px] font-medium text-black  pr-[4px]">Công khai</p>
                    <i class="fa-solid fa-caret-down text-[15px]"></i>
                  </div>
              </div>
            </div>
          </div>
          <div class="w-full pb-[50px] px-[16px]">
            <input class="w-full border-0 focus:outline-none focus:ring-0" type="text" placeholder="Ân ơi, bạn đang nghĩ gì thế?">
          </div>
          <div class="w-full flex items-center justify-between px-[16px]">
            <img class="h-[38px] cursor-pointer w-[38px]" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="">
            <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
          </div>
          <div class="w-full py-[15px] px-[16px] ">
              <div class="mb-[15px] p-[8px] w-full flex items-center justify-between border-1 border-gray-300 rounded-lg">
                <span class="text-black font-medium cursor-pointer">Thêm vào bài viết của bạn</span>
                <div class="flex justify-around">
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeHqUBHb5H6DvGo3fHFIMnuhPL4YoeGsw5I8vhih4azDkvYK82Ph4rTMk09D3rFp2rwKaE5BuKt1RCFgJFAPRiON" alt="">
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">                   
                    <img class="cursor-pointer h-[24px] w-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGuHbvZi5VThlabTWO4Jot1ohqwRjkkxMOiGrBGOSTEw013eQjAhLtPOW8G-i21QMySd7WPo7ORquKG89ZSVFi1" alt="">
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeG3Yrx0YPc7BGvU6hgwmd1wvPIN-OmHLJy88g346YcsnPOTwiP9nl5vjkc3RY4qdb0hvpvvF96JXeJ4M26dypyH" alt="">
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeGJZzAHVkPgsJxKvjTL4bu_88Ps36vvyGDzw-zfq-_IYIzspbLkXkbpS0cEn9JCveilbvBA3AJMRQWcGB70SX8N" alt="">
                  </div>
                  <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                    <img class="cursor-pointer h-[24px] w-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeFPcLUl2wa_geZXrdq03zCoJTqz5hgP3TklOrPmGA_dOccT_16aJXX9MLVp335HzRu9AVI65L3H3CJ-kx3OOE5N" alt="">
                  </div>
                  <div class="cursor-pointer w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]" >
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
              </div>
              
              <button class="w-full py-[10px] bg-[#0861F2] text-white font-medium rounded-lg">Đăng </button>
              
          </div>
          <!-- Close Modal Create Post -->
          <div @click="showModalCreatePost=false" class="absolute top-2 right-[12px]">
            <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full  cursor-pointer bg-[#E4E6EB] hover:bg-[#D8DADF]">
              <i class="fa-solid fa-xmark text-[22px] text-gray-500"></i>
            </div>
          </div>
          
      </div>
    </div>
  </div>
  </div>
 
  
</template>
<script>
import RightBar from '../../components/RightBar/index.vue'
import svgCreate from '../../components/svg/svgCreate.vue'
import svgLiveVideo from '../../components/svg/svgLiveVideo.vue'
import svgPhoto from '../../components/svg/svgPhoto.vue'
import svgSmile from '../../components/svg/svgSmile.vue'
// item
import svgDots from '../../components/svg/svgDots.vue'
import svgWorld from '../../components/svg/svgWorld.vue'
import svgLike from '../../components/svg/svgLike.vue'
import svgLike2 from '../../components/svg/svgLike2.vue'
import svgComment from '../../components/svg/svgComment.vue'
import svgMenu from '../../components/svg/svgMenu.vue'
import svgSeeMore from '../../components/svg/svgSeeMore.vue'
import { Forward } from 'lucide-vue-next'
import svgNewMessage from '../../components/svg/svgNewMessage.vue'
import { X } from 'lucide-vue-next';
export default {
  components: {
    RightBar,
    svgCreate,
    svgLiveVideo,
    svgPhoto,
    svgSmile,
    svgDots,
    svgWorld,
    svgLike,
    svgLike2,
    svgComment,
    svgMenu,
    svgSeeMore,
    Forward,
    svgNewMessage,
    X
  },
  data() {
    return {
      showModalCreatePost:false,
      users: [
        {
          name: 'Angela Moss',
          route: 'src/assets/images/angela-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea ',
            pictures: 'https://picsum.photos/300/',
            like: '128',
            comment: {
              name: 'Tyrell Wellick',
              route: 'src/assets/images/tyrell-pp.jpg',
              text: 'Lorem ipsum dolor.'
            }
          }
        },
        {
          name: 'Tyrell Wellick',
          route: 'src/assets/images/tyrell-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!',
            pictures: 'https://picsum.photos/200',
            like: '63',
            comment: {
              name: 'Angela Moss',
              route: 'src/assets/images/angela-pp.jpg',
              text: 'Lorem ipsum dolor sit amet consectetur.'
            }
          }
        },
        {
          name: 'Darlene Alderson',
          route: 'src/assets/images/darlene-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!',
            pictures: 'https://picsum.photos/250',
            like: '99',
            comment: {
              name: 'DiPierro',
              route: 'src/assets/images/dominique-pp.jpg',
              text: 'Lorem ipsum dolor sit amet.'
            }
          }
        },
        {
          name: 'Dominique DiPierro',
          route: 'src/assets/images/dominique-pp.jpg',
          post: {
            title:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!',
            pictures: 'https://picsum.photos/350',
            like: '135',
            comment: {
              name: 'Darlene Alderson',
              route: 'src/assets/images/darlene-pp.jpg',
              text: 'Lorem ipsum.'
            }
          }
        }
      ],
      pageMove: 1
    }
  }
}
</script>
<style></style>
