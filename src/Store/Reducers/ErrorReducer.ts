import { ErrorActions, ErrorHandling, IErrorState } from "../Types/Error";

const initialState: IErrorState = {
    message: '',
    show: false
}

const errorReducer = (state: IErrorState = initialState, actions: ErrorActions): IErrorState => {
    switch (actions.type) {
        case ErrorHandling.ShowMessage:
            return {
                message: actions.payload.message,
                show: true
            }
        case ErrorHandling.HideMessage:
            return {
                message: '',
                show: false
            }
        default: return state
    }
}

export default errorReducer