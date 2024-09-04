<template>
  <div>
    <div id="Login" class="h-screen bg-[#F0F2F5]">
      <div class="container mx-auto flex max-w-[1100px] justify-between px-[3%] py-[8%]">
        <div id="Login-L2" class="w-[55%]">
          <p class="cursor-default pb-[3%] pt-[17%] text-[62px] font-bold leading-[50px] text-[#0866FF]">WE</p>
          <h2 class="text-[28px] text-black">WE giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
        </div>
        <div class="w-[40%] pt-[30px]">
          <div class="rounded-[10px] bg-white p-[15px] px-[15px] shadow-lg">
            <form class="h-2/4">
              <input type="text" class="mb-[10px] block w-full rounded-md px-[16px] py-[12px] text-[16px] font-medium"
                placeholder="Email or hoặc số điện thoại" v-model="emailLogin" />
              <input type="password" class="mb-[20px] mt-[10px] block w-full rounded-md px-[16px] py-[12px] text-[16px]"
                placeholder="Mật khẩu" v-model="passwordLogin"
                v-on:keyup.enter="emailLogin && passwordLogin && login()" />

              <div class="btn btn-primary w-full" @click="login()">Đăng nhập</div>
            </form>
            <div class="pt-[10px] text-center" data-bs-toggle="modal" data-bs-target="#forgot-password">
              <a href="#" class="text-[14px] text-[#0866ff] hover:underline">Quên mật khẩu?</a>
            </div>
            <div class="modal fade" id="forgot-password" tabindex="-1" aria-labelledby="forgot-passwordLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body bg-white px-5">
                    <div class="my-6 mb-12 flex w-full items-center justify-center">
                      <p class="cursor-default text-6xl font-bold leading-[50px] text-[#0866FF]">WE</p>
                    </div>
                    <div
                      class="mb-4 border-b-2 border-l-8 border-r-2 border-t-2 border-blue-400 bg-white p-2 text-justify">
                      Vui lòng diền vào username hoặc email của bạn . Bạn sẽ nhận được một email với hướng dẫn khôi phục
                      mật khẩu.
                    </div>
                    <div
                      class="mb-4 border-b-2 border-l-8 border-r-2 border-t-2 border-blue-400 bg-white p-2 text-justify">
                      <label for="" class="mb-2">Tên người dùng hoặc địa chỉ email</label>
                      <input type="text" name="" id=""
                        class="form-control border-1 border-black shadow-none outline-none"
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
            <hr class="mb-[10px] mt-[16px] pb-[20px]" />
            <div class="pb-[20px] text-center">
              <a @click="showResgister = true" id="creat-acc" href="#"
                class="rounded-md bg-[#42b72a] px-[18px] py-[13px] text-[17px] text-lg font-[650] text-white hover:bg-[#36A420]">Tạo
                tài khoản mới
              </a>
            </div>
          </div>
          <div>
            <p class="mt-[20px] text-center text-[14px]">
              <a class="cursor-pointer font-bold hover:underline" href="#">Tạo Trang</a> dành cho người nổi tiếng,
              thương hiệu hoặc doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
    <section v-if="showResgister" id="register"
      class="fixed bottom-0 left-0 right-0 top-0 z-50 bg-[#FFF] bg-opacity-80">
      <div class="w-full py-[3%] text-center">
        <div class="relative m-[20px] inline-block text-left">
          <div class="w-[430px] rounded-md bg-white shadow-lg">
            <i @click="showResgister = false"
              class="fa-solid fa-xmark absolute right-[12px] top-[10px] cursor-pointer text-[23px] text-[gray] hover:text-[#535252]"></i>
            <div class="px-[16px] py-[10px]">
              <h1 class="text-[32px] font-bold leading-[38px]">Đăng ký</h1>
              <p class="pt-[2px] text-[15px] text-[#606770]">Nhanh chóng và dễ dàng.</p>
            </div>
            <div class="border-t-[1px] border-[#ccd0d5] p-[16px]">
              <form class="w-full">
                <div class="mb-[10px] flex justify-between gap-2">
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
                <div class="mb-[15px]">
                  <div class="w-100%">
                    <input type="date" name="" id="" class="form-control" v-model="date_of_birth" />
                  </div>
                </div>
              </form>
              <div>
                <p class="my-[11px] text-[11px] text-[#777]">
                  Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên WE.
                  <a class="cursor-pointer text-[#385898] hover:underline" href="#">Tìm hiểu thêm.</a>
                </p>
              </div>
              <div>
                <p class="my-[11px] text-[11px] text-[#777]">
                  Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                  <a class="cursor-pointer text-[#385898] hover:underline" href="#">Điều khoản</a>,
                  <a class="cursor-pointer text-[#385898] hover:underline" href="#">Chính sách quyền riêng tư </a>
                  và
                  <a class="cursor-pointer text-[#385898] hover:underline" href="">Chính sách cookie </a>của chúng tôi.
                  Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                </p>
              </div>
              <div class="w-full py-[10px] text-center">
                <div id="registerButton"
                  class="inline-block h-[36px] w-[194px] cursor-pointer rounded-md bg-[#00a400] leading-[36px] hover:bg-[#6DA160]"
                  @click="register()">
                  <input type="button" value="Đăng ký" class="cursor-pointer text-[18px] font-bold text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container px-[5%] py-[1%]">
        <div class="mx-auto w-[1100px]">
          <ul class="flex flex-wrap gap-[15px] pt-[8px] text-[#737373]">
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
          <hr class="mb-[5px] mt-[8px]" />
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
import "vue-toast-notification/dist/theme-sugar.css"
import apiAuth from "@/apis/auth.api"
import { getAccessTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from "@/utils/auth"
export default {
  mounted() {
    this.checkToken()
  },
  data() {
    return {
      showCustomGender: false,
      showResgister: false,
      showLoginSub: false,
      email: "",
      password: "",
      comfirm_password: "",
      date_of_birth: "",
      firstName: "",
      lastName: "",
      emailLogin: "",
      passwordLogin: "",
      email_forgot_password: ""
    }
  },
  methods: {
    register() {
      const body = {
        email: this.email,
        password: this.password,
        comfirm_password: this.comfirm_password,
        date_of_birth: this.date_of_birth,
        name: this.firstName + " " + this.lastName,
        role: 0
      }
    apiAuth.registerAccount(body).then((res) => {
        this.$toast.success(res.data.message, {
          position: "bottom-right"
        })
        this.showResgister = false
      })
    },
    login() {
      const body = {
        email: this.emailLogin,
        password: this.passwordLogin
      }
     apiAuth.loginAccount(body).then((res) => {
        this.$toast.success(res.data.message, {
          position: "bottom-right"
        })
        this.$router.push("/home")
        setAccessTokenToLS(res.data.result.access_token)
        setRefreshTokenToLS(res.data.result.refresh_token)
      })
    },
  async checkToken() {
  const token = getAccessTokenFromLS(); 
  if (!token) {
    this.$router.push('/');
    return;
  }
  try {
    const tokenResponse = await apiAuth.checkToken();
    setProfileToLS(tokenResponse.data.result);
    this.$router.push("/home"); 
  } catch (error) {
    this.$router.push('/lores gin');
  }
},

    forgotPassword() {
      if (this.email_forgot_password) {
        const body = {
          email: this.email_forgot_password
        }
      apiAuth.forgotPassword(body).then((res) => {
          this.$toast.success(res.data.message, {
            position: "bottom-right"
          })
          this.email_forgot_password = ""
        })
      }
    }
  }
}
</script>
