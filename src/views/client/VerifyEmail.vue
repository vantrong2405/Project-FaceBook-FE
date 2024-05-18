<template>
    <div>
        Đã xác thực thành công
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
            token: '',
        }
    },
    mounted() {
        this.token = this.$route.query.token;
        this.verifyEmail()
    },
    methods: {
        verifyEmail() {
            const obj = {
                email_verify_token: this.token
            }
            baseRequest.post('/users/verify-email', obj)
                .then((res) => {
                    console.log(res);
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 2000)
                })
                .catch((errors) => {
                    console.log(errors);
                })
        },
    }
}
</script>
<style>

</style>
