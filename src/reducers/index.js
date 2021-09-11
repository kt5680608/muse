import { combineReducers } from 'redux';
import { authReducer } from './auth'
import updateUser from './updateUser'

export const reducers = combineReducers({
    authReducer, 
});