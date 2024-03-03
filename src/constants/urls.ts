const baseURL = 'http://owu.linkpc.net/carsAPI/v2';
const auth = '/auth'
const urls = {
    cars: '/cars',
    auth: {
        register: '/users',
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    }
};

export {
    baseURL, urls, auth
};