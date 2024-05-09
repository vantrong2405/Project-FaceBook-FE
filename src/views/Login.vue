<template>
  <div>
    <div id="Login" class="bg-[#F0F2F5]">
      <div class="container max-w-[1100px] mx-auto flex justify-between px-[3%] py-[8%]">
        <!-- Login-L1 -->
        <div id="Login-L1" class="w-[55%] pt-[3%]">
          <img class="h-[105px] mx-[-30px] mb-[-10px]" src="./img/logoFb.svg" alt="" />
          <h2 class="text-[28px] pb-[20px] w-[90%] leading-[32px]">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </h2>
        </div>
        <!-- Login-L2 -->
        <div id="Login-L2" class="w-[55%]">
          <div class="pt-[8px] pb-[16px] text-[12px]">
            <img class="h-[75px] m-[-25px]" src="./img/logoFb.svg" alt="" />
          </div>
          <div class="text-[36px]">Đăng nhập gần đây</div>
          <div class="text-[#606770] text-[15px] leading-[24px] pb-[12px] mb-[12px]">
            Nhấp vào ảnh của bạn hoặc thêm tài khoản.
          </div>
          <div class="flex flex-wrap">
            <div class="flex-grow-0 flex-shrink-0 basis-[178px] mb-[20px]">
              <!-- Add-login-ava -->
              <div id="Add-login-ava" class="relative">
                <div
                  class="inline-block shadow-sm shadow-[#dddfe2] hover:shadow-lg rounded-lg border-[1px] border-[#e5e7eb] bg-white group transition-shadow duration-[0.2s]">
                  <a title="" class="inline-block rounded-lg" href="#">
                    <img class="rounded-t-lg h-[160px] w-[160px]" src="./img/ava.jpg" alt="" />
                    <div class="text-[#4b4f56] text-[18px] leading-[22px] p-[12px] w-[160px] text-center rounded-b-lg">
                      Name
                    </div>
                  </a>
                  <!-- Close btn Login-L2  -->
                  <div id="Close-btn-login-L2"
                    class="bg-black h-[16px] w-[16px] bg-opacity-30 text-center rounded-[16px] absolute top-[5px] left-[4px] cursor-pointer group-hover:bg-white group-hover:h-[25px] group-hover:w-[25px] group-hover:top-[-3px] group-hover:left-[-3px] group-hover:shadow-lg transition-all duration-[0.1s]">
                    <i
                      class="fa-solid fa-xmark text-[12px] absolute bottom-[2px] left-[5px] text-white group-hover:text-[16px] group-hover:text-black group-hover:text-opacity-40 group-hover:bottom-[4px] group-hover:left-[7px]"></i>
                  </div>
                  <span
                    class="bg-[#fa3e3e] text-[13px] h-[24px] w-[24px] text-center absolute leading-[24px] text-white rounded-[24px] right-[12px] top-[-3px] shadow-lg cursor-default"
                    title="">8</span>
                </div>
              </div>
            </div>
            <div class="flex flex-grow-0 flex-shrink-0 basis-[178px] mb-[20px]">
              <!-- Addloginnormal -->
              <div id="Add-login-normal"
                class="inline-block w-[160px] shadow-sm shadow-[#dddfe2] hover:shadow-lg rounded-lg border-[1px] border-[#e5e7eb] bg-white group transition-shadow duration-[0.2s]">
                <a class="inline-block rounded-lg" href="#">
                  <div
                    class="h-[160px] w-[160px] bg-[#f5f6f7] text-center rounded-t-lg border-[1px] border-[#e5e7eb] border-b-0 relative">
                    <div
                      class="bg-[#1976F2] h-[43px] w-[43px] rounded-[43px] text-center absolute top-[60px] left-[58px]">
                      <i class="fa-solid fa-plus leading-[43px] text-white text-[25px]"></i>
                    </div>
                  </div>
                  <div class="text-[#0866FF] p-[12px] text-[18px] text-center">Thêm tài khoản</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[40%] pt-[30px]">
          <div class="shadow-lg bg-white px-[15px] p-[15px] rounded-[10px]">
            <!-- form login -->
            <form class="h-2/4">
              <input type="text" class="block border-2 w-full py-[12px] px-[16px] text-[16px] rounded-md mb-[10px]"
                placeholder="Email or hoặc số điện thoại" />
              <input type="text"
                class="block border-2 w-full py-[12px] px-[16px] text-[16px] rounded-md mt-[10px] mb-[20px]"
                placeholder="Mật khẩu" />
              <input type="submit"
                class="block w-full rounded-md px-[14px] py-[10px] text-[20px] hover:bg-[#1877F2] cursor-pointer font-bold bg-[#0866ff] text-white"
                value="Đăng nhập" />
            </form>
            <div class="text-center pt-[10px]">
              <a href="#" class="text-[#0866ff] text-[14px] hover:underline">Quên mật khẩu?</a>
            </div>
            <hr class="mb-[10px] pb-[20px] mt-[16px]" />
            <div class="text-center pb-[20px]">
              <a id="creat-acc" href="#"
                class="rounded-md text-lg font-[650] bg-[#42b72a] hover:bg-[#36A420] text-[17px] text-white py-[13px] px-[18px]">Tạo
                tài khoản mới
              </a>
            </div>
          </div>
          <div>
            <p class="mt-[20px] text-[14px] text-center">
              <a class="font-bold hover:underline cursor-pointer" href="#">Tạo Trang</a> dành cho
              người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sub_Login -->
    <!-- Sub-login-normal -->
    <section id="Sub-login-normal" class="bg-black bg-opacity-[0.4] fixed bottom-0 right-0 left-0 top-0 z-40">
      <div class="w-full h-full py-[11%]">
        <div class="container w-[400px] bg-white mx-auto rounded-lg">
          <div class="p-[16px] relative">
            <!-- Close-btn-sub -->
            <div id="Close-btn-sub-normal"
              class="h-[36px] w-[36px] bg-[#ebedf0] hover:bg-[#DADDE1] text-center float-end rounded-[50%]">
              <i class="fa-solid fa-xmark text-[24px] leading-[36px] text-[black] text-opacity-70"></i>
            </div>
            <div class="text-[20px] text-center leading-[24px] pt-[6px] pb-[12px] pl-[36px]">
              Đăng nhập Facebook
            </div>
            <div class="w-[400px] my-[6px] ml-[-16px]">
              <hr class="h-1px text-[#dadde1]" />
            </div>
            <form action="" class="">
              <div class="py-[6px]">
                <input type="text"
                  class="block border-[1px] border-[#dddfe2] w-full py-[12px] px-[16px] text-[16px] rounded-md"
                  placeholder="Email or hoặc số điện thoại" />
              </div>
              <div class="py-[6px]">
                <input type="text"
                  class="block border-[1px] border-[#dddfe2] w-full py-[12px] px-[16px] text-[16px] rounded-md"
                  placeholder="Mật khẩu" />
              </div>
              <div class="pt-[6px] pb-[16px]">
                <label for="savepass-normal" class="relative text-left pl-[32px] cursor-pointer font-[600]">
                  <input id="savepass-normal" class="class h-0 w-0 absolute" type="checkbox" name="savepass" value="" />
                  <span id="checkbox-savepass-normal"
                    class="h-[20px] w-[20px] leading-[18px] border-[1px] border-[#d7dade] rounded absolute top-0 left-0 pl-[3px] bg-transparent"></span>
                  <div class="inline-block text-[#606770] text-[15px] leading-[20px] font-normal">
                    Nhớ mật khẩu
                  </div>
                </label>
              </div>
              <div class="my-[12px]">
                <input type="submit"
                  class="block w-full rounded-md px-[7px] py-[8px] text-[17px] hover:bg-[#1877F2] cursor-pointer font-bold bg-[#0866ff] text-white"
                  value="Đăng nhập" />
              </div>
              <div class="text-center py-[10px]">
                <a href="#" class="text-[#0866ff] text-[17px] leading-[20px] hover:underline">Quên mật khẩu?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Sub-login-ava-->
    <section id="Sub-login-ava" class="bg-black bg-opacity-[0.4] fixed bottom-0 right-0 left-0 top-0 z-40">
      <div class="w-full h-full ">
        <div class="container w-[400px] bg-white mx-auto rounded-lg">
          <div class="p-[16px] relative">
            <!-- Close-btn-sub -->
            <div id="Close-btn-sub-ava"
              class="h-[36px] w-[36px] bg-[#ebedf0] hover:bg-[#DADDE1] text-center float-end rounded-[50%]">
              <i class="fa-solid fa-xmark text-[24px] leading-[36px] text-[black] text-opacity-70"></i>
            </div>
            <div class="text-center">
              <img
                class="inline-block h-[160px] w-[160px] border-[1px] text-center border-black border-opacity-10 rounded-[50%] mt-[44px] mr-[-36px]"
                src="./img/ava.jpg" alt="" />
            </div>
            <form action="" class="">
              <div class="pd-[4px] pb-[14px] text-center text-[17px]">Name</div>
              <div class="py-[6px]">
                <input type="text"
                  class="block border-[1px] border-[#dddfe2] w-full py-[12px] px-[16px] text-[16px] rounded-md"
                  placeholder="Mật khẩu" />
              </div>
              <div class="pt-[6px] pb-[16px]">
                <label for="savepass-ava" class="relative text-left pl-[32px] cursor-pointer font-[600]">
                  <input id="savepass-ava" class="class h-0 w-0 absolute" type="checkbox" name="savepass" value="" />
                  <span id="checkbox-savepass-ava"
                    class="h-[20px] w-[20px] leading-[18px] border-[1px] border-[#d7dade] rounded absolute top-0 left-0 pl-[3px] bg-transparent"></span>
                  <div class="inline-block text-[#606770] text-[15px] leading-[20px] font-normal">
                    Nhớ mật khẩu
                  </div>
                </label>
              </div>
              <div class="my-[12px]">
                <input type="submit"
                  class="block w-full rounded-md px-[7px] py-[8px] text-[17px] hover:bg-[#1877F2] cursor-pointer font-bold bg-[#0866ff] text-white"
                  value="Đăng nhập" />
              </div>
              <div class="text-center py-[10px]">
                <a href="#" class="text-[#0866ff] text-[17px] leading-[20px] hover:underline">Quên mật khẩu?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- section Register -->
    <section id="register" class="bg-[#FFF] bg-opacity-80 fixed bottom-0 z-50 top-0 left-0 right-0">
      <div class="w-full text-center pt-[5%]">
        <div class="inline-block text-left m-[20px] relative">
          <div class="w-[430px] bg-white shadow-lg rounded-md">
            <img id="cancel" class="w-[24px] h-[24px] absolute top-[10px] right-[12px]" src="./img/cancel.png" alt="" />
            <div class="py-[10px] px-[16px]">
              <h1 class="text-[32px] leading-[38px] font-bold">Đăng ký</h1>
              <p class="text-[#606770] text-[15px] pt-[2px]">Nhanh chóng và dễ dàng.</p>
            </div>
            <div class="p-[16px] border-t-[1px] border-[#ccd0d5]">
              <!-- form register -->
              <form class="w-full">
                <div class="flex justify-between mb-[10px]">
                  <input type="text" class="input border-[1px] border-[#ccd0d5] p-[6px] bg-[#F5F6F7] rounded-md"
                    placeholder="Họ" />
                  <input type="text" class="input border-[1px] border-[#ccd0d5] p-[6px] bg-[#F5F6F7] rounded-md"
                    placeholder="Tên" />
                </div>
                <div class="mb-[10px]">
                  <input type="text" class="input w-full border-[1px] border-[#ccd0d5] p-[6px] bg-[#F5F6F7] rounded-md"
                    placeholder="Số di động hoặc email" />
                </div>
                <div class="mb-[15px]">
                  <input type="text" class="input w-full border-[1px] border-[#ccd0d5] p-[6px] bg-[#F5F6F7] rounded-md"
                    placeholder="Mật khẩu mới " />
                </div>
                <!-- ngày sinh -->
                <div class="mb-[15px]">
                  <div class="flex text-[#606770]">
                    <p class="text-[12px] pr-[2px]">Ngày sinh</p>
                    <a href="">
                      <img class="h-[15px] w-[15px]" src="./img/MoreInforIcon.png " alt="" />
                    </a>
                  </div>
                  <div class="flex justify-between w-100%">
                    <span class="justify-start h-[36px] w-[31%]">
                      <select id="day" title="Ngày"
                        class="border-[1px] text-[15px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                      </select>
                    </span>
                    <span class="h-[36px] w-[31%]">
                      <select id="Month " title="Tháng"
                        class="border-[1px] text-[15px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
                        <option value="1" selected>Tháng 1</option>
                        <option value="2">Tháng 2</option>
                        <option value="3">Tháng 3</option>
                        <option value="4">Tháng 4</option>
                        <option value="5">Tháng 5</option>
                        <option value="6">Tháng 6</option>
                        <option value="7">Tháng 7</option>
                        <option value="8">Tháng 8</option>
                        <option value="9">Tháng 9</option>
                        <option value="10">Tháng 10</option>
                        <option value="11">Tháng 11</option>
                        <option value="12">Tháng 12</option>
                      </select>
                    </span>
                    <span class="justify-end h-[36px] w-[31%]">
                      <select id="years " title="năm"
                        class="border-[1px] text-[15px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
                        <option value="2024" selected="1">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                      </select>
                    </span>
                  </div>
                </div>
                <!-- giới tính -->
                <div>
                  <div class="flex text-[#606770]">
                    <p class="text-[12px] pr-[2px]">Giới tính</p>
                    <a href="">
                      <img class="h-[15px] w-[15px]" src="./img/MoreInforIcon.png " alt="" />
                    </a>
                  </div>
                  <div class="text-[15px] flex justify-between w-100%">
                    <span
                      class="h-[36px] input w-[28%] leading-[36px] relative rounded-[4px] border-[1px] border-[#ccd0d5]">
                      <label class="pr-[28px] pl-[10px]" for="female">Nữ</label>
                      <input name="sex" id="female" class="absolute top-0 bottom-0 right-[10px]" type="radio" />
                    </span>
                    <span class="h-[36px] w-[28%] leading-[36px] relative rounded-[4px] border-[1px] border-[#ccd0d5]">
                      <label class="pr-[28px] pl-[10px]" for="male">Nam</label>
                      <input name="sex" id="male" class="absolute top-0 bottom-0 right-[10px]" type="radio" />
                    </span>
                    <span class="h-[36px] w-[38%] leading-[36px] relative rounded-[4px] border-[1px] border-[#ccd0d5]">
                      <label class="pr-[28px] pl-[10px]" for="option">Tùy chỉnh</label>
                      <input name="sex" id="option" class="absolute top-0 bottom-0 right-[10px]" type="radio" />
                    </span>
                  </div>
                  <div id="custom-gender" class="mt-[10px]">
                    <div class="mb-[5px]">
                      <select aria-label="Chọn danh xưng"
                        class="border-[1px] text-[15px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
                        <option value="1" disabled="1" selected="1">Chọn danh xưng</option>
                        <option value="1">Cô ấy: "Chúc cô ấy sinh nhật vui vẻ!"</option>
                        <option value="2">Anh ấy: "Chúc anh ấy sinh nhật vui vẻ!"</option>
                        <option value="6">Họ: "Chúc họ sinh nhật vui vẻ!"</option>
                      </select>
                    </div>
                    <div>
                      <p class="text-[#606770] text-[12px]">
                        Danh xưng của bạn hiển thị với tất cả mọi người.
                      </p>
                    </div>

                    <div class="my-[8px]">
                      <div class="w-full">
                        <input type="text"
                          class="w-full border-[1px] border-[#ccd0d5] p-[6px] text-[15px] bg-[#F5F6F7] rounded-md"
                          placeholder="Giới tính (không bắt buộc)" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <p class="my-[11px] text-[#777] text-[11px]">
                  Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên
                  Facebook.
                  <a class="text-[#385898] cursor-pointer hover:underline" href="#">Tìm hiểu thêm.</a>
                </p>
              </div>
              <div>
                <p class="my-[11px] text-[#777] text-[11px]">
                  Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                  <a class="text-[#385898] cursor-pointer hover:underline" href="#">Điều khoản</a>,
                  <a class="text-[#385898] cursor-pointer hover:underline" href="#">Chính sách quyền riêng tư
                  </a>
                  và
                  <a class="text-[#385898] cursor-pointer hover:underline" href="">Chính sách cookie </a>của chúng tôi.
                  Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận
                  bất kỳ lúc nào.
                </p>
              </div>
              <div class="w-full text-center py-[10px]">
                <div id="registerButton"
                  class="inline-block cursor-pointer rounded-md bg-[#00a400] hover:bg-[#6DA160] h-[36px] w-[194px] leading-[36px]">
                  <input type="button" value="Đăng ký" class="cursor-pointer text-white text-[18px] font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- FOOTER -->
    <footer>
      <div class="container px-[5%] py-[1%]">
        <div class="mx-auto w-[1100px]">
          <ul class="flex flex-wrap gap-[15px] text-[#737373] pt-[8px]">
            <li><a class="text-[12px]" href="#">Tiếng Việt</a></li>
            <li><a class="text-[12px] hover:underline" href="#">English (UK)</a></li>
            <li><a class="text-[12px] hover:underline" href="#">中文(台灣)</a></li>
            <li><a class="text-[12px] hover:underline" href="#">한국어</a></li>
            <li><a class="text-[12px] hover:underline" href="#">日本語</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Français (France)</a></li>
            <li><a class="text-[12px] hover:underline" href="#">ภาษาไทย</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Español</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Português (Brasil)</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Italiano</a></li>
          </ul>
          <hr class="mt-[8px] mb-[5px]" />
          <ul class="flex flex-wrap gap-[15px] text-[#737373]">
            <li><a class="text-[12px] hover:underline" href="#">Đăng ký</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Đăng nhập</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Messenger</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Facebook</a></li>
            <li><a class="text-[12px] hover:underline" href="#">LiteVideo</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Địa điểm</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Trò chơi</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Marketplace</a></li>
            <li><a class="text-[12px] hover:underline" href="#">MetaPay</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Cửa hàng trên Meta</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Meta Quest </a></li>
            <li><a class="text-[12px] hover:underline" href="#">Meta AI</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Instagram</a></li>
          </ul>
          <ul class="flex flex-wrap gap-[15px] text-[#737373]">
            <li><a class="text-[12px] hover:underline" href="#">Đăng ký</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Đăng nhập</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Messenger</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Facebook</a></li>
            <li><a class="text-[12px] hover:underline" href="#">LiteVideo</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Địa điểm</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Trò chơi</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Marketplace</a></li>
            <li><a class="text-[12px] hover:underline" href="#">MetaPay</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Cửa hàng trên Meta</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Meta Quest </a></li>
            <li><a class="text-[12px] hover:underline" href="#">Meta AI</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Instagram</a></li>
          </ul>
          <ul class="flex flex-wrap gap-[15px] text-[#737373]">
            <li><a class="text-[12px] hover:underline" href="#">Đăng ký</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Đăng nhập</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Messenger</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Facebook</a></li>
            <li><a class="text-[12px] hover:underline" href="#">LiteVideo</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Địa điểm</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Trò chơi</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Marketplace</a></li>
            <li><a class="text-[12px] hover:underline" href="#">MetaPay</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Cửa hàng trên Meta</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Meta Quest </a></li>
            <li><a class="text-[12px] hover:underline" href="#">Meta AI</a></li>
            <li><a class="text-[12px] hover:underline" href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', (event) => {
      // Thực hiện validation khi mất focus
      const inputs = document.querySelectorAll('.input')
      inputs.forEach((input) => {
        input.addEventListener('blur', function (event) {
          if (!event.target.value.trim()) {
            // Nếu trường đang trống hoặc chỉ có khoảng trắng
            event.target.classList.add('border-red-500')
            // event.target.nextElementSibling.classList.remove('hidden'); // Hiển thị thông báo lỗi
          }
        })

        input.addEventListener('input', function (event) {
          if (event.target.value.trim()) {
            // Khi bắt đầu nhập, ẩn thông báo lỗi và bỏ viền đỏ
            event.target.classList.remove('border-red-500')
            //     event.target.nextElementSibling.classList.add('hidden'); // Ẩn thông báo lỗi
          }
        })
      })
    })

    document.getElementById('registerButton').addEventListener('click', function (event) {
      const formElements = document.querySelectorAll('#register .input, #register select')
      let isFormValid = true

      formElements.forEach((el) => {
        if (!el.value.trim()) {
          el.classList.add('border-red-500')
          isFormValid = false
        } else {
          el.classList.remove('border-red-500')
        }
      })

      if (!isFormValid) {
        event.preventDefault()
      }
    })
    document.addEventListener('DOMContentLoaded', function () {
      const registerDiv = document.getElementById('register')
      const createAccBtn = document.getElementById('creat-acc')
      const cancelBtn = document.getElementById('cancel')

      // Ban đầu ẩn phần đăng ký
      registerDiv.style.display = 'none'

      // Khi nhấn vào 'Tạo tài khoản mới', hiển thị phần đăng ký
      createAccBtn.addEventListener('click', function (event) {
        event.preventDefault() // Ngăn không cho trình duyệt thực hiện hành động mặc định
        registerDiv.style.display = 'block'
      })

      // Khi nhấn vào 'cancel', ẩn phần đăng ký
      cancelBtn.addEventListener('click', function (event) {
        event.preventDefault() // Ngăn không cho trình duyệt thực hiện hành động mặc định
        registerDiv.style.display = 'none'
      })
    })

    document.addEventListener('DOMContentLoaded', function () {
      const loginL1 = document.getElementById('Login-L1')
      const loginL2 = document.getElementById('Login-L2')

      // Các biến điều kiện ví dụ, bạn có thể thiết lập những biến này dựa trên logic thực tế của ứng dụng của bạn
      let showLoginL1 = false // Thiết lập này dựa trên một số điều kiện
      let showLoginL2 = !showLoginL1 // Tự động thiết lập ngược lại với Login-L1

      //close btn login L2
      const closeBtnLoginL2 = document.getElementById('Close-btn-login-L2')
      closeBtnLoginL2.addEventListener('click', function (event) {
        event.preventDefault()
        event.stopPropagation()
        loginL1.style.display = 'block'
        loginL2.style.display = 'none'
      })

      // Thiết lập tính hiển thị dựa trên các điều kiện
      loginL1.style.display = showLoginL1 ? 'block' : 'none'
      loginL2.style.display = showLoginL2 ? 'block' : 'none'
    })

    document.addEventListener('DOMContentLoaded', function () {
      const customGenderDiv = document.getElementById('custom-gender')
      const radioButtons = document.querySelectorAll('input[name="sex"]')

      // Ban đầu ẩn custom gender nếu không chọn Tùy chỉnh
      customGenderDiv.style.display = 'none'

      radioButtons.forEach((button) => {
        button.addEventListener('change', function () {
          if (document.getElementById('option').checked) {
            customGenderDiv.style.display = 'block'
          } else {
            customGenderDiv.style.display = 'none'
          }
        })
      })
    })

    document.addEventListener('DOMContentLoaded', function () {
      const SubLoginNormal = document.getElementById('Sub-login-normal')
      const CloseBtnLoginNormal = document.getElementById('Close-btn-sub-normal')
      const AddLoginNormal = document.getElementById('Add-login-normal')

      //Mặc đỉnh ẩn phần sub login normal
      SubLoginNormal.style.display = 'none'
      //nhấn vào thêm tài khoản (AddLoginNormal), hiển thị subloginnormal
      AddLoginNormal.addEventListener('click', function (event) {
        event.preventDefault()
        SubLoginNormal.style.display = 'block'
      })
      //nhấn vào closebtnloignsub -> ẩn subloginnormal
      CloseBtnLoginNormal.addEventListener('click', function () {
        event.preventDefault()
        SubLoginNormal.style.display = 'none'
      })
    })
    document.addEventListener('DOMContentLoaded', function () {
      const SubLoginAva = document.getElementById('Sub-login-ava')
      const CloseBtnLoginAva = document.getElementById('Close-btn-sub-ava')
      const AddLoginAva = document.getElementById('Add-login-ava')

      //Mặc đỉnh ẩn phần sub login
      SubLoginAva.style.display = 'none'
      //nhấn vào thêm tài khoản (AddLogin), hiển thị sublogin
      AddLoginAva.addEventListener('click', function (event) {
        event.preventDefault()
        SubLoginAva.style.display = 'block'
      })
      //nhấn vào closebtnloignsub -> ẩn subloginn
      CloseBtnLoginAva.addEventListener('click', function () {
        event.preventDefault()
        SubLoginAva.style.display = 'none'
      })
    })

    document.addEventListener('DOMContentLoaded', function () {
      const savePassNormal = document.getElementById('savepass-normal')
      const savePassAva = document.getElementById('savepass-ava')
      const checkboxSavePassNormal = document.getElementById('checkbox-savepass-normal')
      const checkboxSavePassAva = document.getElementById('checkbox-savepass-ava')

      savePassAva.addEventListener('change', function () {
        if (savePassAva.checked) {
          checkboxSavePassAva.classList.add('bg-blue-500', 'border-blue-500')
          checkboxSavePassAva.innerHTML = `<i class="fas fa-check text-white text-xs"></i>`
        } else {
          checkboxSavePassAva.classList.remove('bg-blue-500', 'border-blue-500')
          checkboxSavePassAva.innerHTML = ''
        }
      })
      savePassNormal.addEventListener('change', function () {
        if (savePassNormal.checked) {
          checkboxSavePassNormal.classList.add('bg-blue-500', 'border-blue-500')
          checkboxSavePassNormal.innerHTML = `<i class="fas fa-check text-white text-xs"></i>`
        } else {
          checkboxSavePassNormal.classList.remove('bg-blue-500', 'border-blue-500')
          checkboxSavePassNormal.innerHTML = ''
        }
      })
    })
  }
}
</script>
<style></style>
