import React, {FC} from 'react';
import {CarForm, Cars} from "../components";
import {useAppSelector} from "../hooks";

const CarPage: FC = () => {
    const {errors} = useAppSelector(state => state.cars);

    return (
        <div>
            <CarForm/>
            {errors&& <h1>{errors.brand}<hr/>{errors.price}<hr/>{errors.year}</h1>}
            <Cars/>
        </div>
    );
};

export {CarPage};