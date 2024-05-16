<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                    alt="logo">
                Flowbite
            </a>
            <div
                class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2
                    class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Change Password
                </h2>
                <div class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :value="profile.email" disabled required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password</label>
                        <input type="password" name="password" id="password_old" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model='old_password' required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                            Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="" v-model="new_password">
                    </div>
                    <div>
                        <label for="confirm-password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                            password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password"
                            placeholder="••••••••" v-model="new_comfirmpassword"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required="">
                    </div>
                    <div class="text-end">
                        <button class="btn btn-primary" @click=changePassword()>Đổi mật khẩu</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";
import 'vue-toast-notification/dist/theme-sugar.css'
import baseRequest from '@/baseAPI/baseRequest'
export default {
    mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'))
    },
    data() {
        return {
            profile: {},
            old_password: '',
            new_password: '',
            new_comfirmpassword: ''
        }
    },
    methods: {
        changePassword() {
            const payLoad = {
                old_password: this.old_password,
                password: this.new_password,
                comfirmpassword: this.new_comfirmpassword
            };

            console.log(payLoad);

            axios.put('http://localhost:4000/users/change-password', payLoad, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then((res) => {
                console.log(res);
                this.$toast.success(res.data.message, {
                    position: 'bottom-right'
                });

            }).catch((errors) => {
                console.log(errors);
                this.$toast.error(errors.response.data.message, {
                    position: 'bottom-right'
                });
            });
        }

    }

}
</script>
<style></style>