// External Imports
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';    // allows us to dispatch asynchronous actions.

// My Imports
import allReducers from './reducers';

const middleware = applyMiddleware(thunk);

// logger
const store = createStore(
    allReducers(),
    middleware
);

export default store;
