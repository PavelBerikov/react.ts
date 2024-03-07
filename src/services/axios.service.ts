import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use(res => {
    const access = authService.getAccessToken();
    if (access){
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})
axiosService.interceptors.response.use(
    res => {
        return res
    },
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._isRefreshing){
            originalRequest._isRefreshing = true
            try {

            }catch (e) {

            }
        }
    }
)

export {
    axiosService
}