import { type as UPDATE_THEME } from "../actions/updateTheme";

const defaultState = {
    currentTheme: "light"
};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case UPDATE_THEME: {
            return {
                ...state,
                theme: payload
            };
        }

        default:
            return state;
    }
}

export default reducer;

export const getTheme = (state) => {
    return state.theme.theme;
};