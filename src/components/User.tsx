import React, {FC} from 'react';
import {IUser} from "../interfaces/user.interface";
import {useNavigate} from "react-router-dom";
interface IProps{
    user: IUser
}
const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const {id, name} = user;
    return (
        <div style={{display: "flex", margin: '10px'}}>
            <div>{id} - {name}</div>
            <button onClick={() => navigate(id+'', {state: {...user}})}
            style={{marginLeft: '10px'}}>Details</button>
        </div>
    );
};

export {User};