<template>
  <div>
    <div id="Login" class="bg-[#F0F2F5] h-screen">
      <div class="container max-w-[1100px] mx-auto flex justify-between px-[3%] py-[8%]">
        <div id="Login-L2" class="w-[55%]">
            <p class="text-[#0866FF] text-[62px] font-bold cursor-default leading-[50px] pt-[17%] pb-[3%]">facebook</p>
            <h2 class="text-[28px] text-black">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
            </h2>
        </div>
        <!-- form login -->
        <div class="w-[40%] pt-[30px]">
          <div class="shadow-lg bg-white px-[15px] p-[15px] rounded-[10px]">
            <form class="h-2/4">
              <input type="text" class="block w-full py-[12px] px-[16px] text-[16px] rounded-md mb-[10px]"
                placeholder="Email or hoặc số điện thoại" />
              <input type="text"
                class="block w-full py-[12px] px-[16px] text-[16px] rounded-md mt-[10px] mb-[20px]"
                placeholder="Mật khẩu" />
            
              <input @click.prevent="showLoginSub=true" type="submit"
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
    <!-- Sub-login-normal -->
    <section v-if="showLoginSub" id="Sub-login-normal" class="fixed bottom-0 right-0 left-0 top-0 z-40" >
      <div class="w-full h-[80%] py-[4%] bg-[#F0F2F5]">
        <div class="container w-[400px]  mx-auto ">
          <p class="text-[#0866FF] text-[45px] text-center font-bold pb-[10px] cursor-default">facebook</p>
          <div class="p-[16px] relative bg-white rounded-lg border-1 border-gray-50 shadow-md">
            <!-- Close-btn-sub -->
            <div @click="showLoginSub=false" id="Close-btn-sub-normal"
              class="h-[36px] w-[36px] bg-[#ebedf0] hover:bg-[#DADDE1] text-center float-end rounded-[50%]">
              <i class="fa-solid fa-xmark text-[24px] leading-[36px] text-[black] text-opacity-70"></i>
            </div>
            <div class="text-[20px] text-[black] text-center leading-[24px] pt-[6px] pb-[12px] pl-[36px]">
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
                    <a class="h-[12px] w-[12px] bg-[#606770] flex items-center justify-center rounded-full mt-[4px]" href="">
                      <i class="fa-solid fa-question text-[8px] text-white "></i>
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
                    <a class="h-[12px] w-[12px] bg-[#606770] flex items-center justify-center rounded-full mt-[3px]" href="">
                      <i class="fa-solid fa-question text-[8px] text-white "></i>
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
      showLoginSub:false,
    }
  }
}
</script>
<style></style>
