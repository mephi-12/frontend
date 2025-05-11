import axios from "axios"
import JSONBigInt from 'json-bigint'

export const http = axios.create({
    baseURL: '/api',
    transformResponse: [data => JSONBigInt({ useNativeBigInt: true }).parse(data)]
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
