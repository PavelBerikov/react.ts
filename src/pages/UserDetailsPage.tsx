import React, {FC} from 'react';
import {useAppLocation} from "../hooks/router.hooks";
import {IUser} from "../interfaces/user.interface";
import {UserDetails} from "../components/UserDetails";

const UserDetailsPage: FC = () => {
    const {state} = useAppLocation<IUser>();
    return (
        <div>
            <UserDetails user={state}/>
        </div>
    );
};

export {UserDetailsPage};