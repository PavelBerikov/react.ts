import React, {FC, useEffect, useState} from 'react';
import User from "../components/User";
import Users from "../components/Users";
import {useAppLocation} from "../hooks/router.hooks";
import {IUser} from "../interfaces/user.interface";
import UserDetails from "../components/UserDetails";
import {useParams} from "react-router-dom";
import {userService} from "../services/user.service";


const UserDetailsPage: FC = () => {
    const {id} = useParams();
    const {state} = useAppLocation<IUser>();
    const [user, setUser] = useState<IUser>(null);
    useEffect(() => {
        if (!state){
            userService.getById(id).then(value => value.data).then(value => setUser(user))
            return () => {
                console.log('Done!')
            }
        }else {
            setUser(state)
        }
    }, [id, state])
    return (
        <div>
            {user && <UserDetails user={state}/>}
        </div>
    );
};

export default UserDetailsPage;