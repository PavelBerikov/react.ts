import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppLocation} from "../hooks/router.hooks";
import {IUser} from "../interfaces/user.interface";
import {usersService} from "../services/users.service";
import {UserDetails} from "../components/UserDetails";

const UserDetailsPage = () => {
    const {id} = useParams();
    const {state} = useAppLocation<IUser>();
    const [user, setUser] = useState<IUser>(null);
    useEffect(() => {
        if (!state){
            usersService.getById(id).then(value => value.data).then(value => setUser(value))
        }else {
            setUser(state)
        }
    }, [id, state])
    return (
        <div>
            {
                user && <UserDetails user={user}/>
            }
        </div>
    );
};

export {UserDetailsPage};