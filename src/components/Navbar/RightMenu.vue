<template>

  <div class="flex items-center gap-1 sm:gap-2 justify-end px-4">
    <div id="menu-box"
      class="p-2 text-lg rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
      @click="
        isShowMenu = !isShowMenu;
      isShowMore = false;
      isShowMessager = false;
      isShowNotice = false;
      ">
      <svg-menu class="w-5 hidden lg:block" />

      <svg-create class="w-5 block lg:hidden" />


    </div>

    <!--Mess-->
    <div id="messenger-box"
      class="p-2 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300"
      @click="
        isShowMessager = !isShowMessager;
      isShowMenu = isShowMore = isShowNotice = false
        ">
      <svg-messenger class="w-5" />
      <!--Messenger-->


    </div>

    <!-- end mes -->


    <div id="notifications-box" @click="
      isShowMenu = false;
    isShowMore = false;
    isShowMessager = false;
    isShowNotice = !isShowNotice
    AnimationEvent;
    "
      class="p-2 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300">
      <svg-notifications class="w-5" />
    </div>

    <div id="pp-info" @click="
      isShowMore = !isShowMore;
    isShowMenu = false;
    isShowMessager = false;
    isShowNotice = false;

    "
      class="rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300 ">
      <div id="pp" class="rounded-full overflow-hidden w-9 relative border">
        <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" alt="" width="100%" />
        <div class="image-avatar"></div>
      </div>

    </div>

  </div>


  <!--Menu-->
  <div v-if="isShowMenu == true">
    <div
      class="max-w-xl top-full shadow-2xl border-solid border-2 border-spacing-0 rounded-xl bg-gray-100 absolute box-border right-0">
      <header class="my-2 mx-4 font-semibold px-2 text-2xl pt-1">Menu</header>
      <div class="flex">
        <div class="w-96 bg-white mx-2 my-2 rounded-xl">
          <div>
            <div class="">
              <input type="text" class="rounded-2xl outline-none my-3 mx-2 bg-gray-100 border-none"
                placeholder="Tìm kiếm trong menu" />
            </div>
          </div>

          <div>
            <span class="mx-4 font-semibold">Xã hội</span>
            <div>
              <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                <div>
                  <CalendarDays class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Sự kiện</p>
                  <p class="text-gray-400 text-xs">
                    Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                <div>
                  <Users class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Bạn bè</p>
                  <p class="text-gray-400 text-xs">
                    Tìm kiếm bạn bè hoặc những người bạn có thể biết.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                <div>
                  <Group class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Nhóm</p>
                  <p class="text-gray-400 text-xs">
                    Kết nối với những người cùng chung sở thích.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                <div>
                  <Newspaper class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Bảng tin</p>
                  <p class="text-gray-400 text-xs">
                    Xem bài viết phù hợp của những người và Trang bạn theo dõi.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <hr class="mx-3 my-2" />

          <div>
            <span class="mx-4 font-semibold">Giải trí</span>
            <div>
              <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                <div>
                  <MonitorPlay class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Video chơi game</p>
                  <p class="text-gray-400 text-xs">
                    Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                <div>
                  <Tv class="ml-6 mr-2 mt-3" />
                </div>

                <div class="m-1">
                  <p class="font-semibold">Video</p>
                  <p class="text-gray-400 text-xs">
                    Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="w-52 my-2 bg-white mr-2 rounded-xl h-[450px]">
          <div>
            <h1 class="m-2 mx-4 font-semibold box-border text-xl">Tạo</h1>
          </div>
          <div>
            <div class="hover:bg-gray-100 rounded-xl box-border my-3 mx-2 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <SquarePen class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Đăng</p>
                </div>
              </a>
            </div>

            <div class="hover:bg-gray-100 rounded-xl box-border mx-2 my-3 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <BookOpen class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Tin</p>
                </div>
              </a>
            </div>

            <div class="hover:bg-gray-100  rounded-xl box-border mx-2 my-3 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <Videotape class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Thước phim</p>
                </div>
              </a>
            </div>

            <div class="hover:bg-gray-100  rounded-xl box-border mx-2 my-3 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <Sparkle class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Sự kiện trong đời</p>
                </div>
              </a>
            </div>

            <hr class="mx-4 my-2" />

            <div class="hover:bg-gray-100 rounded-xl box-border mx-2 my-3 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <PanelsTopLeft class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Trang</p>
                </div>
              </a>
            </div>

            <div class="hover:bg-gray-100  rounded-xl box-border mx-2 my-3 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <Megaphone class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Quảng cáo</p>
                </div>
              </a>
            </div>

            <div class="hover:bg-gray-100  rounded-xl box-border mx-2 my-3 py-1">
              <a href="" class="flex">
                <div class="mx-2 w-8 h-8 bg-gray-200 rounded-xl">
                  <Group class="m-1" />
                </div>
                <div>
                  <p class="font-xl font-semibold box-border pt-1">Nhóm</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--EndMenu-->

  <!--Mess-->
  <div v-if="isShowMessager == true">
    <div class="bg-white w-[350px] box-border border-solid border-2 rounded-lg absolute top-full right-0">
      <div class="flex justify-between">
        <h3 class="mx-3 my-1 font-semiboldbold text-2xl"><b>Đoạn chat</b></h3>
        <div class="flex">
          <div class="px-2 py-1 mx-1 my-2 box-border rounded-xl hover:bg-gray-200 cursor-pointer">
            <Ellipsis class="w-5 h-5" />
          </div>
          <div class="px-2 py-1 mx-1 my-2 box-border rounded-xl hover:bg-gray-200 cursor-pointer">
            <ExternalLink class="w-5 h-5" />
          </div>
          <div class="px-2 py-1 mx-1 my-2 box-border rounded-xl hover:bg-gray-200 cursor-pointer">
            <MessageCirclePlus class="w-5 h-5" />
          </div>

          <div></div>
        </div>
      </div>

      <div>
        <input type="text" class="bg-gray-100 mx-4 rounded-xl" placeholder="Tìm kiếm trên Messenger" />
      </div>

      <div>
        <div>
          <div>
            <div class="flex items-center hover:bg-gray-100 rounded-xl m-3 cursor-pointer">
              <div>
                <img class="w-14 h-14 mx-2 my-2 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
            <div class="flex items-center hover:bg-gray-100 rounded-xl m-3 cursor-pointer">
              <div>
                <img class="w-14 h-14 mx-2 my-2 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
            <div class="flex items-center hover:bg-gray-100 rounded-xl m-3 cursor-pointer">
              <div>
                <img class="w-14 h-14 mx-2 my-2 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>
            <div class="flex items-center hover:bg-gray-100 rounded-xl m-3 cursor-pointer">
              <div>
                <img class="w-14 h-14 mx-2 my-2 rounded-full"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <div>
                  <p class="font-semibold">Thiện Ân</p>
                </div>
                <div class="flex">
                  <p>Hello my fen</p>
                  <p class="mx-1">.</p>
                  <p>1 giờ</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  <!--EndMess-->

  <!--Notice-->
  <div v-if="isShowNotice == true">
    <div
      class="w-96 font-semibold box-border shadow-2xl pb-20 bg-white border-solid border-2 rounded-lg right-0 absolute h-[92vh] overflow-auto top-full">
      <div class="m-2">
        <div class="py-1 my-1 z-50">
          <header class="flex justify-between bg-white z-0">
            <h3 class="font-bold text-xl mx-2">Thông báo</h3>
            <Ellipsis class="hover:bg-gray-200 rounded-lg mx-2 p-1" />
          </header>
        </div>

        <div class="bg-white mx-3">
          <button
            class="text-center mr-3 my-1 rounded-3xl px-2 py-1 hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500">
            Tất cả
          </button>
          <button
            class="text-center mr-3 my-1 rounded-3xl px-2 py-1 hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500">
            Chưa đọc
          </button>
        </div>

        <div class="flex justify-between my-1 mx-2 bg-white">
          <div>
            <p class="font-semibold">Trước đó</p>
          </div>
          <div class="hover:bg-gray-200 rounded-lg">
            <a href="https://www.facebook.com/notifications">
              <p class="text-blue-400 px-2 py-1">Xem tất cả</p>
            </a>
          </div>
        </div>

        <div class=" ">
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>

          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>

          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>

          <a href="" class=" ">
            <div class="flex hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76"
                  class="w-12 h-12 rounded-full" alt="" />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>TUẤN SPORT QN</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--EndNotice-->

  <!--AccountBox-->
  <div v-if="isShowMore == true">
    <!--ACCOUNT-->

    <div
      class="bg-gray-50 mt-1 box-content border-solid border-2 rounded-xl shadow-xl absolute w-[390px] top-full right-0">
      <div>
        <div class="bg-white m-3 p-1 box-border border-solid border-2 rounded-xl shadow-sm">
          <div class="mx-1 my-1 hover:bg-gray-100 rounded-xl">
            <a href="" class="flex">
              <div>
                <img class="w-10 h-10 mx-1 rounded-full my-2"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <p class="font-semibold my-1 mt-3 mx-2 text-base">Thiện Ân</p>
              </div>
            </a>
          </div>

          <hr class="mx-2 my-1" />

          <div class="mx-1 my-1 hover:bg-gray-100 rounded-xl">
            <a href="" class="flex">
              <div>
                <img class="w-10 h-10 mx-1 rounded-full my-2"
                  src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg" alt="" />
              </div>
              <div>
                <p class="font-semibold my-1 mt-3 mx-2 text-base">Page chưa đặt tên</p>
              </div>
            </a>
          </div>

          <hr class="mx-2 mb-2" />

          <a href="https://www.facebook.com/notifications"
            class="bg-gray-200 hover:bg-gray-400 py-2 mx-2 mb-3 flex rounded-lg focus:hidden">
            <div class="mx-auto flex items-center">
              <div class="mr-4">
                <Repeat class="my-1 w-4" />
              </div>
              <p class="font-semibold text-base bg-red" target="_blank">
                Xem tất cả trang cá nhân
              </p>
            </div>
          </a>
        </div>
        <div>
          <div class="mx-3 my-2">
            <a href="" class="flex justify-between hover:bg-gray-200 py-2 px-1 rounded-xl">
              <div class="flex">
                <div class="bg-gray-300 rounded-full py-1">
                  <Settings class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="mx-2 my-1 font-semibold text-base">Cài đặt và quyền riêng tư</div>
              </div>

              <div class="mx-2 mt-1">
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>

          <div class="mx-3 my-2">
            <a href="" class="flex justify-between hover:bg-gray-200 py-2 px-1 rounded-xl">
              <div class="flex">
                <div class="bg-gray-300 rounded-full py-1">
                  <CircleHelp class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="mx-2 my-1 font-semibold text-base">Cài đặt và quyền riêng tư</div>
              </div>
              <div class="mx-2 mt-1">
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>
          <div class="mx-3 my-2">
            <router-link to="/reset-password">
              <div class="flex justify-between hover:bg-gray-200 py-1 px-1 rounded-xl">
                <div class="flex">
                  <div class="bg-gray-300 rounded-full py-1">
                    <LogOut class="mx-1.5 my-0.5 p-1" />
                  </div>
                  <div class="py-1 mx-2 font-semibold text-base">Đổi mật khẩu</div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="mx-3 my-2">
            <div class="flex justify-between hover:bg-gray-200 py-1 px-1 rounded-xl" @click="logOut()">
              <div class="flex">
                <div class="bg-gray-300 rounded-full py-1">
                  <LogOut class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="py-1 mx-2 font-semibold text-base">Đăng xuất</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--endACCOUNT-->
  </div>
  <!--EndAccountBox-->
</template>

<script>
// SVG
import svgMenu from '../svg/svgMenu.vue'
import svgMessenger from '../svg/svgMessenger.vue'
import svgNotifications from '../svg/svgNotifications.vue'
import svgAccount from '../svg/svgAccount.vue'
import svgCreate from '../svg/svgCreate.vue'
import {
  BookOpen,
  CalendarDays,
  CircleHelp,
  DotIcon,
  DotSquareIcon,
  EarthLock,
  EclipseIcon,
  Ellipsis,
  ExternalLink,
  LogOut,
  Maximize,
  Maximize2,
  Megaphone,
  MessageCircle,
  MessageCirclePlus,
  MessageSquarePlus,
  PanelTop,
  PanelsTopLeft,
  Settings,
  Sparkle,
  Square,
  SquarePen,
  Tv,
  Videotape,
  Repeat
} from 'lucide-vue-next'
import { Users } from 'lucide-vue-next'
import { Group } from 'lucide-vue-next'
import { MonitorPlay } from 'lucide-vue-next'
import { Newspaper } from 'lucide-vue-next'
import baseRequest from '@/baseAPI/baseRequest'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
export default {
  props: {
    userCurrent: {
      Type: Object,
      default: {}
    }
  },
  components: {
    svgMenu,
    svgMessenger,
    svgNotifications,
    svgCreate,
    BookOpen,
    CalendarDays,
    ExternalLink,
    Ellipsis,
    MessageCirclePlus,
    Megaphone,
    Settings,
    PanelsTopLeft,
    Sparkle,
    CircleHelp,
    SquarePen,
    Tv,
    Videotape,
    Users,
    Group,
    MonitorPlay,
    Newspaper,
    LogOut,
    Repeat
  },
  data() {
    return {
      isShowMenu: false,
      isShowMessager: false, // khai báo 1 biến isSHow = false
      isShowNotice: false,
      isShowMore: false,
      avatar: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
    }
  },
  methods: {
    logOut() {
      try {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('profile')
        this.$router.push('/')
        this.$toast.success('Đăng xuất thành công', {
          position: 'bottom-right'
        })
      } catch (error) {
        this.$toast.error('Đăng xuất không thành công', {
          position: 'bottom-right'
        })
      }

    }
  }
}
</script>
