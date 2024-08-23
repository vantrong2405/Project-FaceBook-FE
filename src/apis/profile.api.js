import http from "@/baseAPI/http"

const apiProfile = {
    getProfile(username) {
        return http.get(`/users/profile/${username}`)
    },
}

export default apiProfile