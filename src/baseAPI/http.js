import { getAccessTokenFromLS } from "@/utils/auth";
import { HttpStatusCode } from "@/views/client/constant/httpStatusCode";
import axios from "axios";
import { createApp } from "vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const app = createApp({});
app.use(ToastPlugin);
const toast = app.config.globalProperties.$toast;

class Http {
  constructor() {
    this.updateToken();
    this.accessToken = getAccessTokenFromLS();
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        this.updateToken();
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      (error) => {
        console.log(error);
        if (error?.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const message = error.response?.data?.message || error.message;
          console.log(message);
          if (toast) {
            toast.error(message, {
              position: "bottom-right",
            });
          }
        }
        return Promise.reject(error);
      }
    );
  }
  updateToken() {
    this.accessToken = getAccessTokenFromLS(); 
  }
}


const http = new Http().instance;
export default http;
