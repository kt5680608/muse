import { AUTH, LOG_OUT } from '../constants/actionTypes'
import * as api from '../api/index'

export const kakaoLogin = ( authorizeCodeFromKakao ) => async(dispatch) => {
    try{
        const response = await api.kakaoLogin(authorizeCodeFromKakao);
        
        //console.log(response);
        dispatch({type: AUTH, payload: response});
    }
    catch(error){
        console.log('actions/auth 에러', error)
    }
}

export const logOut = () => async(dispatch) => {
    try{
        dispatch({type: LOG_OUT});
    }
    catch(error){
        console.log('actions/logOut 에러', error)
    }
}
