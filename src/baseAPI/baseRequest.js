import axios from 'axios'
const apiUrl = 'http://localhost:4000'

export default {
  getHeader() {
    let token = window.localStorage.getItem('access_token')
    if (token == null) {
      return {}
    }
    return { Authorization: 'Bearer ' + token }
  },
  get(url) {
    return axios.get(apiUrl + url, { headers: this.getHeader() })
  },
  post(url, data) {
    return axios.post(apiUrl + url, data, { headers: this.getHeader() })
  },
  delete(url) {
    return axios.delete(apiUrl + url, { headers: this.getHeader() })
  },
  put(url, data) {
    return axios.put(apiUrl + url, data, { headers: this.getHeader() })
  }
}
