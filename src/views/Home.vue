<template>
  <div class="flex-1">
    <div class="
    bg-white
      h-auto
      desktop:w-180
      laptop:w-160
      lg:w-160
      sm:w-140
      w-full
      sm:m-auto
      p-1
      text-xs 
      font-semibold
      mobile-x:text-tiny mobile-x:p-8
    ">
      <div class="flex flex-col gap-4 border-2 p-2 ">
        <div id="storie" class="rounded-lg">
          <div class="
          w-full
          h-18
          rounded-lg
          py-1
          px-2
          flex
          items-center
          gap-3
          cursor-pointer
          hover:bg-myGray-900
          transition-colors
          duration-300
        ">
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
              <img src="../assets/images/pp.jpg" class="w-10 rounded-full" alt="" />
            </div>
            <input class="
            cursor-pointer
            w-full
            h-10
            rounded-full
            outline-none
            text-tiny
            px-3
            font-semibold
            transition-colors
            duration-300
            mobile-x:text-base
            focus:outline-none
            focus:shadow-none
            focus:ring-transparent
          " type="text" name="" placeholder="What's on your mind, Elliot ?" />
          </div>
          <hr class="mx-2 " />
          <div id="new-post-bottom" class="flex items-center justify-around px-2 ">
            <div class="
            w-full
            h-10
            flex
            items-center
            justify-center
            gap-2
            hover:bg-myGray-900
            rounded-lg
            cursor-pointer
            transition-colors
            duration-300
          ">
              <svg-live-video class="w-6 text-red-500" />
              <span>Live Video</span>
            </div>
            <div class="
            w-full
            h-10
            flex
            items-center
            justify-center
            gap-2
            hover:bg-myGray-900
            rounded-lg
            cursor-pointer
            transition-colors
            duration-300
          ">
              <svg-photo class="w-6 text-green-500" />
              <span>Photo/video</span>
            </div>
            <div class="
            w-full
            h-10
            items-center
            justify-center
            gap-2
            hover:bg-myGray-900
            rounded-lg
            cursor-pointer
            transition-colors
            duration-300
            hidden
            mobile-x:flex
          ">
              <svg-smile class="w-6 text-yellow-400" />
              <span>Feeling/activity</span>
            </div>
          </div>
        </div>
      </div>
      <!-- start -->

      <ul v-for="(user, index) in users" :key="index">
        <li class="w-full my-4 rounded-lg transition-colors duration-300 border-2 py-2">
          <div id="post-top" class="w-full flex items-center justify-between p-4">
            <div id="post-top_left" class="flex items-center gap-4">
              <div id="post-top_left_pp" class="
            ring-2 ring-blue-500 ring-opacity-70
            border-2 border-black
            w-max
            rounded-full
            cursor-pointer
          ">
                <img :src="user.route" class="w-8 h-8 rounded-full" alt="" />
              </div>
              <div id="post-top_left_title">
                <p class="hover:underline cursor-pointer">{{ user.name }}</p>
                <p class="flex text-xs  mt-1 items-center">
                  <span class="hover:underline cursor-pointer">3d</span>
                  <span class="mx-1">·</span>
                  <svg-world class="w-3" />
                </p>
              </div>
            </div>
            <div id="post-top_right" class="
          p-2
          rounded-full
          hover:bg-myGray-900
          cursor-pointer
          transition-colors
          duration-300
        ">
              <svg-dots class="w-4" />
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
            <div id="post-bottom_buttons" class="
          font-normal
          text-sm
          sm:text-tiny
          flex
          items-center
          my-2
          border-b border-t border-myGray-900
        ">
              <div class="
            flex
            gap-2
            w-full
            items-center
            justify-center
            p-2
            hover:bg-myGray-900
            cursor-pointer
            rounded-lg
            my-1
            transition-colors
            duration-300
          ">
                <svg-like2 class="w-5" />
                <span>Like</span>
              </div>
              <div class="
            flex
            gap-2
            w-full
            items-center
            justify-center
            p-2
            hover:bg-myGray-900
            cursor-pointer
            rounded-lg
            my-1
            transition-colors
            duration-300
          ">
                <svg-comment class="w-5" />
                <span>Comment</span>
              </div>
            </div>
            <div id="post-bottom-comments ">
              <div id="other" class="flex gap-2 my-4 ">
                <div id="other_pp">
                  <img :src="user.post.comment.route" class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                </div>
                <div id="other_comment" class="w-full rounded-lg pb-2">
                  <div class="py-2 px-3 rounded-2xl bg-myGray-900 ">
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
                <img src="../assets/images/pp.jpg" class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                <div class="flex w-full flex-col">
                  <div id="me_comment" class="flex w-full outline-none focus:outline-none ring-transparent rounded-2xl">
                    <input
                      class="w-full bg-transparent px-3 outline-none focus:outline-none  focus:ring-transparent focus:border-black"
                      type="text" placeholder="Write a public comment..." />
                    <div id="me_comment_buttons" class="flex items-center">
                      <div class="
                    p-2
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  ">
                        <svg-smile class="w-4 text-myGray-600" />
                      </div>
                      <div class="
                    p-2
                    hover:bg-myGray-900
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  ">
                        <svg-live-video class="w-4 text-myGray-600" />
                      </div>
                      <div class="
                    p-2
                    hover:bg-myGray-900
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  ">
                        <svg-menu class="w-4 text-myGray-600" />
                      </div>
                      <div class="
                    p-2
                    hover:bg-myGray-900
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  ">
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
  <div class="relative w-80 hidden lg:block">
    <div class="absolute">
      <RightBar class="fixed" />
    </div>
  </div>
</template>
<script>
import RightBar from "../components/RightBar/index.vue";
import svgCreate from "../components/svg/svgCreate.vue";
import svgLiveVideo from "../components/svg/svgLiveVideo.vue";
import svgPhoto from "../components/svg/svgPhoto.vue";
import svgSmile from "../components/svg/svgSmile.vue";
// item
import svgDots from "../components/svg/svgDots.vue";
import svgWorld from "../components/svg/svgWorld.vue";
import svgLike from "../components/svg/svgLike.vue";
import svgLike2 from "../components/svg/svgLike2.vue";
import svgComment from "../components/svg/svgComment.vue";
import svgMenu from "../components/svg/svgMenu.vue";
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
  },
  data() {
    return {
      users: [
        {
          name: "Angela Moss",
          route: "src/assets/images/angela-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea ",
            pictures: "https://picsum.photos/300/",
            like: "128",
            comment: {
              name: "Tyrell Wellick",
              route: "src/assets/images/tyrell-pp.jpg",
              text: "Lorem ipsum dolor.",
            },
          },
        },
        {
          name: "Tyrell Wellick",
          route: "src/assets/images/tyrell-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
            pictures: "https://picsum.photos/200",
            like: "63",
            comment: {
              name: "Angela Moss",
              route: "src/assets/images/angela-pp.jpg",
              text: "Lorem ipsum dolor sit amet consectetur.",
            },
          },
        },
        {
          name: "Darlene Alderson",
          route: "src/assets/images/darlene-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
            pictures: "https://picsum.photos/250",
            like: "99",
            comment: {
              name: "DiPierro",
              route: "src/assets/images/dominique-pp.jpg",
              text: "Lorem ipsum dolor sit amet.",
            },
          },
        },
        {
          name: "Dominique DiPierro",
          route: "src/assets/images/dominique-pp.jpg",
          post: {
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil praesentium necessitatibus vel quia!",
            pictures: "https://picsum.photos/350",
            like: "135",
            comment: {
              name: "Darlene Alderson",
              route: "src/assets/images/darlene-pp.jpg",
              text: "Lorem ipsum.",
            },
          },
        },
      ],
    }
  },
}
</script>
<style></style>