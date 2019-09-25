
import AuthentificationService from '../services/authentificationService'
let authentificationService = new AuthentificationService();

export function SignIn(username,password) {

    return function (dispatch) {
        dispatch(submited(username,password));
        if (username && password) {

            authentificationService.authentificate(username, password).then(response=>{
                let {idUser, token, username} = response.data;
                dispatch(SignedIn({
                    idUser: idUser,
                    token: token,
                    username: username,
                    error: null
                }))
            }, e=> {
                dispatch(SignedIn({
                    idUser: null,
                    token: null,
                    username: null,
                    error: e.response.data.message
                }));
            });
        } else dispatch(SignedIn(null))
    };

}

export function submited(username,password) {
    return {
        type:'SUBMITED',
        payload: {
            username:username,
            password:password
        }
    }
}

export function TypingAuthFields(fieldName) {
    return {
        type:'TYPING_AUTH_FORM',
        payload: {
            field: fieldName
        }
    }
}

export function SignedIn(data) {
    return {
        type:'SIGNED_IN',
        payload: data
    }
}
export function SignedOut() {
    return {
        type: 'SIGN_OUT'
    }
}