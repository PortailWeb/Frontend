

const authReducer =(state = {idUser: null, token: null, username: null, error: null}, action) => {
    switch (action.type) {
        case "SIGNED_IN": {
            if (action.payload === null) return state;
            else return action.payload;
        }
        case "SIGN_OUT": {
            return {idUser: null, token: null, username: null, error: null};
        }
        default:
            {
                return state;
            }
    }
};
export default authReducer;