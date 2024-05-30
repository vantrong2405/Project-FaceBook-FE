<template>
  <input type="file" hidden name="file" ref="fileInput" id="file" @change="handleFileUpload" />
  <div class="w-full bg-[#F0F2F5]">
    <!-- Header-profile -->
    <div id="header-profile" class="w-full bg-white shadow-md">
      <div class="w-full flex flex-col justify-center relative">
        <!-- Anh bia -->
        <div class="w-[1095px] h-[405px] mx-auto">
          <img class="w-full h-full rounded-b-lg cursor-pointer"
            src="data:image/jpeg;base64,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"
            alt="" />
        </div>
        <!-- Avatar -->
        <div class="w-[70%] h-[145px] mx-auto flex flex-row justify-end relative">
          <div
            class="absolute left-[15px] top-[-30px] h-[176px] w-[176px] rounded-full bg-white flex justify-center items-center cursor-pointer">
            <img class="h-[168px] w-[168px] rounded-[168px] hover:brightness-90"
              src="data:image/jpeg;base64,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"
              alt="" />
            <div class="absolute bottom-[10px] right-[20px]">
              <div
                class="h-[36px] w-[36px] rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF] flex justify-center items-center">
                <i class="fa-solid fa-camera text-[20px]"></i>
              </div>
            </div>
          </div>
          <div class="w-[82%]">
            <div class="w-full h-full flex flex-grow px-[15px] py-[15px]">
              <div class="w-[50%]">
                <p class="text-[32px] font-bold text-[#050505] leading-[32px] pt-[8px]">
                  {{ userCurrent ? userCurrent.name : '' }}
                </p>
                <p class="py-[8px] text-[15px] text-[#65676B] font-medium cursor-pointer hover:underline">
                  747 bạn bè
                </p>
                <div class="flex">

                  <img class="w-[34px] h-[34px] cursor-pointer rounded-full border-white border-[2px] -ml-2"
                    v-for="index in 10" :key="index" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" alt="" />
                </div>
              </div>
              <div class="w-[50%]" v-if='isOwner'>
                <div class="flex flex-row justify-end mt-[30px]">
                  <div
                    class="flex flex-row mr-[8px] justify-center items-center bg-[#0866ff] hover:bg-[#0861F2] px-[12px] rounded-md cursor-pointer">
                    <i class="fa-solid fa-plus text-blue-200 text-[12px] pl-[5px] mr-[8px]"></i>
                    <p class="text-white text-[15px] font-medium">Thêm vào tin</p>
                  </div>
                  <div
                    class="flex flex-row justify-center items-center bg-[#E4E6EB] rounded-md px-[9px] py-[6px] hover:bg-[#D8DADF] cursor-pointer">
                    <i class="fa-solid fa-pen mr-[5px]"></i>
                    <p data-bs-toggle="modal" data-bs-target="#update_info" class="text-[15px] font-medium">Chỉnh sửa
                      trang cá nhân</p>
                  </div>
                </div>
                <div class="flex justify-end pt-[10px]">
                  <i
                    class="fa-solid fa-chevron-down px-[20px] py-[12px] bg-[#E4E6EB] text-[12px] rounded-md hover:bg-[#D8DADF] cursor-pointer"></i>
                </div>
              </div>
              <div class="w-[50%]" v-if='isOwner == false'>
                <div class="flex flex-row justify-end mt-[30px]">
                  <div
                    class="flex flex-row mr-[8px] justify-center items-center bg-[#0866ff] hover:bg-[#0861F2] px-[12px] rounded-md cursor-pointer">
                    <i class="fa-solid fa-plus text-blue-200 text-[12px] pl-[5px] mr-[8px]"></i>
                    <p class="text-white text-[15px] font-medium">Thêm bạn bè</p>
                  </div>
                  <div
                    class="flex flex-row justify-center items-center bg-[#E4E6EB] rounded-md px-[9px] py-[6px] hover:bg-[#D8DADF] cursor-pointer">
                    <i class="fa-solid fa-pen mr-[5px]"></i>
                    <p class="text-[15px] font-medium">Nhắn tin</p>
                  </div>
                  <div class="flex justify-end pt-[10px]">
                  </div>
                  <i
                    class="fa-solid fa-chevron-down px-[20px] py-[12px] bg-[#E4E6EB] text-[12px] rounded-md hover:bg-[#D8DADF] cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[1031px] h-[60px] mx-auto mt-[20px]">
          <div class="w-full h-full flex flex-row items-center justify-between pt-[5px] border-t border-gray-300">
            <div class="w-[80%] h-full">
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] focus:text-[#0866FF] rounded-lg"
                href="#">Bài viết</a>
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] rounded-lg"
                href="#">Giới thiệu</a>
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] rounded-lg"
                href="#">Bạn bè</a>
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] rounded-lg"
                href="#">Ảnh</a>
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] rounded-lg"
                href="#">Video</a>
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] rounded-lg"
                href="#">Reels</a>
              <a class="text-[#65676B] inline-block text-[15px] font-medium h-[50px] px-[16px] leading-[50px] hover:bg-[#F2F2F2] rounded-lg"
                href="#">Xem thêm
                <i class="fa-solid fa-caret-down ml-[2px]"></i>
              </a>
            </div>
            <i
              class="fa-solid fa-ellipsis text-[18px] px-[17px] py-[9px] bg-[#E4E6EB] rounded-md cursor-pointer hover:bg-[#D8DADF]"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- Body-profile -->
    <div class="w-full h-screen bg-[#F0F2F5]">
      <div class="w-[1031px] mx-auto ">
        <div class="w-full  flex  mt-[15px] ">
          <!-- LEFT-BODY -->
          <div class="w-[440px] mr-[20px] mb-[20px]">
            <div class="sticky top-4">
              <div class="w-full h-full flex flex-col">
                <!-- INFO-PROFILE -->
                <div class="w-full bg-white p-[16px] rounded-lg border-b border-gray-300 shadow-sm">
                  <p class="text-[20px] font-bold text-[#050505]">Giới thiệu</p>
                  <p
                    class="bg-[#E4E6EB] text-[15px] text-[#050505] font-medium py-[6px] mt-[15px] rounded-md text-center cursor-pointer hover:bg-[#D8DADF]">
                    Thêm tiểu sử
                  </p>
                  <p
                    class="bg-[#E4E6EB] text-[15px] text-[#050505] font-medium py-[6px] mt-[15px] rounded-md text-center cursor-pointer hover:bg-[#D8DADF]">
                    Chỉnh sửa chi tiết
                  </p>
                  <p
                    class="bg-[#E4E6EB] text-[15px] text-[#050505] font-medium py-[6px] mt-[15px] rounded-md text-center cursor-pointer hover:bg-[#D8DADF]">
                    Thêm sở thích
                  </p>
                  <p
                    class="bg-[#E4E6EB] text-[15px] text-[#050505] font-medium py-[6px] mt-[15px] rounded-md text-center cursor-pointer hover:bg-[#D8DADF]">
                    Thêm nội dung đáng chú ý
                  </p>
                </div>
                <!-- PHOTO-PROFILE -->
                <div
                  class="w-full bg-white rounded-lg px-[16px] pb-[20px] mt-[15px] border-b border-gray-300 shadow-sm">
                  <div class="w-full flex flex-row justify-between items-center pt-[8px] mb-[15px]">
                    <a class="text-[20px] text-[#050505] font-bold hover:underline" href="">Ảnh</a>
                    <a class="hover:bg-[#F2F2F2] text-[#0064d1] text-[17px] px-[12px] py-[6px] rounded-md mr-[-10px]"
                      href="">Xem tất cả ảnh</a>
                  </div>
                  <div class="w-full h-[400px]">
                    <div class="w-full h-full grid grid-cols-3 grid-r gap-1">
                      <a class="col-span-1 h-full block" href="" v-for="index in 10" :key='index'>
                        <img class="w-full h-full object-cover rounded-tl-lg"
                          src="data:image/jpeg;base64,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"
                          alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <!-- FRIEND-PROFILE -->
                <div
                  class="w-full bg-white rounded-lg px-[16px] pb-[20px] mt-[15px] border-b border-gray-300 shadow-sm">
                  <div class="w-full flex flex-row justify-between items-center pt-[8px] mb-[-2px]">
                    <a class="text-[20px] text-[#050505] font-bold hover:underline" href="">Bạn bè</a>
                    <a class="hover:bg-[#F2F2F2] text-[#0064d1] text-[17px] px-[12px] py-[6px] rounded-md mr-[-10px]"
                      href="">Xem tất bạn bè</a>
                  </div>
                  <p class="text-[#65676b] text-[17px] font-normal mb-[15px]">747 người bạn</p>
                  <div class="w-full h-[450px]">
                    <div class="w-full h-full grid grid-cols-3 gap-x-2 gap-y-5">
                      <a class="col-span h-full block" href="">
                        <img class="w-full h-[90%] rounded-lg"
                          src="data:image/jpeg;base64,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"
                          alt="" />
                        <p
                          class="inline-block text-[13px] font-medium cursor-pointer hover:underline mt-[2px] ml-[2px]">
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
            <div class="bg-[white] w-full flex flex-col gap-4 border-[1px] p-2 rounded-lg shadow-sm">
              <!-- <div id="storie" class="rounded-lg">
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
              </div> -->
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
            <div class="w-full bg-white rounded-lg mt-[15px] border-2">
              <div
                class="w-full px-[16px] h-[54px] flex flex-row items-center justify-between border-b border-gray-300">
                <p class="text-[20px] font-bold text-[#050505]">Bài viết</p>
                <div class="flex items-center justify-between">
                  <a class="text-[15px] font-medium text-[#050505] bg-[#E4E6EB] hover:bg-[#D8DADF] py-[6px] pl-[10px] mr-[5px] pr-[6px] rounded-md"
                    href="">
                    <i class="fa-solid fa-sliders pr-[5px]"></i>
                    Bộ lọc
                  </a>
                  <a class="text-[15px] font-medium text-[#050505] bg-[#E4E6EB] hover:bg-[#D8DADF] py-[6px] px-[12px] rounded-md"
                    href="">
                    <i class="fa-solid fa-gear"></i>
                    Quản lý bài viết
                  </a>
                </div>
              </div>
              <div class="w-full h-[40px] px-[16px] flex flex-row items-center justify-around">
                <div
                  class="text-[#65676b] text-[15px] font-semibold px-[50px] py-[6px] rounded-md hover:bg-[#F2F2F2] cursor-pointer">
                  <i class="fa-solid fa-bars"></i>
                  Xem danh sách
                </div>
                <div
                  class="text-[#65676b] text-[15px] font-semibold px-[50px] py-[6px] rounded-md hover:bg-[#F2F2F2] cursor-pointer">
                  <i class="fa-solid fa-table-cells-large"></i>
                  Chế độ xem lưới
                </div>
              </div>
            </div>
            <ul v-for="(value, index) in allNewFeed" :key="index">
              <li class="w-full bg-[white] my-4 rounded-lg transition-colors duration-300 border-[1px] shadow-sm py-2">
                <div id="post-top" class="w-full flex items-center justify-between p-4 py-2">
                  <div id="post-top_left" class="flex items-center gap-2">
                    <div id="post-top_left_pp"
                      class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                      <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                        class="w-8 h-8 rounded-full" alt="" />
                    </div>
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
                  <div>
                    <div v-if="value.medias.length === 1">
                      <img :src="value.medias[0].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                    </div>
                    <div class="grid grid-cols-2 gap-1" v-if="value.medias.length === 2">
                      <img :src="value.medias[0].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      <img :src="value.medias[1].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                    </div>
                    <div class="grid grid-cols-3 gap-1" v-if="value.medias.length === 3">
                      <img :src="value.medias[0].url" alt="" class="col-span-2 w-full cursor-pointer h-full" />
                      <div>
                        <img :src="value.medias[1].url" alt=""
                          class="w-full h-[140px] object-content border-2 cursor-pointer" />
                        <img :src="value.medias[2].url" alt=""
                          class="w-full h-[140px] object-content border-2 cursor-pointer" />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-1" v-if="value.medias.length === 4">
                      <img :src="value.medias[0].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      <img :src="value.medias[1].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      <img :src="value.medias[2].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      <img :src="value.medias[3].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                    </div>
                    <div class="grid grid-cols-6 gap-1" v-if="value.medias.length === 5">
                      <div class="col-span-3">
                        <img :src="value.medias[0].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-3">
                        <img :src="value.medias[1].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-2">
                        <img :src="value.medias[2].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-2">
                        <img :src="value.medias[3].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-2">
                        <img :src="value.medias[4].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                    </div>
                    <div class="grid grid-cols-6 gap-1" v-if="value.medias.length === 6">
                      <div class="col-span-3">
                        <img :src="value.medias[0].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-3">
                        <img :src="value.medias[1].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-2">
                        <img :src="value.medias[2].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-2">
                        <img :src="value.medias[3].url" alt=""
                          class="w-full h-[280px] object-content border-2 cursor-pointer" />
                      </div>
                      <div class="col-span-2 relative main">
                        <div class="w-full h-full -z-10">
                          <img :src="value.medias[4].url" alt=""
                            class="w-full h-[280px] object-content border-2 cursor-pointer" />
                        </div>
                        <div class="activeFull z-30 text-white text-lg"></div>
                      </div>
                    </div>
                  </div>
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
                      :class="{ 'text-[#0861f2]': value.likes == 1 }" @click="likePost(index, 'newFeed')">
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
                  <div id="post-bottom-comments ">
                    <div id="other" class="flex gap-2 my-2" v-for="index in 3" :key="index">
                      <div id="other_pp">
                        <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                          class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                      </div>
                      <div id="other_comment" class="max-w-full rounded-lg pb-2">
                        <div class="py-2 px-3 rounded-2xl bg-slate-100">
                          <div id="commnet-name" class="cursor-pointer hover:underline font-bold text-xs">
                            {{ value.user.name }}
                          </div>
                          <div id="comment-title">Hay lắm bắn ơi :V</div>
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
                      <img src="../../../assets/images/pp.jpg" class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                      <div class="flex w-full flex-col">
                        <div id="me_comment"
                          class="flex w-full outline-none focus:outline-none ring-transparent bg-slate-100 rounded-2xl">
                          <input
                            class="w-full bg-transparent px-3 outline-none border-0 rounded-2xl focus:outline-none focus:ring-transparent focus:border-black cursor-pointer"
                            type="text" placeholder="Write a public comment..." data-bs-toggle="modal"
                            data-bs-target="#modalComment" @click=" handleDetailPost(index); contentComment = ''"
                            v-on:keyup.enter="conmentPost(index)" />
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
                        <span class="text-xs">Press Enter the post</span>
                      </div>
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
                        valueDetailPost && valueDetailPost.user ? valueDetailPost.user.name : '' }}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                                {{ valueDetailPost && valueDetailPost.user ? valueDetailPost.user.name : '' }}
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
                            <!-- Các trường hợp khác có thể tiếp tục ở đây -->
                          </div>
                          <div>
                            <div v-if="valueDetailPost?.medias?.length === 1">
                              <img :src="valueDetailPost.medias[0].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                            </div>
                            <div class="grid grid-cols-2 gap-1" v-if="valueDetailPost?.medias?.length === 2">
                              <img :src="valueDetailPost.medias[0].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              <img :src="valueDetailPost.medias[1].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                            </div>
                            <div class="grid grid-cols-3 gap-1" v-if="valueDetailPost?.medias?.length === 3">
                              <img :src="valueDetailPost.medias[0].url" alt="" class="col-span-2 w-full" />
                              <div>
                                <img :src="valueDetailPost.medias[1].url" alt=""
                                  class="w-full h-[140px] object-content border-2 cursor-pointer" />
                                <img :src="valueDetailPost.medias[2].url" alt=""
                                  class="w-full h-[140px] object-content border-2 cursor-pointer" />
                              </div>
                            </div>
                            <div class="grid grid-cols-2 gap-1" v-if="valueDetailPost?.medias?.length === 4">
                              <img :src="valueDetailPost.medias[0].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              <img :src="valueDetailPost.medias[1].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              <img :src="valueDetailPost.medias[2].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              <img :src="valueDetailPost.medias[3].url" alt=""
                                class="w-full h-[280px] object-content border-2 cursor-pointer" />
                            </div>
                            <div class="grid grid-cols-6 gap-1" v-if="valueDetailPost?.medias?.length === 5">
                              <div class="col-span-3">
                                <img :src="valueDetailPost.medias[0].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-3">
                                <img :src="valueDetailPost.medias[1].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-2">
                                <img :src="valueDetailPost.medias[2].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-2">
                                <img :src="valueDetailPost.medias[3].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-2">
                                <img :src="valueDetailPost.medias[4].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                            </div>
                            <div class="grid grid-cols-6 gap-1" v-if="valueDetailPost?.medias?.length === 6">
                              <div class="col-span-3">
                                <img :src="valueDetailPost.medias[0].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-3">
                                <img :src="valueDetailPost.medias[1].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-2">
                                <img :src="valueDetailPost.medias[2].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-2">
                                <img :src="valueDetailPost.medias[3].url" alt=""
                                  class="w-full h-[280px] object-content border-2 cursor-pointer" />
                              </div>
                              <div class="col-span-2 relative main">
                                <div class="w-full h-full -z-10">
                                  <img :src="valueDetailPost.medias[4].url" alt=""
                                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
                                </div>
                                <div class="activeFull z-30 text-white text-lg"></div>
                              </div>
                            </div>
                          </div>
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
                              :class="{ 'text-[#0861f2]': value.likes == 1 }"
                              @click="likePost(valueDetailPost._id, 'detail');">
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
                                <img
                                  src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                                  class="w-9 h-9 rounded-full cursor-pointer" alt="" />
                              </div>
                              <div id="other_comment" class="max-w-full rounded-lg pb-2">
                                <div class="py-2 px-3 rounded-2xl bg-slate-100">
                                  <div id="commnet-name" class="cursor-pointer hover:underline font-bold text-xs">
                                    {{ commentDetail.user[0].name }}
                                  </div>
                                  <div id="comment-title">{{ commentDetail.content }}</div>
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
                              <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="
                              w-9 h-9 rounded-full cursor-pointer" alt="" />
                              <div class="flex w-full flex-col">
                                <div id="me_comment"
                                  class="flex w-full outline-none focus:outline-none ring-transparent bg-slate-100 rounded-2xl">
                                  <!-- input Comment -->
                                  <input
                                    class="w-full bg-transparent px-3 outline-none border-0 rounded-2xl focus:outline-none focus:ring-transparent focus:border-black"
                                    type="text" placeholder="Write a public comment..." v-model="contentComment"
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
                                <span class="text-xs">Press Enter the post</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>

                  </div>
                </div>
              </div>
            </ul>
            <div class="w-full h-[2000px] bg-red-300"></div>
            <div class="w-full h-[2000px] bg-blue-200"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Create Post -->
    <div v-if="showModalCreatePost" id="ModalCreatePost"
      class="absolute top-[-20%] right-0 bottom-0 left-0 bg-white bg-opacity-50 z-50">
      <div class="w-[35%] fixed top-[20%] left-[35%]">
        <div class="w-full h-full relative bg-white shadow-lg rounded-lg">
          <p class="text-center py-[14px] text-black text-[20px] font-bold border-b border-[rgba(0, 0, 0, 0.1)]">
            Tạo bài viết
          </p>
          <div class="w-full mx-[16px] py-[16px] flex">
            <a class="w-[40px] h-[40px] hover:brightness-90" href="">
              <img class="w-full h-full rounded-full"
                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYBFPsf8BS-VIw3-Z8E96YN00GSPXOvNyYMm5GvieB4ICA&oe=6647C7E6"
                alt="" />
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black">Ân Nguyên</p>
              <div class="w-full flex">
                <div class="flex py-[2px] px-[5px] items-center cursor-pointer bg-[#E4E6EB] rounded-md">
                  <i class="fa-solid fa-earth-americas text-[12px] pr-[4px]"></i>
                  <p class="text-[13px] font-medium text-black pr-[4px]">Công khai</p>
                  <i class="fa-solid fa-caret-down text-[15px]"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full pb-[50px] px-[16px]">
            <input class="w-full border-0 focus:outline-none focus:ring-0" type="text"
              placeholder="Ân ơi, bạn đang nghĩ gì thế?" />
          </div>
          <div class="w-full flex items-center justify-between px-[16px]">
            <img class="h-[38px] cursor-pointer w-[38px]"
              src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
            <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
          </div>
          <div class="w-full py-[15px] px-[16px]">
            <div class="mb-[15px] p-[8px] w-full flex items-center justify-between border-1 border-gray-300 rounded-lg">
              <span class="text-black font-medium cursor-pointer">Thêm vào bài viết của bạn</span>
              <div class="flex justify-around">
                <div class="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F2F2F2]">
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

            <button class="w-full py-[10px] bg-[#0861F2] text-white font-medium rounded-lg">
              Đăng
            </button>
          </div>
          <!-- Close Modal Create Post -->
          <div @click="showModalCreatePost = false" class="absolute top-2 right-[12px]">
            <div
              class="w-[36px] h-[36px] flex items-center justify-center rounded-full cursor-pointer bg-[#E4E6EB] hover:bg-[#D8DADF]">
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
          <div class="w-full flex">
            <a class="w-[40px] h-[40px] hover:brightness-90" href="">
              <img class="w-full h-full rounded-full"
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="" />
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black">{{ userCurrent.name }}</p>
              <div class="w-full flex">
                <div class="flex py-[2px] px-[5px] items-center cursor-pointer bg-[#E4E6EB] rounded-md">
                  <i class="fa-solid fa-earth-americas text-[12px] pr-[4px]"></i>
                  <p class="text-[13px] font-medium text-black pr-[4px]">Công khai</p>
                  <i class="fa-solid fa-caret-down text-[15px]"></i>
                </div>
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
            <div class="mb-[15px] p-[8px] w-full flex items-center justify-between border-1 border-gray-300 rounded-lg">
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
          <div class="w-full mb-[15px]">
            <div class="w-full flex justify-between items-center mb-[10px]">
              <p class="text-[20px] font-bold text-black">Ảnh đại diện</p>
              <span
                class="cursor-pointer text-[#0064d1] text-[17px] px-[8px] py-[4px] hover:bg-[#F2F2F2] rounded-md">Chỉnh
                sửa</span>
            </div>
            <div class="w-full  flex justify-center">
              <div class="object-cover">
                <img
                  src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KkigPWugazcQ7kNvgGRiDW7&_nc_ht=scontent.fdad3-6.fna&oh=00_AYBlXbbO_2_NXWdbuwLbKwutKQiiOslRkF6nTmt4Uth68Q&oe=665CDFE6"
                  alt="" class="w-[168px] h-[168px] rounded-full">
              </div>
            </div>
          </div>
          <!-- Thay ảnh bìa -->
          <div class="w-full mb-[15px]">
            <div class="w-full flex justify-between items-center mb-[10px]">
              <p class="text-[20px] font-bold text-black">Ảnh bìa</p>
              <span
                class="cursor-pointer text-[#0064d1] text-[17px] px-[8px] py-[4px] hover:bg-[#F2F2F2] rounded-md">Chỉnh
                sửa</span>
            </div>
            <div class="w-full  flex justify-center">
              <div class="w-[70%] h-[180px] bg-[#F0F2F5]">
                <!-- <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KkigPWugazcQ7kNvgGRiDW7&_nc_ht=scontent.fdad3-6.fna&oh=00_AYBlXbbO_2_NXWdbuwLbKwutKQiiOslRkF6nTmt4Uth68Q&oe=665CDFE6" alt="" class="w-full h-full"> -->
              </div>
            </div>
          </div>
          <!-- Tên người dùng -->
          <div class="w-full mb-[10px]">
            <p class="text-[20px] font-bold text-black mb-[5px]">Tên người dùng</p>
            <div class="w-full  flex justify-center">
              <input type="text" placeholder="Tên người dùng"
                class="w-[100%] outline-none border-gray-400 rounded-lg h-full">
            </div>
          </div>
          <!-- ngày sinh -->
          <div class="w-full mb-[10px]">
            <p class="text-[20px] font-bold text-black mb-[5px]">Ngày sinh</p>
            <div class="w-100%">
              <input type="date" name="" id=""
                class="form-control border-gray-400 focus:ring-0 focus:outline-none focus:border-[2px] focus:border-[#1c64f2]"
                v-model="date_of_birth" />
            </div>
          </div>
          <!-- giới tính -->
          <div class="w-full mb-[10px]">
            <p class="text-[20px] font-bold text-black mb-[5px]">Giới tính</p>
            <div class="w-100%">
              <select name="" id="" class="w-full py-[8px] pl-[8px] rounded-lg border-gray-400">
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="1">Khác</option>
              </select>
            </div>
          </div>
          <button class="w-full py-[10px] bg-[#0861F2] text-white font-medium rounded-lg">Cập nhật</button>
        </div>
      </div>
    </div>
  </div>
  <modal-share />
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
import { Users, Ellipsis, Repeat, X } from 'lucide-vue-next'

import baseRequest from '@/baseAPI/baseRequest'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import modalShare from './Home/modalShare.vue'
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
    modalShare
  },
  mounted() {
    this.userName = this.$route.params.id;
    console.log(this.userName);
    this.getDataNewFeed()
    this.userCurrent = JSON.parse(localStorage.getItem('profile'))
    if (this.userCurrent && this.userCurrent.name) {
      this.placeholder = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`;
      this.placeholderPre = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`;
    }
    else {
      this.placeholder = 'Bạn đang nghĩ gì thế?';
      this.placeholderPre = 'Bạn đang nghĩ gì thế?';
    }
    this.isOwner = (this.userCurrent.username == this.userName)
    console.log('>>>>', this.isOwner);

    console.log(this.userCurrent);
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
      statusLike: false,
      userCurrent: {},
      indexModalComment: -1,
      placeholder: '',
      valueDetailPost: -1,
      contentComment: '',
      placeholderPre: '',
      date_of_birth: '',
      isOwner: false,
      userName: ''
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
            this.$toast.success('Upload file thành công', {
              position: 'bottom-right'
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
        console.log('>>>>>>>>>>>', obj)

        baseRequest
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
          this.allNewFeed.reverse()
          console.log(res.data.result)
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
    async likePost(index, type) {
      var payload = {}
      console.log('>>>>>>.', index);
      const post_id = this.allNewFeed?.[index]?._id ?? ''
      console.log('>>>>', post_id);
      if (type == 'newFeed') {
        payload = {
          post_id: post_id
        }
      } else {
        payload = {
          post_id: index
        }
      }
      if (!this.statusLike) {
        await baseRequest
          .post('/likes', payload)
          .then((res) => {
            this.$toast.success('Like thành công', {
              position: 'bottom-right'
            })
            this.getDataNewFeed()
            this.statusLike = true
          })
          .catch((errors) => {
            console.log(errors)
          })
      } else {
        // Nếu đã like, thực hiện yêu cầu DELETE
        await baseRequest
          .delete(`/likes/post/${payload.post_id}`)
          .then((res) => {
            console.log(res.data)
            this.$toast.error('Hủy like thành công', {
              position: 'bottom-right'
            })
            this.getDataNewFeed()
            this.statusLike = false
          })
          .catch((errors) => {
            console.log(errors)
          })
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
            limit: 5,
            page: 1
          }
        })
        .then((res) => {
          this.valueDetailPost.postComment = res.data.result.postComment
          console.log(this.valueDetailPost);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    handleDetailPost(index) {
      this.valueDetailPost = this.allNewFeed[index]
      console.log(this.valueDetailPost._id);
      if (this.valueDetailPost._id) {
        this.getCommentDetailPost()
      }
    },
    async commentPost(id) {
      const payload = {
        post_id: id,
        content: this.contentComment
      }
      console.log(payload)
      if (this.contentComment.trim() != '') {
        await baseRequest
          .post('/comments', payload)
          .then((res) => {
            this.contentComment = ''
            this.$toast.success('Comment thành công', {
              position: 'bottom-right'
            })
            this.getCommentDetailPost()
          })
          .catch((errors) => {
            console.log(errors)
          })
      }
    },
  },
  computed: {

  }
}
</script>
<style></style>