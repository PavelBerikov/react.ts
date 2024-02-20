import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IRes} from "../types/axios.type";


const usersService = {
    getAll: ():IRes<IUser[]> => axiosService.get(urls.users),
    getById: (id: string): IRes<IUser> => axiosService.get(`${urls.users}/${id}`)
};

export {
    usersService
};