import http from "@/baseAPI/http"

const apiFriend = {
  checkStatusFriend(username) {
    return http.get(`/users/check-friend/${username}`)
  },
  sendFriendRequest(body) {
    return http.post(`/users/send-friend-requests`, body)
  },
  deleteFriendRequest(friendId) {
    return http.delete(`/users/delete-friend-requests/${friendId}`)
  }
}

export default apiFriend
