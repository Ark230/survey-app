
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './root-reducer';
import thunkMiddleware from 'redux-thunk';
const middlewares = [logger, thunkMiddleware];


if(process.env.NODE_ENV == 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));