import axios from "axios";
import {baseURL} from "../constans/urls";

let axiosService = axios.create({baseURL});

export {
    axiosService
}