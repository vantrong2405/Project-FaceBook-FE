import http from "@/baseAPI/http";

const apiPost = {
    addPost(post) {
        return http.post('posts', post)
    },
    getPost(params) {
        return http.get('posts', params)
    },
    likePost(postId) {
        return http.post('likes', postId)
    },
    deleteLikePost(postId) {
        return http.delete(`/likes/post/${postId}`)
    },
    getCommentDetailPost(postId, params) {
        return http.get(`comments/${postId}/post`, params)
    },
    addCommentPost(body) {
        return http.post(`comments`, body)
    },
    deleteCommentPost(URL, body) {
        return http.delete(`comments/post/${URL}`, body)
    },
}

export default apiPost;