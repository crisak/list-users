import { type as LOAD_USER } from "./../actions/loadUsers";

const defaultState = {
    users: []
};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case LOAD_USER: {
            return {
                ...state,
                users: payload
            };
        }

        default:
            return state;
    }
}

export default reducer;

export const getUsers = (state) => {
    return state.users.users;
};