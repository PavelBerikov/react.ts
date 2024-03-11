import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices";
import {authReducer} from "./slices/auth.slice";

const rootReducer = combineReducers({
    cars: carsReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState, AppStore, AppDispatch
};
export {
    setupStore
};
