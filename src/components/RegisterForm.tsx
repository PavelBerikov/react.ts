import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {authValidator} from "../validators/auth.validator";
import {IAuth} from "../interfaces";
import {authActions} from "../redux/slices/auth.slice";

const RegisterForm = () => {
    const navigate = useNavigate();
    const {error} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState: {isValid, errors}} = useForm<IAuth>({mode: "all", resolver: joiResolver(authValidator)});
    const regUser:SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled'){
            navigate('/login')
        }
    };
    return (
        <form onSubmit={handleSubmit(regUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}
            {error && <div>{error.username[0]}</div>}
        </form>
    );
};

export {RegisterForm};