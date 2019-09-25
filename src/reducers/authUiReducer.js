const authUiReducer = (state = {usernameFieldError:false, passwordFieldError:false}, action ) => {
    switch (action.type) {
        case "SUBMITED": {
            console.log('here in sign in UI');
            let {username,password} = action.payload;

            if (username && password) return {usernameFieldError:false, passwordFieldError:false};
            else {
                let passField = false;
                let userField = false;
                if (username === "" || username===undefined) userField = true;

                if (password === "" || password===undefined ) passField = true;
                return {usernameFieldError:userField, passwordFieldError:passField};
            }
        }
        case "TYPING_AUTH_FORM": {
            let copy = {};
            Object.assign(copy,state);
            if (action.payload.field === 'username') copy.usernameFieldError  = false;
            if (action.payload.field === 'password') copy.passwordFieldError  = false;
            return copy;
        }
        default:{
            return state;
        }
    }
};
export default authUiReducer;