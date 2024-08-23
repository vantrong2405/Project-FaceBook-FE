import http from "@/baseAPI/http"
const apiUploadFile = {
    upFile(formData) {
        return http.post('medias/upload-image', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export default apiUploadFile 