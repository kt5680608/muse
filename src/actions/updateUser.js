import { UPDATE_USER, USER_INFO } from '../constants/actionTypes'
import * as api from '../api'

export const updateUser = ( nickname ) => async(dispatch) => {
    try{
        const response = await api.nicknameUpdate(nickname);
        //console.log(response)
        dispatch({type: UPDATE_USER, payload: response});
    }
    catch(error){
        console.log('actions/updateUser 에러', error)
    }
}

export const userInfo = () => async(dispatch) => {
    try{
        const response = await api.userInfo();
        dispatch({type: USER_INFO, payload: response });
    }
    catch(error){
        console.log('actions/userInfo 에러', error)
    }
}