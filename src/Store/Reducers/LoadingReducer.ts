import { ILoadingState, Loading, LoadingActions } from "../Types/Loading";

const initialState: ILoadingState = {
    loading: false
}

const loadingReducer = (state: ILoadingState = initialState, actions: LoadingActions): ILoadingState => {
    switch (actions.type) {
        case Loading.StartLoading:
            return {
                loading: true
            }
        case Loading.StopLoading:
            return {
                loading: false
            }
        default: return state
    }
}

export default loadingReducer