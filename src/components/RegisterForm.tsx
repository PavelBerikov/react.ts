import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/auth.interface";
import {joiResolver} from "@hookform/resolvers/joi";
import {authValidator} from "../validators/auth.validator";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../redux";

const RegisterForm: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.auth);
    const {register, handleSubmit, formState:{isValid, errors}} = useForm<IAuth>({mode: "all", resolver: joiResolver(authValidator)});
    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled'){
            navigate('/login')
        }
    };
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}
            {error&& <div>{error.username[0]}</div>}

        </form>
    );
};

export {RegisterForm};