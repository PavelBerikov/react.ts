import {IRes} from "../types";
import {ICar, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";


class CarsService{
    getAll():IRes<IPagination<ICar>> {
        return axiosService.get(urls.cars)
    };
    create(car: ICar):IRes<ICar>{
        return axiosService.post(urls.cars, car)
    };
    updateById(id: number, car: ICar): IRes<ICar>{
        return axiosService.put(`${urls.cars}/${id}`, car)
    };
    deleteById(id:number): IRes<void>{
        return axiosService.delete(`${urls.cars}/${id}`)
    };
}

export const carsService = new CarsService()