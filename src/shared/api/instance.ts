import axios from "axios"

export const http = axios.create({
    baseURL: '/api',
})

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
})

http.interceptors.response.use((config) => {
    if (config.data?.accessJwt) {
        localStorage.setItem('token', config.data.accessJwt)
    }
    return config
})
