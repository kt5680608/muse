import { UPDATE_USER, PROFILE_IMAGE_UPLOAD } from '../constants/actionTypes'
import * as api from '../api'

export const updateUser = ( formData )  => {
    try{
        api.updateUser(formData);
    }
    catch(error){
        console.log('actions/updateUser 에러', error)
    }
}

export const profileImageUpload = (data) => async(dispatch) => {
    try{
        await api.profileImageUpload(data);
        dispatch({type: PROFILE_IMAGE_UPLOAD});
    }
    catch(error){
        console.log(error)
    }
}