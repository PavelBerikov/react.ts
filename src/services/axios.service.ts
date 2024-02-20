import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants/urls";


const axiosService = axios.create({baseURL});

export {
    axiosService
};
