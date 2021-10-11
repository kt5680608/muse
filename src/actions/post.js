import { POST_UPLOAD, DETAIL_POST } from '../constants/actionTypes'
import * as api from '../api/index'

export const uploadPost = (data) => async() => {
    try{
        await api.uploadPost(data);
    }
    catch(error){
        console.log("actions/post 에러", error);
    }
}   

export const getDetailPost = (postIdxUrl) => async(dispatch) => {
    try{
        const response = await api.detailPost(postIdxUrl);
        dispatch({type: DETAIL_POST, payload: response})
    }
    catch(e){
        console.log(e);
    }
}