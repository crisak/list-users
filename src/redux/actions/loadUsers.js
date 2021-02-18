
export const type = 'LOAD_USERS';

export const loadUsers = (users) => {
    return {
        type,
        payload: users
    }
};