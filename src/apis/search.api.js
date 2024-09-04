import http from "@/baseAPI/http"
const apiSearch = {
  searchUser() {
    return http.get("users/all-user")
  },
  
}

export default apiSearch
