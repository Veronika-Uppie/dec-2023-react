import axios from "axios";
import {baseURL} from "../components/configs/urls";
// import {baseURL} from "../components/configs/urls";
//
// const axiosService = axios.create({baseURL});
//
// export {
//     axiosService
// }

const axiosService = axios.create({baseURL});

export {
    axiosService
}