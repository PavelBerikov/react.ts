import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {IErrorAuth} from "../../interfaces";
import {IUser} from "../../interfaces/user.interface";
import {IAuth} from "../../interfaces/auth.interface";
import {authService} from "../../services";
import {AxiosError} from "axios";

interface IState{
    error: IErrorAuth
}


const initialState: IState = {
    error: null
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
)

const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder.addMatcher(isFulfilled(), state => {
            state.error = null
        }).addMatcher(isRejectedWithValue(), (state, action) => {
            state.error = action.payload as IErrorAuth
        })
});

const {actions, reducer: authReducer} = slice;
const authActions = {
    ...actions,
    register
};
export {
    authActions, authReducer
}