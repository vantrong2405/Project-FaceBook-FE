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
      <div class="col-span-2">
        <div class="grid grid-cols-2 shadow-md rounded-lg mb-5">
          <div class="p-3 mt-3">
            <h1 class="font-bold text-xl mb-3">Video mới dành cho bạn</h1>
            <div class="flex items-center mb-3">
              <img
                src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
                class="w-14 h-14 rounded-full mr-3" alt="">
              <div>
                <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
                <div class="flex items-center">
                  <div class="translate-y-[-62%] text-[#0866FD] mr-2 text-5xl font-bold">.</div>
                  <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 mt-12">
            <div class="flex mt-2">
              <img
                src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
                class="w-14 h-14 rounded-full mr-3" alt="">
              <div>
                <p class="text-base mt-2">Video mới của Theanh28 Entertaiment.</p>
                <div class="flex items-center">
                  <div class="translate-y-[-62%] text-[#0866FD] mr-2 text-5xl font-bold">.</div>
                  <div class="text-[#0866FD] mb-7 text-sm">4 giờ trước</div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div class="p-4 mb-4 shadow-md mt-3 rounded-lg">
          <div class="flex items-center mb-3">
            <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
              class="w-12 h-12 rounded-full mr-3" alt="">
            <div>
              <div class="flex items-center">
                <p class="font-semibold">Nhật Dương</p>
                <p class="translate-y-[-10%] ml-1 mr-1 text-[#65679B]">.</p>
                <p class="text-[#0866FD]">Theo dõi</p>
                <div class="fa-solid fa-ellipsis ml-[570px]"></div>
              </div>
              <div class="flex items-center">
                <p class="text-xs text-gray-500">2 tháng 2 lúc 22:31</p>
                <p class="translate-y-[-20%] ml-1 mr-0.5 text-[#65679B]">.</p>
                <i class="fa-solid fa-earth-americas text-[#65676B] text-xs"></i>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold mb-2">HELLO WORLD</p>
          <img src="https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946326-690-690.jpg"
            class="w-full h-auto mb-4 rounded-lg shadow-md" alt="">
          <div class="flex items-center text-gray-500">
            <i class="fas fa-thumbs-up mr-2"></i>
            <p>Like</p>
            <i class="fas fa-comment ml-4 mr-2"></i>
            <p>Comment</p>
            <i class="fas fa-share ml-4 mr-2"></i>
            <p>Share</p>
            <i
              class="fas fa-thumbs-up ml-auto rounded-full bg-[#049CFD] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
            <i
              class="fa-solid fa-heart mr-0.5 rounded-full bg-[#FC464E] text-white w-5 h-5 items-center text-xs px-1 pt-0.5"></i>
            <div class="flex text-xs">
              <span>Thanh Thư và 22K người khác</span>
              <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
              <p>80 bình luận</p>
              <span class="translate-y-[-10%] ml-1.5 mr-1.5">.</span>
              <p>10 triệu lượt xem</p>
            </div>
          </div>
        </div>
      </div>
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