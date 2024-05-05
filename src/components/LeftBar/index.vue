<template>
  <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
    <div id="left-bar-top" class="w-full">
      <ul v-if="leftBarMove == 0">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
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
      <ul v-if="leftBarMove == 1">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trang chủ</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trực tiếp</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Reels</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Chương trình</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Khám phá</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Video đã lưu</span>
        </li>
      </ul>
      <ul v-if="leftBarMove == 2">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trang chủ</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trực tiếp</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Reels</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Chương trình</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Khám phá</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Video đã lưu</span>
        </li>
      </ul>
      <ul v-if="leftBarMove == 3">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trang chủ</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trực tiếp</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Reels</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Chương trình</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Khám phá</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Video đã lưu</span>
        </li>
      </ul>
      <ul v-if="leftBarMove == 4">
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trang chủ</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Trực tiếp</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Reels</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Chương trình</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Khám phá</span>
        </li>
        <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900">
          <img
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c37.12.175.176a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=2g5-IkMyFt8Q7kNvgEX4RNi&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjGioHm234i1D8nSvSrEkT_ed-oMss55bcSgO_G_fBuQ&oe=66351C2E"
            class="rounded-full w-9" alt="" />
          <span class="font-semibold text-tiny">Video đã lưu</span>
        </li>
      </ul>
      <!-- end -->

    </div>
  </div>
</template>
<!-- eslint-disable vue/no-export-in-script-setup -->
<script>
import svgSeeMore from '../svg/svgSeeMore.vue'
export default {
  props: {
    leftBarMove: {
      type: Number,
      default: 0
    }
  },
  components: {
    svgSeeMore
  },
  data() {
    return {
    }
  }
}
</script>
