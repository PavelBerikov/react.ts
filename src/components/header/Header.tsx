import React, {useEffect} from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";

const Header = () => {
    const {me} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!me && authService.getAccessToken()){
            dispatch(authActions.me())
        }
    }, [me])
    return (
        <div className={css.Header}>
            {
                me? <div>
                        <span>{me.username}</span>
                        <button>Logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }


        </div>
    );
};

export {Header};