import React, {FC} from 'react';
import {ICar} from "../interfaces/car.interface";
interface IProps{
    car: ICar
}
const Car:FC<IProps> = ({car}) => {
    const {id, year, brand, price} = car;
    return (
        <div>
            <div>{id} - {brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <hr/>
        </div>
    );
};

export {Car};