import axios from "axios"

export const http = axios.create({
    baseURL: 'https://affine.command.mephi.ru/api',
})

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
})

http.interceptors.request.use((config) => {
    if (config.data?.accessJwt) {
        localStorage.setItem('token', config.data.accessJwt)
    }
    return config
})
