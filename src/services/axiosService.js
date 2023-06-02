import axiosConfig from "../utils/config/axios.config";
import axios from "axios";

export function getRandomUser() {
    //use the axios configured in axios.config
    return axiosConfig.get('/', {
        validateStatus: function (status) {
            return status >= 200 && status < 300; // only if status code is between 200 and 300
        }
    }) // https://randomuser.me/api + /
    // axiosConfig.post('/login, body')
}



