import React, {FC, useEffect, useRef, useState} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carsActions} from "../redux";

import empty from '../assets/images/empty.jpg'
import {carsService} from "../services";

interface IProps{
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
    const [image, setImage] = useState(null);
    const fileInput = useRef<HTMLInputElement>();
    const dispatch = useAppDispatch();
    const {id, brand, price, year, photo} = car;

    const addPhoto =async ():Promise<void> => {
        const formData = new FormData();
        const file: Blob = fileInput.current.files[0];
        formData.append('photo', file)
        await carsService.addPhoto(id, formData)
        setImage(URL.createObjectURL(file))
    };
    return (
        <div>
            <img src={photo || image || empty} alt={brand}
                 style={{cursor: photo || image?'default':'pointer', width: '250px'}}
                 onClick={() => fileInput.current.click()}
            />
            <div>{id} - {brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carsActions.deleter({id}))}>Delete</button>
            <input type="file" accept={'image/jpeg, image/png'}
                   style={{display: 'none'}} ref={fileInput} disabled={!!photo || !!image}
                   onChange={addPhoto}
            />
            <hr/>
        </div>
    );
};

export {Car};