import ActionMap from "../../Util/ActionMap"

export enum Authentication {
    Login = 'LOGIN',
    Logout = 'LOGOUT'
}

export interface IAuthenticationState {
    token?: string
    user?: string
}

type AuthenticationPayload = {
    [Authentication.Login]: {
        user: string,
        token: string
    },
    [Authentication.Logout]: undefined
}

export type AuthenticationActions = ActionMap<AuthenticationPayload>[keyof ActionMap<AuthenticationPayload>]