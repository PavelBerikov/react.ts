import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/auth.interface";
import {useAppDispatch} from "../hooks";
import {authActions} from "../redux";
import {useNavigate} from "react-router-dom";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {handleSubmit, register, formState:{isValid}} = useForm<IAuth>();
    const login:SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login(user));
        if (requestStatus === 'fulfilled'){
            navigate('/cars')
        }
    };
    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username', {required: true})}/>
            <input type="text" placeholder={'password'} {...register('password', {required: true})}/>
            <button disabled={!isValid}>Login</button>
        </form>
    );
};

export {LoginForm};