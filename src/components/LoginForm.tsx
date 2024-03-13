import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {authActions} from "../redux/slices/auth.slice";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {handleSubmit, register, formState:{isValid}} = useForm<IAuth>();
    const login:SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.login(user));
        if (requestStatus === 'fulfilled'){
            navigate('/cars')
        }
    };
    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>Login</button>
        </form>
    );
};

export {LoginForm};