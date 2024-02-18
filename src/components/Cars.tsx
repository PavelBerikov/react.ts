import React, {useEffect, useState} from 'react';
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars]= useState<ICar[]>([]);
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);
    const [carId, setCarId] = useState<number | null>(null);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    })
    return (
        <div>
            <CarForm/>
            <hr/>
            {
                cars.map(car => <Car setCarForUpdate={setCarForUpdate} setCarId={setCarId} car={car} key={car.id}/>)
            }
        </div>
    );
};

export {Cars};