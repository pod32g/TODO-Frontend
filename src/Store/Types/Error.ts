import ActionMap from "../../Util/ActionMap"

export enum ErrorHandling {
    ShowMessage = 'SHOW_MESSAGE',
    HideMessage = 'HIDE_MESSAGE'
}

export interface IErrorState {
    message: string,
    show: boolean
}

type ErrorPayload = {
    [ErrorHandling.ShowMessage]: {
        message: string
    },
    [ErrorHandling.HideMessage]: undefined
}

export type ErrorActions = ActionMap<ErrorPayload>[keyof ActionMap<ErrorPayload>]