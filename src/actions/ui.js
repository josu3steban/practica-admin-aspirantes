import { types } from "../types/types"


export const uiStartLoading = () => {
    return {
        type: types.uiStartLoading,
        payload: true
    }
}

export const uiFinishLoading = () => {
    return {
        type: types.uiFinishLoading,
        payload: false
    }
}

export const uiSetError = ( error ) => {
    return {
        type: types.uiSetError,
        payload: error
    }
}

export const uiRemoveError = ( ) => {
    return {
        type: types.uiRemoveError,
        payload: ''
    }
}