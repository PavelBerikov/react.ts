import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {authValidator} from "../validators";

const RegisterForm = () => {
    const {register, handleSubmit, formState:{errors, isValid}} = useForm<IAuth>({mode: 'all', resolver: joiResolver(authValidator)});
    const registerUser: SubmitHandler<IAuth> = (user) => {

    };
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'UserName'} {...register('username')}/>
            <input type="text" placeholder={'Password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};