import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import allReducers from "./reducers";
import {Provider} from "react-redux";

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(
    allReducers,
    composeEnhancer(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

ReactDOM.render(<Provider store={store} ><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
