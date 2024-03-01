import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carsActions} from "../redux";

const CarForm: FC = () => {
    const dispatch = useAppDispatch();
    const {handleSubmit, reset, register} = useForm<ICar>();
    const save: SubmitHandler<ICar> = (car) => {
        dispatch(carsActions.save({car}))
        reset()
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};