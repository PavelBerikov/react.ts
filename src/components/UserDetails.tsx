import React, {FC} from 'react';
import {IUser} from "../interfaces/user.interface";

interface IProps{
    user: IUser
};
const UserDetails: FC<IProps> = ({user}) => {
    const {username, email, name} = user;
    return (
        <div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export {UserDetails};