<template>
  <div>
    <div class="col-lg-8 mx-auto mt-5">
      <div class="card">
        <div class="p-7 text-center">
          <div class="mb-4 flex items-center justify-center gap-4">
            <p class="ml-3 text-nowrap text-3xl font-semibold">Xác thực email thành công!</p>
            <router-link to="/">
              <button class="btn btn-danger flex items-center">
                <ArrowRight />
                Chuyển đến trang login
              </button>
            </router-link>
          </div>
          <img
            src="https://www.kontentino.com/blog/wp-content/uploads/2022/05/Kontentino-blog_How-to-get-verified-on-facebook.png"
            class="rounded-lg"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "vue-toast-notification/dist/theme-sugar.css"
import { ArrowRight } from "lucide-vue-next"
import apiAuth from "@/apis/auth.api"
export default {
  components: {
    ArrowRight
  },
  data() {
    return {
      token: ""
    }
  },
  mounted() {
    this.token = this.$route.query.token
    this.verifyEmail()
  },
  methods: {
    verifyEmail() {
      const body = {
        email_verify_token: this.token
      }
      apiAuth.verifyEmail(body)
    }
  }
}
</script>
<style></style>
