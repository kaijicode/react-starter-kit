class AuthService {
    constructor() {
    }

    fetch() {
        return new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                resolveFn({userId: '0', firstName: 'Tro', lastName: 'Lolo'});
            }, 1000);
        });
    }
}

export const authService = new AuthService();
