import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {Car} from "./Car";

import {AppDispatch, carsActions} from "../redux";

const Cars: FC = () => {
    const dispatch = useAppDispatch();
    const {cars, trigger} = useAppSelector(state => state.cars);
    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [dispatch, trigger])
    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export {Cars};