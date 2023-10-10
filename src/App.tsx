import React from 'react';
import {Navigate, Route, Routes, UNSAFE_DataRouterStateContext} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;