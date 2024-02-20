import {Dispatch, SetStateAction} from "react";

type IUseState<T> = Dispatch<SetStateAction<T>>;

export type {
    IUseState
}