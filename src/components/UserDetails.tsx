import React, {FC} from 'react';
import {IUser} from "../interfaces/user.interface";
interface IProps{
    user: IUser
}
const UserDetails: FC<IProps> = ({user}) => {
    const {name, email, username, id} = user;
    return (
        <div>
            <div>id - {id}</div>
            <div>Name - {name}</div>
            <div>Email - {email}</div>
            <div>UserName - {username}</div>
        </div>
    );
};

export {UserDetails};