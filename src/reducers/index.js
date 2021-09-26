import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { userInfo} from './userInfo'

export const reducers = combineReducers({
    authReducer, userInfo,
});