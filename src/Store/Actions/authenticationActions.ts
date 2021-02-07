import { Dispatch } from "redux";
import RestService from "../../Services/RestService";
import { Authentication } from "../Types/Authentication";
import { Loading } from "../Types/Loading";
import { ErrorHandling } from "../Types/Error";

export function Login(username: string, password: string) {
    return async function (dispatch: Dispatch) {
        try {
            dispatch({
                type: Loading.StartLoading
            })
            const resp = await new RestService().POST('authentication/login', {
                username: username,
                password: password
            })

            dispatch({
                type: Authentication.Login,
                payload: {
                    token: resp.data.token,
                    user: resp.data.user
                }
            })

            localStorage.setItem('token', resp.data.token)
            localStorage.setItem('user', resp.data.user)

            dispatch({
                type: Loading.StopLoading
            })

        } catch (error) {
            dispatch({
                type: Loading.StopLoading
            })

            dispatch({
                type: ErrorHandling.ShowMessage,
                payload: {
                    message: error.response.data.error
                }
            })
        }
    }
}

export function SignUp(username: string, password: string, email: string) {
    return async function (dispatch: Dispatch) {
        try {
            dispatch({
                type: Loading.StartLoading
            })
            const resp = await new RestService().POST('authentication/signup', {
                username: username,
                password: password,
                email: email
            })

            dispatch({
                type: Authentication.Login,
                payload: {
                    token: resp.data.token,
                    user: resp.data.user
                }
            })

            localStorage.setItem('token', resp.data.token)
            localStorage.setItem('user', resp.data.user)

            dispatch({
                type: Loading.StopLoading
            })

        } catch (error) {
            dispatch({
                type: Loading.StopLoading
            })

            dispatch({
                type: ErrorHandling.ShowMessage,
                payload: {
                    message: error.response.data.error
                }
            })
        }
    }
}

export function Logout() {
    return async function (dispatch: Dispatch) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}