import { UPDATE_USER, PROFILE_IMAGE_UPLOAD } from '../constants/actionTypes'
import * as api from '../api'

export const updateUser = ( nickname ) => async(dispatch) => {
    try{
        const response = await api.nicknameUpdate(nickname);
        //console.log(response)
        dispatch({type: UPDATE_USER, payload: response});

        return response;
    }
    catch(error){
        console.log('actions/updateUser 에러', error)
    }
}

export const profileImageUpload = (data) => async(dispatch) => {
    try{
        const response = await api.profileImageUpload(data);
        dispatch({type: PROFILE_IMAGE_UPLOAD, payload: response });
    }
    catch(error){
        console.log(error)
    }
}