import { POST_UPLOAD } from '../constants/actionTypes'
import * as api from '../api/index'

export const uploadPost = (data) => async(dispatch) => {
    try{
        const response = await api.uploadPost(data);
        dispatch({type: POST_UPLOAD, payload: response});
    }
    catch(error){
        console.log("actions/post 에러", error);
    }
}   