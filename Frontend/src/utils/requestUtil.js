const Cookies = require('js-cookie');

export function getConfig() {
    return {
        headers: {
            auth_token: Cookies.get('token')
        }
    };
}
