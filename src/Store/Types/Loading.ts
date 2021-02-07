import ActionMap from "../../Util/ActionMap"

export enum Loading {
    StartLoading = 'START_LOADING',
    StopLoading = 'STOP_LOADING'
}

export interface ILoadingState {
    loading: boolean
}

type LoadingPayload = {
    [Loading.StartLoading]: undefined,
    [Loading.StopLoading]: undefined
}

export type LoadingActions = ActionMap<LoadingPayload>[keyof ActionMap<LoadingPayload>]