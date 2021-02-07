import { combineReducers } from "redux";
import authenticationReducer from "./AuthenticationReducer";
import errorReducer from "./ErrorReducer";
import loadingReducer from "./LoadingReducer";
import todoReducer from "./TodoReducer";

export default combineReducers({
    todo: todoReducer,
    authentication: authenticationReducer,
    loading: loadingReducer,
    error: errorReducer
})