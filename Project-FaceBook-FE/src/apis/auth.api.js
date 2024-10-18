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
  resetPassword(body) {
    return http.post("users/reset-password", body)
  },
  changePassword(body) {
    return http.put("users/change-password", body)
  },
  logoutAcconunt(body) {
    return http.post("users/logout", body)
  },
  verifyEmail(body) {
    return http.post("users/verify-email", body)
  }
}

export default apiAuth
