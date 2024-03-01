import {ICar, IError} from "../../interfaces";
import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {carsService} from "../../services";
import {AxiosError} from "axios";

export interface IState{
    cars: ICar[];
    carForUpdate: ICar;
    trigger: boolean;
    errors: IError
};
const initialState: IState = {
    cars: [],
    errors: null,
    trigger: false,
    carForUpdate: null
};
const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const save = createAsyncThunk<void, {car: ICar}>(
    'carSlice/save',
    async ({car}, {rejectWithValue}) => {
        try {
            await carsService.create(car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(save.fulfilled, state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const {actions, reducer: carsReducer} = slice;
const carsActions = {
    ...actions,
    getAll,
    save
};

export {
    carsActions, carsReducer
};