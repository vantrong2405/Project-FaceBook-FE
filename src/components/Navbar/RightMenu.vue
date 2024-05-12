<template>
  <div class="flex items-center gap-1 sm:gap-2 justify-end px-4">
    <div id="menu-box"
      class="p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300">
      <svg-menu class="w-5 hidden lg:block" />
      <svg-create class="w-5 block lg:hidden" />
      <div class="max-w-xl top-full shadow-2xl border-solid border-2 border-spacing-0 rounded-xl hidden bg-gray-100 absolute mr-28 box-border">
        <header class="my-2
        mx-4 font-semibold px-2 text-2xl pt-1">MENU</header>
        <div class="flex ">
            <div class="w-96 bg-white mx-2 my-2 rounded-xl ">
                <div>
                    <div class="">
                        <input type="text" class="rounded-2xl outline-none my-3 mx-2 bg-gray-100 border-none" placeholder="Tìm kiếm trong menu"> -
                    </div>

                </div>

                <div>
                    <span class="mx-4 font-semibold">Xã hội</span>
                    <div>
                        <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                            <div>
                                <CalendarDays class="mx-4 mt-5" />
                            </div>

                            <div class="m-1">
                                <p class="font-semibold">Sự kiện</p>
                                <p class="text-gray-400 text-xs">Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="" class="flex mx-2 my-2 rounded-xl  hover:bg-gray-100">
                            <div>
                                <Users class="mx-4 my-3" />

                            </div>

                            <div class="m-1">
                                <p class="font-semibold">Bạn bè</p>
                                <p class="text-gray-400 text-xs">Tìm kiếm bạn bè hoặc những người bạn có thể biết.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="" class="flex mx-2 my-2 rounded-xl  hover:bg-gray-100">
                            <div>
                                <Group class="mx-4 my-3" />

                            </div>

                            <div class="m-1">
                                <p class="font-semibold">Nhóm</p>
                                <p class="text-gray-400 text-xs">Kết nối với những người cùng chung sở thích.</p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="" class="flex mx-2 my-2 rounded-xl  hover:bg-gray-100">
                            <div>
                                <Newspaper class="mx-4 my-5" />

                            </div>

                            <div class="m-1">
                                <p class="font-semibold">Bảng tin</p>
                                <p class="text-gray-400 text-xs">Xem bài viết phù hợp của những người và Trang bạn theo dõi.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <hr class="mx-3 my-2">

                <div>
                    <span class="mx-4 font-semibold">Giải trí</span>
                    <div>
                        <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                            <div>
                                <MonitorPlay class="mx-4 mt-5" />
                            </div>

                            <div class="m-1">
                                <p class="font-semibold">Video chơi game</p>
                                <p class="text-gray-400 text-xs">Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.</p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="" class="flex mx-2 my-2 rounded-xl hover:bg-gray-100">
                            <div>
                                <Tv class="mx-4 mt-5" />
                            </div>

                            <div class="m-1">
                                <p class="font-semibold">Video</p>
                                <p class="text-gray-400 text-xs">Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.</p>
                            </div>
                        </a>
                    </div>

                </div>

            </div>

            <div class="w-52 my-2 bg-white mr-2 rounded-xl ">
                <div>
                    <h1 class="m-2 mx-4 font-semibold box-border text-xl">Tạo</h1>

                </div>
                <div>

                    <div class="hover:bg-gray-100 rounded-xl box-border my-3 mx-2 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

                                <SquarePen class="m-1" />
                            </div>
                            <div>

                                <p class="font-xl font-semibold box-border pt-1">Đăng</p>
                            </div>
                        </a>
                    </div>

                    <div class="hover:bg-gray-100 bg-white rounded-xl box-border mx-2  my-3 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

                                <BookOpen class="m-1" />

                            </div>
                            <div>

                                <p class="font-xl font-semibold box-border pt-1">Tin</p>
                            </div>
                        </a>
                    </div>

                    <div class="hover:bg-gray-100 bg-white rounded-xl box-border mx-2  my-3 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

                                <Videotape class="m-1" />
                            </div>
                            <div>

                                <p class="font-xl font-semibold box-border pt-1">Thước phim</p>
                            </div>
                        </a>
                    </div>

                    <div class="hover:bg-gray-100 bg-white rounded-xl box-border mx-2  my-3 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

                                <Sparkle class="m-1" />
                            </div>
                            <div>

                                <p class="font-xl font-semibold box-border pt-1">Sự kiện trong đời
                                </p>
                            </div>
                        </a>
                    </div>

                    <hr class="mx-4 my-2">

                    <div class="hover:bg-gray-100 bg-white rounded-xl box-border mx-2  my-3 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

                                <PanelsTopLeft class="m-1" />
                            </div>
                            <div>

                                <p class="font-xl font-semibold box-border pt-1">Trang</p>
                            </div>
                        </a>
                    </div>

                    <div class="hover:bg-gray-100 bg-white rounded-xl box-border mx-2  my-3 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

                                <Megaphone class="m-1" />
                            </div>
                            <div>

                                <p class="font-xl font-semibold box-border pt-1">Quảng cáo</p>
                            </div>
                        </a>
                    </div>

                    <div class="hover:bg-gray-100 bg-white rounded-xl box-border mx-2  my-3 py-1">
                        <a href="" class="flex ">
                            <div class=" mx-2 w-8 h-8 bg-gray-200 rounded-xl ">

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
    <div id="messenger-box"
      class="p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300">
      <svg-messenger class="w-5" />

      <div class="bg-white  w-80 box-border border-solid border-2 rounded-lg absolute hidden top-full  ">
        <div class="flex justify-between">
            <h3 class="mx-3 my-1 font-semiboldbold text-2xl"><b>Đoạn chat</b></h3>
            <div class="flex">
                <div class="px-2 py-1 mx-1 my-2 box-border rounded-xl hover:bg-gray-200 cursor-pointer ">
                    <Ellipsis/>
                </div>            
                <div class="px-2 py-1 mx-1 my-2 box-border rounded-xl hover:bg-gray-200 cursor-pointer ">
                  <ExternalLink/>
                </div>
                <div class="px-2 py-1 mx-1 my-2 box-border rounded-xl hover:bg-gray-200 cursor-pointer ">
                  <MessageCirclePlus/>
                </div>
                
                <div></div>
            </div>
            
        </div>

        <div>
            <input type="text" class="bg-gray-100 mx-4  rounded-xl " placeholder="Tìm kiếm trên Messenger">
            
        </div>

        

        <div class="">
            <div>
                <div>
                    <a href="" class="flex hover:bg-gray-100 rounded-xl m-3">
                        <img class="w-14 mx-2 my-2 rounded-full" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="" >
                        <div class=" p-3">
                            <div>
                                <p class="font-semibold">Thiện Ân</p>
                            </div>
                            <div class="flex">
                                <p>Hello my fen</p>
                                <div class=" flex ">
                                    <div><p class="mx-1">.</p></div>
                                    <div><p>1 giờ</p></div>
                                        
                                    
                                </div>
                            </div>

                            
                        </div>

                        
                    </a>

                    <a href="" class="flex hover:bg-gray-100 rounded-xl m-3">
                        <img class="w-14 mx-2 my-2 rounded-full" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="" >
                        <div class=" p-3">
                            <div>
                                <p class="font-semibold">Thiện Ân</p>
                            </div>
                            <div class="flex">
                                <p>Hello my fen</p>
                                <div class=" flex ">
                                    <div><p class="mx-1">.</p></div>
                                    <div><p>1 giờ</p></div>
                                        
                                    
                                </div>
                            </div>

                            
                        </div>

                        
                    </a>
                    <a href="" class="flex hover:bg-gray-100 rounded-xl m-3">
                        <img class="w-14 mx-2 my-2 rounded-full" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="" >
                        <div class=" p-3">
                            <div>
                                <p class="font-semibold">Thiện Ân</p>
                            </div>
                            <div class="flex">
                                <p>Hello my fen</p>
                                <div class=" flex ">
                                    <div><p class="mx-1">.</p></div>
                                    <div><p>1 giờ</p></div>
                                        
                                    
                                </div>
                            </div>

                            
                        </div>

                        
                    </a>
                    <a href="" class="flex hover:bg-gray-100 rounded-xl m-3">
                        <img class="w-14 mx-2 my-2 rounded-full" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="" >
                        <div class=" p-3">
                            <div>
                                <p class="font-semibold">Thiện Ân</p>
                            </div>
                            <div class="flex">
                                <p>Hello my fen</p>
                                <div class=" flex ">
                                    <div><p class="mx-1">.</p></div>
                                    <div><p>1 giờ</p></div>
                                        
                                    
                                </div>
                            </div>

                            
                        </div>

                        
                    </a>
                    <a href="" class="flex hover:bg-gray-100 rounded-xl m-3">
                        <img class="w-14 mx-2 my-2 rounded-full" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="" >
                        <div class=" p-3">
                            <div>
                                <p class="font-semibold">Thiện Ân</p>
                            </div>
                            <div class="flex">
                                <p>Hello my fen</p>
                                <div class=" flex ">
                                    <div><p class="mx-1">.</p></div>
                                    <div><p>1 giờ</p></div>
                                        
                                    
                                </div>
                            </div>

                            
                        </div>

                        
                    </a>

                    
                </div>

                
            </div>
        </div>

     </div>
    </div>


    <div id="notifications-box"
      class="p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300">
      <svg-notifications class="w-5" />

      <div class="w-96 mr-32 font-semibold box-border shadow-2xl bg-white border-solid border-2 rounded-lg absolute hidden top-full ">

<div class=" m-2">
  <div class="py-1 my-1 z-50 ">
      <header class="flex justify-between bg-white z-0">
          <h3 class="font-bold text-xl mx-2">Thông báo</h3>
          <Ellipsis  class="hover:bg-gray-200 rounded-lg mx-2 p-1"/>
      </header>              
  </div>

  <div class="bg-white mx-3">
      <button class="text-center mr-3 my-1 rounded-3xl px-2 py-1 hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500 ">Tất cả</button>
      <button class=" text-center mr-3 my-1 rounded-3xl px-2 py-1 hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500">Chưa đọc</button>
  </div>

  <div class="flex justify-between my-1 mx-2 bg-white">
      <div>
          <p class="font-semibold" >Trước đó</p>

      </div>
      <div class="hover:bg-gray-200 rounded-lg">
          <a href="">
            <p class="text-blue-400 px-2 py-1">
              Xem tất cả
            </p>
          </a>
      </div>

  </div>

  <div class=" ">
      <a href="" class=" ">
          <div class="flex   hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2 ">
                  <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76" class=" w-12 h-12 rounded-full" alt="">
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
          <div class="flex   hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2 ">
                  <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76" class=" w-12 h-12 rounded-full" alt="">
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
          <div class="flex   hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2 ">
                  <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76" class=" w-12 h-12 rounded-full" alt="">
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
          <div class="flex   hover:bg-gray-200 mx-1 p-2 rounded-xl">
              <div class="mr-2 ">
                  <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/300362956_379273724392258_4259585475714196784_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBwifq76_BJhOH-etGc1yStjZTx5sJwqJsp-VD5VN1Zhw&oe=66460A76" class=" w-12 h-12 rounded-full" alt="">
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


    <div id="pp-info" class="rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300">
        <div id="pp" class="rounded-full overflow-hidden w-10 relative border">
            <img src="../../assets/images/pp.jpg" alt="" width="100%" />
            <div class="image-avatar"></div>
        </div>
        
    </div>
    <div id="account-box"
      class="relative p-3 rounded-full flex items-center justify-center cursor-pointer bg-myGray-900 hover:bg-myGray-700 transition-colors duration-300">
      <svg-account class="w-5" />
      <router-link to="/profile">
        <div class="bg-gray-50  mt-1 mr-96 box-border border-solid border-2 rounded-xl w-100 shadow-xl absolute hidden top-full">
        <div>
            
            <div class="bg-white m-4 p-1 box-border border-solid border-2 rounded-xl shadow-sm">
                <div class="mx-1 my-1 hover:bg-gray-100 rounded-xl">
                    <a href="" class="flex">
                        <div>
                            <img class="w-16 h-16 mx-1 rounded-full my-2" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="">
                        </div>
                        <div>
                            <p class="font-semibold my-5 mt-6 mx-2 text-xl">Thiện Ân</p>
                            
                               
                        </div>
                    </a>
                </div>
                

                <hr class="mx-2 my-3"> 

                <div class="mx-1 my-1 hover:bg-gray-100 rounded-xl">
                    <a href="" class="flex">
                        <div>
                            <img class="w-16 h-16 mx-1 rounded-full my-2" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/300362956_379273724392258_4259585475714196784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ANUcRo9mmy0Q7kNvgGQJ9YF&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDDjlm8t13v5aaTOXmDv5EyYM1mQ13y21yGbPq5XJrOkA&oe=66462334" alt="">
                        </div>
                        <div>
                            <p class="font-semibold my-5 mt-6 mx-2 text-xl">Page gì cũng được</p>
                            
                               
                        </div>
                    </a>
                </div>
                 
                <hr class="mx-2 my-3"> 
                
                <a href="" class="">
                    <div class="bg-gray-300 hover:bg-gray-400 py-2 mx-2 mb-3 flex rounded-lg focus:hidden">
                        <div class="mx-auto flex">
                            <div class="mr-4">
                                <Repeat/>
                            </div>
                            <div class=" ">
                                <p class="font-semibold text-xl">Xem tất cả trang cá nhân</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </a>
    
            </div>
            <div>
                <div class="mx-3 my-2">
                    <a href="" class="flex justify-between hover:bg-gray-200 py-2 px-1 rounded-xl ">
                        <div class="flex">
                            <div class="bg-gray-300 rounded-full py-1 ">
                                
                                <Settings class="mx-2 my-1"/>
                            </div>
                            <div class="  mx-2 my-1 font-semibold text-xl">
                                Cài đặt và quyền riêng tư
                            </div>
                        </div>
                        
                        <div class="mx-2 mt-1">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </a>
                </div>

                <div class="mx-3 my-2">
                    <a href="" class="flex justify-between hover:bg-gray-200 py-2 px-1 rounded-xl ">
                        <div class="flex">
                            <div class="bg-gray-300 rounded-full py-1 ">
                                
                                <CircleHelp class="mx-2 my-1"/>
                            </div>
                            <div class="  mx-2 my-1 font-semibold text-xl">
                                Cài đặt và quyền riêng tư
                            </div>
                        </div>
                        
                        <div class="mx-2 mt-1">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </a>
                </div>

                <div class="mx-3 my-2">
                    <a href="" class="flex justify-between hover:bg-gray-200 py-1 px-1 rounded-xl">
                        <div class="flex">
                            <div class="bg-gray-300 rounded-full py-1 ">
                               
                              <LogOut class="mx-2 my-1"/>
                            </div>
                            <div class="py-1 mx-2 font-semibold text-xl">
                                Đăng xuất
                            </div>
                        </div>
                        
                        
                    </a>
                </div>
                
            </div>
        </div>

    </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// SVG
import svgMenu from '../svg/svgMenu.vue'
import svgMessenger from '../svg/svgMessenger.vue'
import svgNotifications from '../svg/svgNotifications.vue'
import svgAccount from '../svg/svgAccount.vue'
import svgCreate from '../svg/svgCreate.vue'
export default {
  components: {
    svgMenu,
    svgMessenger,
    svgNotifications,
    svgAccount,
    svgCreate
  },
  data() {
    return {
      isShowProfile: true
    }
  },
  methods: {}
}
</script>
