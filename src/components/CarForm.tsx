import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";

interface IProps{
    carForUpdate: ICar;
    carId: number
};


const CarForm: FC<IProps> = ({carId, carForUpdate}) => {
    const {reset, handleSubmit, register, formState:{errors, isValid}, setValue} = useForm <ICar>();
    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save:SubmitHandler<ICar> =async (car) => {
        await carService.create(car)
        reset()
    };
    const update: SubmitHandler<ICar> =async (car, id:number) => {
        if (carId){
            await carService.update(carId, car)
            reset()
        }
    };
    return (
        <form onSubmit={handleSubmit(carForUpdate? () => update(carForUpdate):save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};