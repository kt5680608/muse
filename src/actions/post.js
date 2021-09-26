import { POST_UPLOAD } from '../constants/actionTypes'
import * as api from '../api/index'

export const uploadPost = (data) => async(dispatch) => {
    try{
        await api.uploadPost(data);
        dispatch({type: POST_UPLOAD});
    }
    catch(error){
        console.log("actions/post 에러", error);
    }
}   