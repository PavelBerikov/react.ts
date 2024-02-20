import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../interfaces/user.interface";
import {usersService} from "../services/users.service";
import {User} from "./User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => setUsers(value))
    })
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};