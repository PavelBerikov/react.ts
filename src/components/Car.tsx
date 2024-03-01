import React, {FC} from 'react';
import {ICar} from "../interfaces";

interface IProps{
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
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