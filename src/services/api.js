import axios from "axios";
import { getToken } from "./auth"
import { async } from "q";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/jambalaya/"
})

api.interceptors.request.use(async config => {
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export default api;