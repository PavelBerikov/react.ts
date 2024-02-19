import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";

interface IProps{
    carForUpdate: ICar | null;
    carId: number | null
    setCarForUpdate: React.Dispatch<React.SetStateAction<ICar|null>>
};


const CarForm: FC<IProps> = ({carId, carForUpdate, setCarForUpdate}) => {
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
    const update: SubmitHandler<ICar> =async (car: ICar) => {
        if (carId){
            await carService.update(carId, car)
            setCarForUpdate(null)
            reset()

        }
    };
    const deleter: SubmitHandler<ICar> =async (id) => {
        if (carId != null) {
            await carService.delete(carId)
            setCarForUpdate(null)
            reset()
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate ? 'update' : 'save'}</button>
            </form>
            <form onSubmit={handleSubmit(deleter)}>
                <button disabled={!carForUpdate}>Delete</button>
            </form>
        </>
    );
};

export {CarForm};