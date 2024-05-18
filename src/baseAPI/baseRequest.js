import axios from "axios";
const apiUrl = 'http://localhost:4000';

export default {
    get(url) {
        return axios.get(apiUrl + url);
    },
    post(url, data) {
        return axios.post(apiUrl + url, data);
    },
    post1(url, data, auth) {
        return axios.post(apiUrl + url, data, auth);
    },
    delete(url) {
        return axios.delete(apiUrl + url);
    },
    put(url, data) {
        return axios.put(apiUrl + url, data);
    },
}