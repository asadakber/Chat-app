import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import chatReducer from './chat.reducers';

export default combineReducers({
    auth: authReducer,
    chat: chatReducer
})