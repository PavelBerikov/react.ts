import React, {FC} from 'react';
import {CarForm, Cars, Header} from "../components";
import {useAppSelector} from "../hooks";

const CarPage: FC = () => {
    const {errors} = useAppSelector(state => state.cars);

    return (
        <div>
            <CarForm/>
            {
                errors&& <div>
                    <h1>{errors.brand}</h1>
                    <h1>{errors.price}</h1>
                    <h1>{errors.year}</h1>
                    <h1>{errors.detail}</h1>
                </div>
            }
            <Cars/>
        </div>
    );
};

export {CarPage};