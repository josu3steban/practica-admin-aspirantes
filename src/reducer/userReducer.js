import { types } from "../types/types";


const initialState = {
    user: [],
    active: null //id del usuaario activo/sleccionado (para editar)
}

export const userReducer = ( state = initialState, action) => {

    switch( action.type ) {

        case types.userLoad:
            return {
                ...state,
                user: [ ...action.payload ]
            }

        case types.userAdd:
            return {
                ...state,
                user: [...state.user, action.payload]
            }

        case types.userUpdate:
            return {
                ...state,
                user: state.user.map( ( users ) => (

                    users.id === action.payload.id
                    ? action.payload
                    : users
                    
                ))
            }

        case types.userDelete:
            return {
                ...state,
                user: state.user.filter( users => users.id !== state.active ),
                active: null
            }

        case types.userSetActive:
            return {
                ...state,
                active: action.payload                
            }

        
        default:
            return state;
    }
};