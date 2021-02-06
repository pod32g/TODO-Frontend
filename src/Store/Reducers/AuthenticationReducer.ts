import { Authentication, AuthenticationActions, IAuthenticationState } from "../Types/Authentication";

const initialState: IAuthenticationState = {
    token: undefined,
    user: undefined
}

const authenticationReducer = (state: IAuthenticationState = initialState, actions: AuthenticationActions): IAuthenticationState => {
    switch (actions.type) {
        case Authentication.Login:
            return {
                ...state,
                token: actions.payload.token,
                user: actions.payload.user
            }
        case Authentication.Logout:
            return initialState
        default:
            return state
    }
}

export default authenticationReducer