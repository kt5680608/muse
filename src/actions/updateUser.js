import { UPDATE_USER } from '../constants/actionTypes'
import * as api from '../api'

export const updateUser = ( nickname ) => async(dispatch) => {
    try{
        const response = await api.nicknameUpdate(nickname);
        dispatch({type: UPDATE_USER, payload: response});
    }
    catch(error){
        console.log('actions/updateUser 에러', error)
    }
}