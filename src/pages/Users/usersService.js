class UsersService {
    constructor() {
    }

    fetch() {
        return new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                resolveFn([
                    {userId: '0', firstName: 'Tro', lastName: 'Lolo'},
                    {userId: '1', firstName: 'John', lastName: 'Doe'},
                ]);
            }, 1000);
        });
    }
}

export const usersService = new UsersService();
