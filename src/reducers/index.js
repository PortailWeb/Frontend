import authReducer from './authReducer'
import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import authUiReducer from "./authUiReducer";
import productsReducer from "./productsReducer";

const allReducers = combineReducers({
    authentification: authReducer,
    authentificationUI: authUiReducer,
    drawerMobileOpened: drawerReducer,
    products: productsReducer
});

export default allReducers;