import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carsActions} from "../redux";

import carImg from '../assets/images/carImg.jpg'

interface IProps{
    car: ICar
}
const Car: FC<IProps> = ({car}) => {

    const dispatch = useAppDispatch();
    const {id, brand, price, year, photo} = car;
    return (
        <div>
            <img src={photo || carImg} alt={brand}/>
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