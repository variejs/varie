export default {
    defaults: {
        guard: 'user'
    },
    user: {
        idPropertyName: 'id'
    },
    guards: {
        user: {
            driver: 'jwt',
            endpoints: {
                user: {
                    url: '/auth/me',
                    method: 'post',
                },
                login: {
                    url: '/auth/login',
                    method: 'post'
                },
                logout: {
                    url: '/auth/logout',
                    method: 'post'
                },
                register: {
                    url: '/auth/register',
                    method: 'post',
                    autoLogin: true
                }
            },
            headers: {},
            // Request
            tokenName: 'token',
            // Response
            accessTokenName: 'access_token',
            expiresAtName: 'expires_at',
            tokenType: 'bearer'
        },
        /*admin: {
            driver: 'jwt',
        }*/
    }
};