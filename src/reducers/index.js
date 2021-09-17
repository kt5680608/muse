import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { updateUser } from './updateUser'
import { userInfo} from './userInfo'

export const reducers = combineReducers({
    authReducer, userInfo,
});