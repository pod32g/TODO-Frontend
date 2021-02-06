import { combineReducers } from "redux";
import authenticationReducer from "./AuthenticationReducer";
import todoReducer from "./TodoReducer";

export default combineReducers({
    todo: todoReducer,
    authentication: authenticationReducer
})