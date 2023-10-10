import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Users from "../components/Users";

const UserPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export default UserPage;