const Cookies = require('js-cookie');
const requestUtil = require('../utils/requestUtil');

export async function login(username, password) {
    const response = await requestUtil.post('/UserService/login', { email: username, password: password });

    Cookies.set('token', response.data.access_token, { expires: 31 });
    Cookies.set('userId', response.data.user, { expires: 31 });
}

export async function register(username, password) {
    const response = await requestUtil.post('/UserService/register', { email: username, password: password });

    Cookies.set('token', response.data.access_token, { expires: 31 });
    Cookies.set('userId', response.data.user, { expires: 31 });
}

export async function verifyToken() {
    if (!Cookies.get('token')) {
        Cookies.remove('token');
        Cookies.remove('userId');
        return;
    }

    try {
        const response = await requestUtil.get('/UserService/token/validate?access_token=' + Cookies.get('token'));

        Cookies.set('token', response.data.access_token, { expires: 31 });
        Cookies.set('userId', response.data.user, { expires: 31 });
    } catch (error) {
        Cookies.remove('token');
        Cookies.remove('userId');
    }
}