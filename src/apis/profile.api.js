import http from "@/baseAPI/http"
import { getAccessTokenFromLS } from "@/utils/auth"

const apiProfile = {
  getProfile(username) {
    return http.get(`/users/profile/${username}`)
  },
  updateProfile(body) {
    return http.patch("/users/update-me", body, {
      headers: { Authorization: `Bearer ${getAccessTokenFromLS()}` }
    })
  }
}

export default apiProfile
