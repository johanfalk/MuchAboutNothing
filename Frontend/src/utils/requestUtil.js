import * as constants from '../utils/constants';
const Cookies = require('js-cookie');
const axios = require('axios');

export function getConfig() {
    return {
        headers: {
            auth_token: Cookies.get('token')
        }
    };
}

export function get(url) {
    return axios.get(constants.BASE_URL + url, this.getConfig());
}

export function post(url, data) {
    return axios.post(constants.BASE_URL + url, data, this.getConfig());
}

export function put(url, data) {
    return axios.put(constants.BASE_URL + url, data, this.getConfig());
}

export function deleteHttp(url) {
    return axios.delete(constants.BASE_URL + url, this.getConfig());
}