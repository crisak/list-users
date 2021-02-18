import { createStore, combineReducers } from "redux";
import users from "./reducers/users";
import theme from "./reducers/theme";

const reducer = combineReducers({
    users,
    theme
});

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
