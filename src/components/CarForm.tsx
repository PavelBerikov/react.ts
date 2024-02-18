import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const CarForm = () => {
    const {reset, handleSubmit, register} = useForm <ICar>();
    const save:SubmitHandler<ICar> =async (car) => {
        await carService.create(car)
        reset()
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};