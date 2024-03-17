import {IAuth, ICar, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {AxiosResponse} from "axios";

class AuthService{
    private readonly accessToken = 'access'
    private readonly refreshToken = 'refresh'
    register(user: IAuth):IRes<IUser>{
        return axiosService.post(urls.auth.register, user)
    }
    async login(user: IAuth):Promise<IUser>{
        const {data}:AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, user);
        this.setToken(data)
        const {data:me}:AxiosResponse<IUser> = await this.me();
        return me
    }
    async refresh(): Promise<void>{
        const refreshToken = this.getRefreshToken()
        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.auth.refresh, {refresh: refreshToken});
        return this.setToken(data)
    }
    me():IRes<IUser>{
        return  axiosService.get(urls.auth.me)
    }
    private setToken({access, refresh}:ITokens): void{
        localStorage.setItem(this.accessToken, access)
        localStorage.setItem(this.refreshToken, refresh)
    }
    getAccessToken():string{
        return localStorage.getItem(this.accessToken)
    }
    private getRefreshToken(): string{
        return localStorage.getItem(this.refreshToken)
    }
    deleteTokens(): void{
        localStorage.removeItem(this.refreshToken)
        localStorage.removeItem(this.accessToken)
    }

}

export const authService = new AuthService()