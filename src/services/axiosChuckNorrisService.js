import axiosChuckNorrisConfig from "../utils/config/axios.chuckNorris.config";
import axios from "axios";

export function getRandomJoke() {
    //use the axios configured in axios.config
    return axiosChuckNorrisConfig.get('jokes/random', {
        validateStatus: function (status) {
            return status >= 200 && status < 300; // only if status code is between 200 and 300
        }
    }) // https://randomuser.me/api + /
    // axiosConfig.post('/login, body')
}



