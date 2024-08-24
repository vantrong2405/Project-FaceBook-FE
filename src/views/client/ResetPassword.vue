<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <a href="#" class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="mr-2 h-10 w-10" src="/src/assets/images/logo.png" alt="logo" />
        <span class="text-3xl font-bold text-[#0866FF]">WE</span>
      </a>
      <div
        class="w-full rounded-lg bg-white p-6 shadow sm:max-w-md sm:p-8 md:mt-0 dark:border dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Đổi mật khẩu
        </h2>
        <div class="mt-4 space-y-4 md:space-y-5 lg:mt-5">
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email"
              class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              :value="profile.email" disabled required="" />
          </div>
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Nhập lại mật khẩu cũ</label>
            <input type="password" name="password" id="password_old" placeholder="••••••••"
              class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              v-model="old_password" required="" />
          </div>
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Nhập mật khẩu mới</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
              class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required="" v-model="new_password" />
          </div>
          <div>
            <label for="confirm-password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Confirm
              Nhập lại mật khẩu mới</label>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••"
              v-model="new_comfirmpassword"
              class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required="" v-on:keyup.enter="changePassword" />
          </div>
          <div class="">
            <button class="btn btn-danger ml-auto flex items-center gap-2" @click="changePassword"
              v-if="isChangePassWord == false">
              Đổi mật khẩu
              <LockKeyhole />
            </button>
            <div class="flex flex-col items-center">
              <router-link to="/home" v-if="isChangePassWord">
                <button class="btn btn-primary flex items-center gap-2">
                  <Home /> Chuyển đến trang home
                </button>
              </router-link>
              <button class="btn btn-danger my-2 flex items-center gap-2" @click="logOut" v-if="isChangePassWord">
                <logOut />
                Đăng xuất trên tất cả các thiết bị
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios"
import "vue-toast-notification/dist/theme-sugar.css"
import { LogOut, Home, LockKeyhole } from "lucide-vue-next"
import { getProfileFromLS } from "@/utils/auth";
export default {
  components: {
    LogOut,
    Home,
    LockKeyhole
  },
  mounted() {
    this.profile = getProfileFromLS()
  },
  data() {
    return {
      profile: {},
      old_password: "",
      new_password: "",
      new_comfirmpassword: "",
      isChangePassWord: false
    }
  },
  methods: {
    changePassword() {
      const payLoad = {
        old_password: this.old_password,
        password: this.new_password,
        comfirmpassword: this.new_comfirmpassword
      }
      axios
        .put("http://localhost:4000/users/change-password", payLoad, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then((res) => {
          console.log(res)
          this.isChangePassWord = true
          this.$toast.success(res.data.message, {
            position: "bottom-right"
          })
        })
        .catch((errors) => {
          console.log(errors)
          this.$toast.error(errors.response.data.message, {
            position: "bottom-right"
          })
        })
    },
    logOut() {
      try {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("profile")
        this.$router.push("/")
        this.$toast.success("Đăng xuất thành công", {
          position: "bottom-right"
        })
      } catch (error) {
        this.$toast.error("Đăng xuất không thành công", {
          position: "bottom-right"
        })
      }
    }
  }
}
</script>
<style></style>
