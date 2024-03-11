import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth, IErrorAuth, IUser} from "../../interfaces";
import {extend} from "joi";
import {authService} from "../../services";
import {AxiosError} from "axios";

interface IState{
    error: IErrorAuth,
    me: IUser
}

let initialState: IState = {
    error: null,
    me: null
};
const register = createAsyncThunk<IUser, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.register(user)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);
const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{}
});

const {actions, reducer: authReducer} = slice;
const authActions = {
    ...actions,
    register
}

export {
    authActions, authReducer
};