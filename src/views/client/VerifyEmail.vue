<template>
  <div>
    <div class="col-lg-8 mx-auto mt-5">
      <div class="card">
        <div class="p-7 text-center">
          <div class="flex items-center justify-center gap-4 mb-4">
            <p class="text-3xl ml-3 font-semibold text-nowrap">Xác thực email thành công!</p>
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
import baseRequest from '@/baseAPI/baseRequest'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import { ArrowRight } from 'lucide-vue-next'
export default {
  components: {
    ArrowRight
  },
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.token = this.$route.query.token
    this.verifyEmail()
  },
  methods: {
    verifyEmail() {
      const obj = {
        email_verify_token: this.token
      }
      baseRequest
        .post('/users/verify-email', obj)
        .then((res) => {
          console.log(res)
          // setTimeout(() => {
          //     this.$router.push('/')
          // }, 2000)
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
  }
}
</script>
<style></style>
