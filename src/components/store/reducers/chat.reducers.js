import ChatTypes from '../constants/chat.constants';

const INITIAL_STATE = {
    message: [],
    user: [],
    ImageError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ChatTypes.GET_MESSAGE_SUCCESS:
            return({
                ...state,
                message: action.payload
            })

        case ChatTypes.GET_USERS_SUCCESS:
            return({
                ...state,
                user: action.payload
            })

        default:
            return state
    }
}