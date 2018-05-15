
import Config from './Config';
import axios from 'axios';

export default class API {

    static getAll() {
        return axios.post(`${Config.URL}`, {});
        // return axios.post(`${Config.URL}/cctvs`, {});
        // return axios.post(`${Config.URL}/cctv_lists.json`, {});
    }

}