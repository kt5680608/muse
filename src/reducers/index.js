import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { userInfo } from './userInfo'
import { displayPost } from './displayPost'

export const reducers = combineReducers({
    authReducer, userInfo
});