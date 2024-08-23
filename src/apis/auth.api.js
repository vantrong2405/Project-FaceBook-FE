import http from "@/baseAPI/http"
const apiAuth = {
  loginAccount(body) {
    return http.post("users/login", body)
  },
  registerAccount(body) {
    return http.post("users/register", body)
  },
  checkToken() {
    return http.get("users/me")
  },
  forgotPassword(body) {
    return http.post("users/forgot-password", body)
  },
  changePassword(body) {
    return http.post("users/reset-password", body)
  },
  logoutAcconunt(body) {
    return http.post('users/logout', body)
  }
}

export default apiAuth
