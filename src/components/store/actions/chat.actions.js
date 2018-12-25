import ChatTypes from '../constants/chat.constants';
import { firebaseRef, firebaseAuth, firebaseStorage } from '../../../config/index';

export const AddChat = (message) => {
    return dispatch => {
        let { name } = message
        firebaseRef.ref(`/Message/`).push(message)
        .then((success) => {
            dispatch({
                type: ChatTypes.ADD_MESSAGE_SUCCESS,
                payload: message
            })
        })
        .catch((error) => {
            dispatch({
                type: ChatTypes.ADD_MESSAGE_FAILED,
                payload: error
            })
        })
        
    }
}

let message = [];
export const GetChat = () => {
    return dispatch => {
        const firebase = firebaseRef.ref(`/Message/`)
        firebase.on('value', snap =>{
            message = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                message.push(obj)
            }) 
            dispatch({
                type: ChatTypes.GET_MESSAGE_SUCCESS,
                payload: message
            })
        })
    }
}

let user = []
export const GetUsers = () => {
    return dispatch => {
        firebaseAuth.onAuthStateChanged((users) => {
            if(users) {
                const firebaseUsers = firebaseRef.ref(`/users/${users.uid}`)
                firebaseUsers.on('value', snap => {
                    user = []
                    snap.forEach(ev => {
                        let obj = ev.val();
                        obj.id = ev.key;
                        user.push(obj)
                    })
                    dispatch({
                        type: ChatTypes.GET_USERS_SUCCESS,
                        payload: user
                    })
                }) 
            }
        })
       
    }
}





