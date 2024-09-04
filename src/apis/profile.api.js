import http from "@/baseAPI/http"

const apiProfile = {
  getProfile(username) {
    return http.get(`/users/profile/${username}`)
  },
  updateProfile(body) {
    return http.patch("/users/update-me", body)
  }
}

export default apiProfile
