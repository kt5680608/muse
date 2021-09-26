import { POST_UPLOAD } from '../constants/actionTypes'
import * as api from '../api/index'

export const uploadPost = (data) => async() => {
    try{
        await api.uploadPost(data);
    }
    catch(error){
        console.log("actions/post 에러", error);
    }
}   