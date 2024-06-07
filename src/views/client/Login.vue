<!-- eslint-disable no-dupe-keys -->
<!-- eslint-disable no-undef -->
<template>
  <div>
    <div id="Login" class="bg-[#F0F2F5] h-screen">
      <div class="container max-w-[1100px] mx-auto flex justify-between px-[3%] py-[8%]">
        <div id="Login-L2" class="w-[55%]">
          <p class="text-[#0866FF] text-[62px] font-bold cursor-default leading-[50px] pt-[17%] pb-[3%]">
            WE
          </p>
          <h2 class="text-[28px] text-black">
            WE giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </h2>
        </div>
        <!-- form login -->
        <div class="w-[40%] pt-[30px]">
          <div class="shadow-lg bg-white px-[15px] p-[15px] rounded-[10px]">
            <form class="h-2/4">
              <input type="text" class="block w-full py-[12px] px-[16px] text-[16px] rounded-md mb-[10px] font-medium"
                placeholder="Email or hoặc số điện thoại" v-model="account" />
              <input type="password" class="block w-full py-[12px] px-[16px] text-[16px] rounded-md mt-[10px] mb-[20px]"
                placeholder="Mật khẩu" v-model="pass" v-on:keyup.enter="account && pass && login()" />

              <div class="btn btn-primary w-full" @click="login()">Đăng nhập</div>
            </form>
            <div class="text-center pt-[10px]" data-bs-toggle="modal" data-bs-target="#forgot-password">
              <a href="#" class="text-[#0866ff] text-[14px] hover:underline">Quên mật khẩu?</a>
            </div>
            <!-- start -->
            <!-- Modal -->
            <div class="modal fade" id="forgot-password" tabindex="-1" aria-labelledby="forgot-passwordLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body bg-white px-5">
                    <div class="flex justify-center w-full items-center my-6 mb-12">
                      <!-- <img src="/src/assets/images/logo.png" width="30%" alt="" class="text-center"> -->
                      <p class="text-[#0866FF] font-bold cursor-default leading-[50px] text-6xl">
                        WE
                      </p>
                    </div>
                    <div
                      class="text-justify bg-white p-2 border-blue-400 border-l-8 mb-4 border-r-2 border-t-2 border-b-2">
                      Vui lòng diền vào username hoặc email của bạn . Bạn sẽ nhận được một email với
                      hướng dẫn khôi phục mật khẩu.
                    </div>
                    <div
                      class="text-justify bg-white p-2 border-blue-400 border-l-8 mb-4 border-r-2 border-t-2 border-b-2">
                      <label for="" class="mb-2">Tên người dùng hoặc địa chỉ email</label>
                      <input type="text" name="" id=""
                        class="form-control border-1 border-black outline-none shadow-none"
                        placeholder="Nhập tên người dùng hoặc địa chỉ email" v-model="email_forgot_password"
                        v-on:keyup.enter="forgotPassword()" />
                    </div>
                    <div class="text-end">
                      <button type="button" class="btn btn-primary" v-on:click="forgotPassword()"
                        data-bs-dismiss="modal" aria-label="Close">
                        Gửi lại mật khẩu mới
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end -->
            <hr class="mb-[10px] pb-[20px] mt-[16px]" />
            <div class="text-center pb-[20px]">
              <a @click="showResgister = true" id="creat-acc" href="#"
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
    <!-- section Register -->
    <section v-if="showResgister" id="register"
      class="bg-[#FFF] bg-opacity-80 fixed bottom-0 z-50 top-0 left-0 right-0">
      <div class="w-full text-center py-[3%]">
        <div class="inline-block text-left m-[20px] relative">
          <div class="w-[430px] bg-white shadow-lg rounded-md">
            <i @click="showResgister = false"
              class="fa-solid fa-xmark absolute top-[10px] right-[12px] text-[23px] text-[gray] cursor-pointer hover:text-[#535252]"></i>
            <div class="py-[10px] px-[16px]">
              <h1 class="text-[32px] leading-[38px] font-bold">Đăng ký</h1>
              <p class="text-[#606770] text-[15px] pt-[2px]">Nhanh chóng và dễ dàng.</p>
            </div>
            <div class="p-[16px] border-t-[1px] border-[#ccd0d5]">
              <!-- form register -->
              <form class="w-full">
                <div class="flex justify-between gap-2 mb-[10px]">
                  <input type="text" class="form-control input border-[1px] border-[#ccd0d5]" placeholder="Họ"
                    v-model="firstName" />
                  <input type="text" class="form-control input border-[1px] border-[#ccd0d5]" placeholder="Tên "
                    v-model="lastName" />
                </div>
                <div class="mb-[10px]">
                  <input type="text" class="form-control input w-full border-[1px] border-[#ccd0d5]"
                    placeholder="Số di động hoặc email" v-model="email" />
                </div>
                <div class="mb-[15px]">
                  <input type="text" class="form-control input w-full border-[1px] border-[#ccd0d5]"
                    placeholder="Mật khẩu" v-model="password" />
                </div>
                <div class="mb-[15px]">
                  <input type="text" class="form-control input w-full border-[1px] border-[#ccd0d5]"
                    placeholder="Nhập lại mật khẩu " v-model="comfirm_password" />
                </div>
                <!-- ngày sinh -->
                <div class="mb-[15px]">
                  <div class="w-100%">
                    <input type="date" name="" id="" class="form-control" v-model="date_of_birth" />
                  </div>
                </div>
                <!-- giới tính -->
              </form>
              <div>
                <p class="my-[11px] text-[#777] text-[11px]">
                  Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên
                  WE.
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
                  class="inline-block cursor-pointer rounded-md bg-[#00a400] hover:bg-[#6DA160] h-[36px] w-[194px] leading-[36px]"
                  @click="register()">
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
            <li><a class="text-[12px] hover:underline" href="#">WE</a></li>
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
            <li><a class="text-[12px] hover:underline" href="#">WE</a></li>
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
            <li><a class="text-[12px] hover:underline" href="#">WE</a></li>
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
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import http from '@/baseAPI/http'
export default {
  mounted() {
    this.checkToken()
  },
  data() {
    return {
      showCustomGender: false,
      showResgister: false,
      showLoginSub: false,
      email: '',
      password: '',
      comfirm_password: '',
      date_of_birth: '',
      firstName: '',
      lastName: '',
      account: '',
      pass: '',
      email_forgot_password: ''
    }
  },
  methods: {
    register() {
      const objRegister = {
        email: this.email,
        password: this.password,
        comfirm_password: this.comfirm_password,
        date_of_birth: this.date_of_birth,
        name: this.firstName + ' ' + this.lastName,
        role: 0
      }
      axios
        .post('http://localhost:4000/users/register', objRegister)
        .then((res) => {
          this.$toast.success(res.data.message, {
            position: 'bottom-right'
          })
          this.showResgister = false
        })
        .catch((errors) => {
          const errorObject = errors.response.data.errors
          for (const fieldName in errorObject) {
            if (Object.prototype.hasOwnProperty.call(errorObject, fieldName)) {
              const errorMessage = errorObject[fieldName].msg
              if (errorMessage) {
                console.log(errorMessage)
                this.$toast.error(errorMessage, {
                  position: 'bottom-right'
                })
                return
              }
            }
          }
        })
    },
    async login() {
      const objectLogin = {
        email: this.account,
        password: this.pass
      }

      await axios
        .post('http://localhost:4000/users/login', objectLogin)
        .then((res) => {
          this.$toast.success(res.data.message, {
            position: 'bottom-right'
          })
          localStorage.setItem('access_token', res.data.result.access_token)
          localStorage.setItem('refresh_token', res.data.result.refresh_token)
          this.$router.push('/home')
        })
        .catch((errors) => {
          this.$toast.error('Đăng nhập không thành công', {
            position: 'bottom-right'
          })
        })
    },
    checkToken() {
      http.get('/users/me').then((res) => {
        if (res.status === 200) {
          console.log('check token')
          console.log(res)
          this.$router.push('/home')
        }
      })
    },
    forgotPassword() {
      if (this.email_forgot_password) {
        const obj = {
          email: this.email_forgot_password
        }
        http
          .post('/users/forgot-password', obj)
          .then((res) => {
            console.log(res)
          })
          .catch((errors) => {
            console.log(errors)
          })
        this.email_forgot_password = ''
      }
    }
  }
}
</script>
<style></style>
