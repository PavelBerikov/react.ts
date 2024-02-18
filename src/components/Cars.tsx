import React, {useEffect, useState} from 'react';
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {Car} from "./Car";

const Cars = () => {
    const [cars, setCars]= useState<ICar[]>([]);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    })
    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export {Cars};