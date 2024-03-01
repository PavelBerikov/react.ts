import {IRes} from "../types";
import {ICar} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";


const carsService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id: number): IRes<void> => axiosService.delete(`${urls.cars}/${id}`)
};

export {
    carsService
}