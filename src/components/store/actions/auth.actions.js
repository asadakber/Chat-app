import history from '../../../Router/history';
import ActionTypes from '../constants/auth.constants';
import { firebaseAuth, firebaseRef, firebaseStorage } from '../../../config/index';
import swal from 'sweetalert';



export const Signup = (user) => {
    return dispatch => {
        let { username, email, password, confirmPassword, type } = user
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).catch((error) => {
            swal({
                type: 'error',
                text: 'Something went wrong!',
                title: 'Oops...',
                buttons: "Ok!"
            })
            throw 'new one'
        })
        .then((result) => {
            let uid = firebaseAuth.currentUser.uid
            firebaseRef.ref(`/users/${uid}`).push(user)
            history.push('/')
            dispatch({
                type: ActionTypes.SIGNUP_SUCCESS,
                payload: result
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNUP_FAILED,
                payload: error
            })
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                buttons: "Ok!"
            })
        })
    }
}

export const Signin = (user) => {
    return dispatch => {
        let { email, password } = user
        firebaseAuth.signInWithEmailAndPassword(user.email, user.password).catch((error) => {
            swal({
                type: 'error',
                text: 'Something went wrong!',
                title: 'Oops...',
                buttons: "Ok!"
            })
            throw 'new one'
        })
        .then((result) => {
            history.push('/dashboard')
            dispatch({
                type: ActionTypes.SIGNIN_SUCCESS,
                payload: result
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNIN_FAILED,
                payload: error
            })
            swal({
                type: 'error',
                text: 'Something went wrong!',
                title: 'Oops...',
                buttons: "Ok!"
            })
        })
    }
}

export const Signout = () => {
    return dispatch => {
        firebaseAuth.signOut()
        .then(() => {
            history.push('/')
            dispatch({
                type: ActionTypes.SIGNOUT_SUCCESS
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNOUT_FAILED,
                payload: error
            })
            swal({
                type: 'error',
                text: 'Something went wrong!',
                title: 'Oops...',
                buttons: "Ok!"
            })
        })
    }
}