import React from 'react';
import {Outlet} from "react-router-dom";
import {Users} from "../components/Users";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export {UsersPage};