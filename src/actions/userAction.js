import { auth, googleProvider } from '../firebase';
import { GET_USER } from '../actionTypes';

export function getUser() {
    return dispatch => {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            })
        })
    }
}

export function googleLogin() {
    return dispatch => auth.signInWithPopup(googleProvider)
}

// export function twitterLogin() {
//     return dispatch => auth.signInWithPopup(twitterProvider)
// }

export function logout() {
    return dispatch => auth.signOut()
}