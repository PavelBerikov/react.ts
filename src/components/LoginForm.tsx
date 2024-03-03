import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {authActions} from "../redux/slices/auth.slice";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState:{isValid}} = useForm<IAuth>();
    const login:SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login(user));
        if (requestStatus === 'fulfilled'){
            navigate('/cars')
        }
    };
    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'Username'}{...register('username', {required: true})}/>
            <input type="text" placeholder={'Password'}{...register('password', {required: true})}/>
            <button disabled={!isValid}>Login</button>
        </form>
    );
};

export {LoginForm};