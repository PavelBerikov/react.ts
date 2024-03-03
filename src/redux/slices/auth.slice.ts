import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IAuth} from "../../interfaces";
import {authService} from "../../services";

interface IState{

}

let initialState: IState = {

};
const register = createAsyncThunk<void, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.register(user)
        }catch (e){
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
};

export {
    authActions, authReducer
};