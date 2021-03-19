import {Types} from "../actions/users";

const INITIAL_STATE = {
    items: []
}

export  const UsersReducer = (action=INITIAL_STATE, state) => {
    switch (action.type) {
        case Types.GET_USERS_REQUEST:
            return {...state}
        case Types.GET_USERS_SUCCESS:
            return {items: action.payload.items}
        default: return state
    }
}
