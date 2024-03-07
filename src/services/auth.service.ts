import {IAuth} from "../interfaces/auth.interface";
import {IRes} from "../types";
import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {ITokens} from "../interfaces";
import {AxiosResponse} from "axios";

class AuthService{
    private readonly accessKey = 'access'
    private readonly refreshKey = 'refresh'
    register(user: IAuth) :IRes<IUser>{
        return axiosService.post(urls.auth.register, user)
    }
    async login(user: IAuth): Promise<IUser>{
        const {data}:AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, user);
        this.setTokens(data)
        const {data: me}:AxiosResponse<IUser> = await this.me();
        return me
    }
    async refresh(): Promise<void>{
        const refreshToken = this.getRefreshToken();
        const {data}:AxiosResponse<ITokens> = await axiosService.post(urls.auth.refresh, {refresh: refreshToken});
        this.setTokens(data)
    }
    me():IRes<IUser>{
        return  axiosService.get(urls.auth.me)
    }
    private setTokens({refresh, access}: ITokens): void{
        localStorage.setItem(this.refreshKey, refresh)
        localStorage.setItem(this.accessKey, access)
    }
    getAccessToken():string{
        return localStorage.getItem(this.accessKey)
    }
    private getRefreshToken():string{
        return localStorage.getItem(this.refreshKey)
    }
    deleteToken():void{
        localStorage.removeItem(this.accessKey)
        localStorage.removeItem(this.refreshKey)
    }
};

export const authService = new AuthService()