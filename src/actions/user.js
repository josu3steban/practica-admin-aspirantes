import { types } from "../types/types"



export const userStartLoad = () => {

    return ( dispatch ) => {

    }
}

const userLoad = ( users ) => {

    return {

        type: types.userAdd,
        payload: [...users]
    }
}