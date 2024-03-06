import {IAuth} from "../interfaces/auth.interface";
import {IRes} from "../types";
import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class AuthService{
    register(user: IAuth) :IRes<IUser>{
        return axiosService.post(urls.auth.register, user)
    }
};

export const authService = new AuthService()