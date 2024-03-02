import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carsActions} from "../redux";


const CarForm: FC = () => {
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const {handleSubmit, reset, register, setValue} = useForm<ICar>();
    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save: SubmitHandler<ICar> = (car) => {
        dispatch(carsActions.save({car}))
        reset()
    };
    const update: SubmitHandler<ICar> = (car, id) => {
        dispatch(carsActions.update({car, id: carForUpdate.id}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate? update: save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate? 'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};