import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices";

const rootReducer = combineReducers({
    cars: carsReducer
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
