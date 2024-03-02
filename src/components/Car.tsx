import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carsActions} from "../redux";

interface IProps{
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
    /*const {carForUpdate} = useAppSelector(state => state.cars);*/
    const dispatch = useAppDispatch();
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>{id} - {brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carsActions.deleter({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};