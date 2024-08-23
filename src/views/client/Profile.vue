<template>
  <input type="file" hidden name="file" ref="fileInput" id="file" @change="handleFileUpload" />
  <input type="file" hidden name="file" ref="fileInputAvatar" id="file" @change="handleFileUploadAvatar" />
  <div class="w-full bg-[#F0F2F5]">
    <!-- Header-profile -->
    <div id="header-profile" class="w-full bg-white shadow-md">
      <div class="relative flex w-full flex-col justify-center">
        <!-- Anh bia -->
        <div class="mx-auto h-[405px] w-[1095px]">
          <img class="h-full w-full cursor-pointer rounded-b-lg" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
            alt="" />
        </div>
        <!-- Avatar -->
        <div class="relative mx-auto flex h-[145px] w-[70%] flex-row justify-end">
          <div
            class="absolute left-[15px] top-[-30px] flex h-[176px] w-[176px] cursor-pointer items-center justify-center rounded-full bg-white">
            <img class="h-[168px] w-[168px] rounded-[168px] hover:brightness-90"
              :src="profileInFor.avatar ? profileInFor.avatar : avatar" alt="" />
            <div class="absolute bottom-[10px] right-[20px]">
              <div
                class="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF]">
                <i class="fa-solid fa-camera text-[20px]"></i>
              </div>
            </div>
          </div>
          <div class="w-[82%]">
            <div class="flex h-full w-full flex-grow px-[15px] py-[15px]">
              <div class="w-[50%]">
                <p class="pt-[8px] text-[32px] font-bold leading-[32px] text-[#050505]">
                  {{ profileInFor ? profileInFor.name : "" }}
                </p>
                <p class="cursor-pointer py-[8px] text-[15px] font-medium text-[#65676B] hover:underline">747 bạn bè</p>
                <div class="flex">
                  <img class="-ml-2 h-[34px] w-[34px] cursor-pointer rounded-full border-[2px] border-white"
                    v-for="index in 10" :key="index" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" alt="" />
                </div>
              </div>
              <div class="w-[50%]" v-if="isOwner">
                <div class="mt-[30px] flex flex-row justify-end">
                  <div
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]">
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white">Thêm vào tin</p>
                  </div>
                  <div
                    class="flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#E4E6EB] px-[9px] py-[6px] hover:bg-[#D8DADF]">
                    <i class="fa-solid fa-pen mr-[5px]"></i>
                    <p data-bs-toggle="modal" data-bs-target="#update_info" class="text-[15px] font-medium">
                      Chỉnh sửa trang cá nhân
                    </p>
                  </div>
                </div>
                <div class="flex justify-end pt-[10px]">
                  <i
                    class="fa-solid fa-chevron-down cursor-pointer rounded-md bg-[#E4E6EB] px-[20px] py-[12px] text-[12px] hover:bg-[#D8DADF]"></i>
                </div>
              </div>
              <div class="w-[50%]" v-if="isOwner == false">
                <div class="mt-[30px] flex flex-row justify-end">
                  <div v-if="statusFriend == 0"
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]">
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white" @click="sendFriendRequest()">Thêm bạn bè</p>
                  </div>
                  <div v-if="statusFriend == 1"
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]">
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white">Hủy yêu cầu</p>
                  </div>
                  <div v-if="statusFriend == 2"
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]">
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white">Bạn bè</p>
                  </div>
                  <div
                    class="flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#E4E6EB] px-[9px] py-[6px] hover:bg-[#D8DADF]">
                    <i class="fa-solid fa-pen mr-[5px]"></i>
                    <p class="text-[15px] font-medium">Nhắn tin</p>
                  </div>
                  <div class="flex justify-end pt-[10px]"></div>
                </div>
                <div class="flex justify-end pt-[10px]">
                  <i
                    class="fa-solid fa-chevron-down cursor-pointer rounded-md bg-[#E4E6EB] px-[20px] py-[12px] text-[12px] hover:bg-[#D8DADF]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-[20px] h-[60px] w-[1031px]">
          <div class="flex h-full w-full flex-row items-center justify-between border-t border-gray-300 pt-[5px]">
            <div class="h-full w-[80%]">
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2] focus:text-[#0866FF]"
                href="#">Bài viết</a>
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#">Giới thiệu</a>
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#">Bạn bè</a>
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#">Ảnh</a>
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#">Video</a>
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#">Reels</a>
              <a class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#">Xem thêm
                <i class="fa-solid fa-caret-down ml-[2px]"></i>
              </a>
            </div>
            <i
              class="fa-solid fa-ellipsis cursor-pointer rounded-md bg-[#E4E6EB] px-[17px] py-[9px] text-[18px] hover:bg-[#D8DADF]"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- Body-profile -->
    <div class="min-h-screen w-full bg-[#F0F2F5]">
      <div class="mx-auto w-[1031px]">
        <div class="mt-[15px] flex w-full">
          <!-- LEFT-BODY -->
          <div class="mb-[20px] mr-[20px] w-[440px]">
            <div class="sticky top-4">
              <div class="flex h-full w-full flex-col">
                <!-- INFO-PROFILE  ni là tiểu sử nghe-->
                <div class="mb-[15px] w-full rounded-lg border-b border-gray-300 bg-white p-[16px] shadow-sm"
                  v-if="isOwner">
                  <p class="text-[20px] font-bold text-[#050505]">Giới thiệu</p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]">
                    Thêm tiểu sử
                  </p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]">
                    Chỉnh sửa chi tiết
                  </p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]">
                    Thêm sở thích
                  </p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]">
                    Thêm nội dung đáng chú ý
                  </p>
                </div>
                <!-- PHOTO-PROFILE -->
                <div class="w-full rounded-lg border-b border-gray-300 bg-white px-[16px] pb-[20px] shadow-sm">
                  <div class="mb-[15px] flex w-full flex-row items-center justify-between pt-[8px]">
                    <a class="text-[20px] font-bold text-[#050505] hover:underline" href="">Ảnh</a>
                    <a class="mr-[-10px] rounded-md px-[12px] py-[6px] text-[17px] text-[#0064d1] hover:bg-[#F2F2F2]"
                      href="">Xem tất cả ảnh</a>
                  </div>
                  <div class="w-full">
                    <div class="grid-r grid h-full w-full grid-cols-3 gap-1">
                      <template v-for="(value, index) in allNewFeed" :key="index">
                        <div class="col-span-1 block h-full" v-for="(value1, index1) in value.medias" :key="index1">
                          <img class="h-[150px] w-[300px] overflow-hidden rounded-tl-lg object-cover" :src="value1.url"
                            alt="" />
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
                <!-- FRIEND-PROFILE -->
                <div
                  class="mt-[15px] w-full rounded-lg border-b border-gray-300 bg-white px-[16px] pb-[20px] shadow-sm">
                  <div class="mb-[-2px] flex w-full flex-row items-center justify-between pt-[8px]">
                    <a class="text-[20px] font-bold text-[#050505] hover:underline" href="">Bạn bè</a>
                    <a class="mr-[-10px] rounded-md px-[12px] py-[6px] text-[17px] text-[#0064d1] hover:bg-[#F2F2F2]"
                      href="">Xem tất
                      bạn bè</a>
                  </div>
                  <p class="mb-[15px] text-[17px] font-normal text-[#65676b]">747 người bạn</p>
                  <div class="h-[450px] w-full">
                    <div class="grid h-full w-full grid-cols-3 gap-x-2 gap-y-5">
                      <a class="col-span block h-full" href="" v-for="index in 9" :key="index">
                        <img class="h-[90%] w-full rounded-lg" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                          alt="" />
                        <p
                          class="ml-[2px] mt-[2px] inline-block cursor-pointer text-[13px] font-medium hover:underline">
                          Ân Nguyên
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- RIGHT-PROFILE -->
          <div class="w-[560px]">
            <div class="flex w-full flex-col gap-4 rounded-lg border-[1px] bg-[white] p-2 shadow-sm" v-if="isOwner">
              <div id="new-post" class="flex h-32 flex-col justify-between rounded-lg p-2">
                <div id="new-post-top" class="flex items-center gap-3 p-1">
                  <div class="_pp_ cursor-pointer">
                    <img :src="profileInFor.avatar ? profileInFor.avatar : avatar" class="h-9 w-10 rounded-full"
                      alt="" />
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
            <div class="mt-[15px] w-full rounded-lg border-2 bg-white">
              <div
                class="flex h-[54px] w-full flex-row items-center justify-between border-b border-gray-300 px-[16px]">
                <p class="text-[20px] font-bold text-[#050505]">Bài viết</p>
                <div class="flex items-center justify-between">
                  <a class="mr-[5px] rounded-md bg-[#E4E6EB] py-[6px] pl-[10px] pr-[6px] text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                    href="">
                    <i class="fa-solid fa-sliders pr-[5px]"></i>
                    Bộ lọc
                  </a>
                  <a class="rounded-md bg-[#E4E6EB] px-[12px] py-[6px] text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                    href="">
                    <i class="fa-solid fa-gear"></i>
                    Quản lý bài viết
                  </a>
                </div>
              </div>
              <div class="flex h-[40px] w-full flex-row items-center justify-around px-[16px]">
                <div
                  class="cursor-pointer rounded-md px-[50px] py-[6px] text-[15px] font-semibold text-[#65676b] hover:bg-[#F2F2F2]">
                  <i class="fa-solid fa-bars"></i>
                  Xem danh sách
                </div>
                <div
                  class="cursor-pointer rounded-md px-[50px] py-[6px] text-[15px] font-semibold text-[#65676b] hover:bg-[#F2F2F2]">
                  <i class="fa-solid fa-table-cells-large"></i>
                  Chế độ xem lưới
                </div>
              </div>
            </div>
            <ul v-for="(value, index) in allNewFeed" :key="index">
              <li class="my-4 w-full rounded-lg border-[1px] bg-[white] py-2 shadow-sm transition-colors duration-300">
                <div id="post-top" class="flex w-full items-center justify-between p-4 py-2">
                  <div id="post-top_left" class="flex items-center gap-2">
                    <router-link :to="`/profile/${value.user.username}`">
                      <div id="post-top_left_pp"
                        class="w-max cursor-pointer rounded-full border-2 border-black ring-2 ring-blue-500 ring-opacity-70">
                        <img :src="value.user.avatar ? value.user.avatar : avatar" class="h-8 w-8 rounded-full"
                          alt="" />
                      </div>
                    </router-link>
                    <router-link :to="`/profile/${value.user.username}`">
                      <div id="post-top_left_title">
                        <p class="cursor-pointer font-bold capitalize hover:underline">
                          {{ value.user.name }}
                        </p>
                        <p class="mt-1 flex items-center text-xs">
                          <span class="cursor-pointer hover:underline">{{
                            dinhDangNgay(value?.created_at ?? "")
                            }}</span>
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
                                <img
                                  src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
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
                                    valueCommentDetail = commentDetail;
                                  console.log(commentDetail)
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
      </div>
    </div>
    <!-- Modal Create Post -->
    <div v-if="showModalCreatePost" id="ModalCreatePost"
      class="absolute bottom-0 left-0 right-0 top-[-20%] z-50 bg-white bg-opacity-50">
      <div class="fixed left-[35%] top-[20%] w-[35%]">
        <div class="relative h-full w-full rounded-lg bg-white shadow-lg">
          <p class="border-[rgba(0, 0, 0, 0.1)] border-b py-[14px] text-center text-[20px] font-bold text-black">
            Tạo bài viết
          </p>
          <div class="mx-[16px] flex w-full py-[16px]">
            <a class="h-[40px] w-[40px] hover:brightness-90" href="">
              <img class="h-full w-full rounded-full"
                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYBFPsf8BS-VIw3-Z8E96YN00GSPXOvNyYMm5GvieB4ICA&oe=6647C7E6"
                alt="" />
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black">Ân Nguyên</p>
              <div class="flex w-full">
                <div class="flex cursor-pointer items-center rounded-md bg-[#E4E6EB] px-[5px] py-[2px]">
                  <i class="fa-solid fa-earth-americas pr-[4px] text-[12px]"></i>
                  <p class="pr-[4px] text-[13px] font-medium text-black">Công khai</p>
                  <i class="fa-solid fa-caret-down text-[15px]"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-[16px] pb-[50px]">
            <input class="w-full border-0 focus:outline-none focus:ring-0" type="text"
              placeholder="Ân ơi, bạn đang nghĩ gì thế?" />
          </div>
          <div class="flex w-full items-center justify-between px-[16px]">
            <img class="h-[38px] w-[38px] cursor-pointer"
              src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
            <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
          </div>
          <div class="w-full px-[16px] py-[15px]">
            <div class="border-1 mb-[15px] flex w-full items-center justify-between rounded-lg border-gray-300 p-[8px]">
              <span class="cursor-pointer font-medium text-black">Thêm vào bài viết của bạn</span>
              <div class="flex justify-around">
                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
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

            <button class="w-full rounded-lg bg-[#0861F2] py-[10px] font-medium text-white">Đăng</button>
          </div>
          <!-- Close Modal Create Post -->
          <div @click="showModalCreatePost = false" class="absolute right-[12px] top-2">
            <div
              class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF]">
              <i class="fa-solid fa-xmark text-[22px] text-gray-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <img class="h-full w-full rounded-full"
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="" />
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black">{{ userCurrent.name }}</p>
              <div class="flex w-full">
                <select
                  class="w-full cursor-pointer rounded-md border-0 bg-[#E4E6EB] px-[5px] text-[15px] font-medium focus:ring-0"
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
            <div class="border-1 mb-[15px] flex w-full items-center justify-between rounded-lg border-gray-300 p-[8px]">
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
  <!-- Modal update-info -->
  <div class="modal fade" id="update_info" tabindex="-1" aria-labelledby="update_info" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title flex justify-center text-2xl font-bold text-blue-500" id="exampleModalLabel">
            Chỉnh sửa trang cá nhân
          </h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Thay ava -->
          <div class="mb-[15px] h-full w-full">
            <div class="mb-[10px] flex w-full items-center justify-between">
              <p class="text-[20px] font-bold text-black">Ảnh đại diện</p>
              <span @click="openFileInputAvatar"
                class="cursor-pointer rounded-md px-[8px] py-[4px] text-[17px] text-[#0064d1] hover:bg-[#F2F2F2]">Chỉnh
                sửa</span>
            </div>
            <div class="flex w-full justify-center">
              <div class="object-cover">
                <img :src="avatarUpLoad" alt="" class="h-[168px] w-[168px] rounded-full" />
              </div>
            </div>
          </div>

          <!-- Tên người dùng -->
          <div class="mb-[10px] w-full">
            <p class="mb-[5px] text-[20px] font-bold text-black">Tên người dùng</p>
            <div class="flex w-full justify-center">
              <input type="text" placeholder="Tên người dùng"
                class="form-control border-gray-400 shadow-none outline-none focus:border-gray-500" v-model="name" />
            </div>
          </div>
          <!-- ngày sinh -->
          <!-- giới tính -->
          <div class="mb-[10px] w-full">
            <p class="mb-[5px] text-[20px] font-bold text-black">Giới tính</p>
            <div class="w-100%">
              <select name="" id="" class="form-control border-gray-400 shadow-none outline-none focus:border-gray-500"
                v-model="gender">
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
                <option value="khác">Khác</option>
              </select>
            </div>
          </div>
          <div class="modal-footer border-none pr-0">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="ChangeInformation">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-share />
  <div class="modal fade" id="modalDeleteCommment" tabindex="-1" aria-labelledby="modalCommentLabel" aria-hidden="true">
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
              <p class="text-[15px] text-black">Bạn có muốn xóa bình luận này không ?</p>
              <p class="text-[15px] text-black">
                {{ valueCommentDetail ? valueCommentDetail.content : "" }}
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
// item
import http from "@/baseAPI/http"
import axios from "axios"
import { useToast } from "vue-toast-notification"
import modalShare from "./Home/components/modalShare.vue"
import renderImage from "./Home/components/renderImage.vue"
import RightMenu from "@/components/Navbar/RightMenu.vue"
export default {
  components: {
    svgLiveVideo,
    svgPhoto,
    svgSmile,
    svgDots,
    svgWorld,
    svgLike,
    svgComment,
    svgMenu,
    Forward,
    X,
    modalShare,
    Trash2,
    renderImage
  },
  mounted() {
    this.userName = this.$route.params.id
    this.getDataNewFeed()
    this.checkStatusFriend()
    this.userCurrent = JSON.parse(localStorage.getItem("profile"))
    if (this.userCurrent && this.userCurrent.name) {
      this.placeholder = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`
      this.placeholderPre = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`
    } else {
      this.placeholder = "Bạn đang nghĩ gì thế?"
      this.placeholderPre = "Bạn đang nghĩ gì thế?"
    }
    this.isOwner = this.userCurrent.username == this.userName
    console.log(this.userCurrent)
    if (this.userName) {
      this.getProfile()
      this.name = this.userCurrent.name
      this.avatarUpLoad = this.userCurrent.avatar ? this.userCurrent.avatar : this.avatar
      console.log(this.userCurrent)
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
      valueCommentDetail: "",
      statusLike: false,
      isOwner: false,
      userName: "",
      profile: "",
      name: "",
      gender: "nam",
      date_of_birth: "",
      profileInFor: {},
      statusFriend: 0,
      avatarUpLoad: ""
    }
  },

  methods: {
    checkStatusFriend() {
      http.get(`/users/check-friend/${this.userName}`).then((res) => {
        this.statusFriend = res.data.status
      })
    },
    getProfile() {
      http
        .get(`/users/profile/${this.userName}`)
        .then((res) => {
          this.profileInFor = res.data.result
          console.log(">>>>", this.profileInFor)
        })
        .catch((errors) => {
          console.log(">>>>>>>>>", errors)
        })
    },
    ChangeInformation() {
      const payload = {
        name: this.name,
        gender: this.gender,
        avatar: this.avatarUpLoad
      }
      console.log(payload)
      http
        .patch("/users/update-me", payload)
        .then((res) => {
          // Nếu cập nhật thành công
          this.$toast.success("Cập nhật thông tin thành công", {
            position: "bottom-right"
          })
          const profile = JSON.parse(localStorage.getItem("profile"))
          profile.name = this.name
          profile.avatar = this.avatar
          profile.gender = this.gender
          localStorage.setItem("profile", JSON.stringify(profile))
          this.getProfile()
          window.location.reload()
        })
        .catch((error) => {
          console.error(error)
          this.$toast.error("Cập nhật thông tin thất bại", {
            position: "bottom-right"
          })
        })
    },
    convertToISODateString(dateString) {
      let [year, month, day] = dateString.split("-")
      let date = new Date(year, month - 1, day)
      return date.toISOString()
    },
    handleFileUpload(event) {
      this.fileup = event.target.files[0]
      this.upFile()
      this.$refs.fileInput.value = ""
    },
    handleFileUploadAvatar(event) {
      this.fileup = event.target.files[0]
      this.upFileAvatar()
      this.$refs.fileInput.value = ""
    },
    async upFileAvatar() {
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
            this.avatarUpLoad = res.data.result[0].url
            console.log(this.avatarUpLoad)
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
    openFileInputAvatar() {
      this.$refs.fileInputAvatar.click()
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

          this.allNewFeed = this.allNewFeed.filter((value, index) => {
            return value.user.username == this.userName
          })
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
    },
    async sendFriendRequest() {
      const payload = {
        friend_user_id: this.profileInFor._id
      }
      http
        .post("/users/send-friend-requests", payload)
        .then((res) => {
          console.log(res)
          this.checkStatusFriend()
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    async deleteFriendRequest() {
      console.log(this.profileInFor._id)
      http
        .delete(`/users/delete-friend-requests/${this.profileInFor._id}`)
        .then((res) => {
          console.log(res)
          this.checkStatusFriend()
        })
        .catch((errors) => console.log(errors))
    }
  },

  computed: {}
}
</script>
<style></style>
