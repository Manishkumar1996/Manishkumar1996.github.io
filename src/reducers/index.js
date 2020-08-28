// External Imports
import {combineReducers} from 'redux';

// My Imports
import dashboard from './dashboard';


const reducers = () => combineReducers({
    dashboard,
});


export default reducers;
