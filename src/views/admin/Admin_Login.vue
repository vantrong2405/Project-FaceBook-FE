<template>
  <section class="h-screen bg-white">
    <div class="container h-full px-6 py-24">
      <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="w-full"
            alt="Phone image"
          />
        </div>

        <div class="border-3 border-black p-4 md:w-5/12 lg:ms-6 lg:w-5/12">
          <div>
            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                type="text"
                class="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput3"
                placeholder="Email address"
                v-model="account"
              />
            </div>

            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                type="password"
                class="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput33"
                placeholder="Password"
                v-model="pass"
              />
            </div>

            <div class="mb-6 flex items-center justify-between">
              <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <input
                  class="border-secondary-500 before:shadow-checkbox checked:border-primary checked:bg-primary checked:focus:before:shadow-checkbox dark:checked:border-primary dark:checked:bg-primary relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400"
                  type="checkbox"
                  value=""
                  id="exampleCheck3"
                  checked
                />
                <label class="inline-block ps-[0.15rem] hover:cursor-pointer" for="exampleCheck3"> Remember me </label>
              </div>

              <a href="#!" class="text-primary dark:text-primary-400 focus:outline-none">Forgot password?</a>
            </div>

            <button
              @click="login()"
              class="bg-primary shadow-primary-3 hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 active:bg-primary-600 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:shadow-black/30"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Sign in
            </button>

            <div
              class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500"
            >
              <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
            </div>
            <a
              class="bg-primary shadow-primary-3 hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 active:bg-primary-600 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mb-3 flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:shadow-black/30"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <span class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  />
                </svg>
              </span>
              Continue with Facebook
            </a>
            <a
              class="bg-info shadow-info-3 hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 active:bg-info-600 active:shadow-info-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mb-3 flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:shadow-black/30"
              style="background-color: #55acee"
              href="#!"
              role="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <!-- X -->
              <span class="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </span>
              Continue with X
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import "vue-toast-notification/dist/theme-sugar.css"
import apiAuth from "@/apis/auth.api"
import { clearLS, setAccessTokenToLS, setRefreshTokenToLS } from "@/utils/auth"
export default {
  async mounted() {
    this.checkToken()
  },
  data() {
    return {
      email: "",
      password: "",
      comfirm_password: "",
      date_of_birth: "",
      firstName: "",
      lastName: "",
      account: "",
      pass: ""
    }
  },
  methods: {
    async login() {
      const objectLogin = {
        email: this.account,
        password: this.pass
      }

      try {
        apiAuth.loginAccount(objectLogin).then((res) => {
          if (res.status === 200) {
            setAccessTokenToLS(res.data.result.access_token)
            setRefreshTokenToLS(res.data.result.refresh_token)
            const isAuthorized = this.checkToken()
            if (isAuthorized) {
              this.$toast.success(res.data.message, {
                position: "top-right"
              })
              this.$router.push("/admin/post")
            } else {
              this.$toast.success("Login failure", {
                position: "top-right"
              })
              throw new error("Unauthorized role")
            }
          }
        })
      } catch (errors) {
        this.$toast.success("Đăng nhập thất bại", {
          position: "top-right"
        })
      }
    },
    async checkToken() {
      try {
        apiAuth.checkToken().then((res) => {
          if (res.status === 200) {
            if (res.data.result.role == 1) {
              this.$router.push("/admin/post")
              return true
            } else {
              clearLS()
              throw new Error("Unauthorized role")
            }
          }
        })
      } catch (error) {
        return false
      }
    }
  }
}
</script>
