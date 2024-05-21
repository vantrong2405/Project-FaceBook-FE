<template>
    <div>
        <div class="col-12 col-lg-10 mx-auto mt-5">
            <div class="card">
                <div class="row g-0">
                    <div class="col-lg-5 border-end">
                        <div class="card-body">
                            <div class="p-5">
                                <p class="text-4xl ml-7 font-semibold">Lấy lại mật khẩu</p>
                                <p class="text-muted mt-3 mb-5">Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu của bạn.
                                    Vui lòng nhập mật khẩu mới của bạn!</p>
                                <div class="mb-3 mt-3">
                                    <label class="form-label">Mật khẩu mới</label>
                                    <input type="text" class="form-control" placeholder="Nhập mật khẩu mới"
                                        v-model='password'>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Xác nhận mật khẩu</label>
                                    <input type="text" class="form-control" placeholder="Xác nhận mật khẩu"
                                        v-model='retype_password'>
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="button" class="btn btn-primary" @click='changePassword()'>Thay đổi mật
                                        khẩu</button> <a href="authentication-login.html" class="btn btn-light"><i
                                            class="bx bx-arrow-back mr-1"></i>Đăng nhập</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 w-50">
                        <img src="https://media.istockphoto.com/id/1306827906/vector/man-forgot-the-password-concept-of-forgotten-password-key-account-access-blocked-access.jpg?s=612x612&w=0&k=20&c=67nYr3ztbOn5uO6-mWBNCSw9mcHD9Z5M-QER-azGQ5w="
                            class="" alt="...">
                    </div>
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
export default {
    data() {
        return {
            password: '',
            retype_password: '',
            token: ''
        }
    },
    mounted() {
        this.token = this.$route.query.token;
    },
    methods: {
        changePassword() {
            const obj = {
                "password": this.password,
                "comfirm_password": this.retype_password,
                "forgot_password_token": this.token
            }

            baseRequest.post('/users/reset-password', obj)
                .then((res) => {
                    console.log(res);
                    this.$toast.success('Đổi thành công', {
                        position: 'bottom-right'
                    })
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 2000)
                })
                .catch((errors) => {
                    console.log(errors);
                })
        }
    }

}
</script>
<style></style>