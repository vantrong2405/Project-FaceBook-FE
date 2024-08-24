import http from "@/baseAPI/http"

const apiFriend = {
    checkStatusFriend(username) {
        return http.get(`/users/check-friend/${username}`)
    },
    sendFriendRequest(body) {
        return http.post(`/users/send-friend-request`, body)
    },
    deleteFriendRequest(friendId) {
        return http.delete(`/users/delete-friend-request/${friendId}`)
    }
}

export default apiFriend