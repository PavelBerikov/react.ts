import React, {FC} from 'react';
import {ICar} from "../interfaces/car.interface";
interface IProps{
    car: ICar;
    setCarId: React.Dispatch<React.SetStateAction<null|number>>;
    setCarForUpdate: React.Dispatch<React.SetStateAction<ICar|null>>
}
const Car:FC<IProps> = ({car, setCarId, setCarForUpdate}) => {
    const {id, year, brand, price} = car;
    const foo = () => {
        setCarForUpdate(car)
        setCarId(id)
    }
    return (
        <div>
            <div>{id} - {brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={foo}>Update</button>
            <hr/>
        </div>
    );
};

export {Car};