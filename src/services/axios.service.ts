import axios, {AxiosError} from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL});
let isRefreshing = false
axiosService.interceptors.request.use(res => {
    const access = authService.getAccessToken()
    if (access){
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})
axiosService.interceptors.response.use(
    res => {
        return res
    },
    async (error: AxiosError) => {
        const originalRequest = error.config
        if (error.response.status === 401){
            if (!isRefreshing){
                try {
                    await authService
                }catch (e) {

                }
            }
        }
    }
)


export {
    axiosService
}