import {IAuth, IUser} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class AuthService{
    register(user: IAuth):IRes<IUser>{
        return axiosService.post(urls.auth.register, user)
    }
}

export const authService = new AuthService()