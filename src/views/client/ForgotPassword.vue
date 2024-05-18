<template>
    <div>
        <div class="mb-2">
            password : <input type="text" name="" id="" class="from-control" v-model='password'>
        </div>
        <div>
            retype password: <input type="text" name="" id="" class="from-control" v-model='retype_password'>
        </div>
        <div><button class="btn btn-primary" @click='changePassword()'>Đổi mật khẩu</button></div>
        {{ token }}
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