import ActionTypes from  '../constants/auth.constants';

const INITIAL_STATE = {
    user: {},
    email: '',
    loginError: '',
    signupError: '',
    logoutError: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.SIGNUP_SUCCESS:
            return({
                ...state,
                user: action.payload
            })
        
        case ActionTypes.SIGNUP_FAILED:
            return({
                ...state,
                signupError: action.payload
            })

        case ActionTypes.SIGNIN_SUCCESS:
            return ({
                ...state,
                user: action.payload
            })

        case ActionTypes.SIGNIN_FAILED:
            return({
                ...state,
                loginError: action.payload
            })

        case ActionTypes.SIGNOUT_SUCCESS:
            return ({
                ...state,
                user: action.payload
            })

        case ActionTypes.SIGNOUT_FAILED:
            return({
                ...state,
                logoutError: action.payload
            })

        default:
            return state
    }
}