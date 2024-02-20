import React, {FC} from 'react';
import {Users} from "../components/Users";
import {Outlet} from "react-router-dom";

const UsersPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export {UsersPage};