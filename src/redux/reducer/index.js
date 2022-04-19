import {combineReducers} from 'redux';
import authReducer from './authReducer';
import utilReducer from './utilReducer';

export default combinedReducer = combineReducers({
    auth: authReducer,
    util: utilReducer
});
