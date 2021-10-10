import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { userInfo } from './userInfo'
import { likeStatus } from './likeStatus'
import { currentIdx } from './currentIdx'
export const reducers = combineReducers({
    authReducer, userInfo, likeStatus, currentIdx
});