<template>
  <div>
    <div id="Login" class="bg-[#F0F2F5] h-screen">
      <div class="container max-w-[1100px] mx-auto flex justify-between px-[3%] py-[8%]">
        <div id="Login-L2" class="w-[55%]">
          <div id="Login-L1" class="flex items-center">
            <img width="80" src="../../assets/images/png/logoFB.png" alt="" class="mr-2" />
            <h2 class="text-2xl">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
            </h2>
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
                    <img class="rounded-t-lg h-[160px] w-[160px]"
                      src="data:image/jpeg;base64,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"
                      alt="" />
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
              <a @click="showResgister=true" id="creat-acc" href="#"
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
    <section id="Sub-login-normal" class="bg-black bg-opacity-[0.4] fixed bottom-0 right-0 left-0 top-0 z-40" hidden>
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
    <section id="Sub-login-ava" class="bg-black bg-opacity-[0.4] fixed bottom-0 right-0 left-0 top-0 z-40" hidden>
      <div class="w-full h-full">
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
    <section v-if="showResgister" id="register" class="bg-[#FFF] bg-opacity-80 fixed bottom-0 z-50 top-0 left-0 right-0" >
      <div class="w-full text-center py-[3%] ">
        <div class="inline-block text-left m-[20px] relative ">
          <div class="w-[430px] bg-white shadow-lg rounded-md">
            <i @click="showResgister=false" class="fa-solid fa-xmark absolute top-[10px] right-[12px] text-[23px] text-[gray]"></i>
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
                        class="border-[1px] text-[15px] pl-[5px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
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
                        class="border-[1px] pl-[5px] text-[15px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
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
                        class="border-[1px] pl-[5px] text-[15px] border-[#ccd0d5] text-[#1c1e21] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[7px]">
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
                      @click="showCustomGender=false" class="h-[36px] input w-[28%] leading-[36px] relative rounded-[4px] border-[1px] border-[#ccd0d5]">
                      <label class="pr-[28px] pl-[10px]" for="female">Nữ</label>
                      <input name="sex" id="female" class="absolute top-[10px] bottom-0 right-[10px]" type="radio" />
                    </span>
                    <span  @click="showCustomGender=false" class="h-[36px] w-[28%] leading-[36px] relative rounded-[4px] border-[1px] border-[#ccd0d5]">
                      <label class="pr-[28px] pl-[10px]" for="male">Nam</label>
                      <input name="sex" id="male" class="absolute top-[10px] bottom-0 right-[10px]" type="radio" />
                    </span>
                    <span  @click="showCustomGender=true" class="h-[36px] w-[38%] leading-[36px] relative rounded-[4px] border-[1px] border-[#ccd0d5]">
                      <label class="pr-[28px] pl-[10px]" for="option">Tùy chỉnh</label>
                      <input name="sex" id="option" class="absolute top-[10px] bottom-0 right-[10px]" type="radio" />
                    </span>
                  </div>
                  <div v-if="showCustomGender" id="custom-gender" class="mt-[10px]">
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
  data(){
    return {
      showCustomGender:false,
      showResgister:false,
    }
  }
}
</script>
<style></style>
