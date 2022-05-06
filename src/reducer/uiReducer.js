import { types } from "../types/types";

const initialState = {
    isLoading: false,
    msgError: ''
}


export const uiReducer = ( state = initialState, action ) => {

    switch( action.type) {

        case types.uiStartLoading:
            return {
                ...state,
                isLoading: action.payload
            }
        
        case types.uiRemoveError:
            return {
                ...state,
                isLoading: action.payload
            }

        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: action.payload
            }

        default:
            return state;
    }
}