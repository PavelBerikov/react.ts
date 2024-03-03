import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {authValidator} from "../validators";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../redux/slices/auth.slice";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const {error} = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState:{errors, isValid}} = useForm<IAuth>({mode: 'all', resolver: joiResolver(authValidator)});
    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled'){
            navigate('/login')
        }
    };
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'UserName'} {...register('username')}/>
            <input type="text" placeholder={'Password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}
            {error&& <div>{error.username[0]}</div>}
        </form>
    );
};

export {RegisterForm};