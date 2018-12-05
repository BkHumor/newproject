import axios from 'axios'
const http = axios.create({
    baseURL: '/api',
    timeout: 5000,
    withCredentials: true,
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    transformRequest: function (data) {
        return JSON.stringify(data)
    },
    transformResponse: function (data) {
        return JSON.parse(data)
    }
})
export default http