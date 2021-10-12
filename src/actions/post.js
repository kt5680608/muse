import { POST_UPLOAD, DETAIL_POST } from '../constants/actionTypes'
import * as api from '../api/index'

export const getUploadPost = (data) => async() => {
    try{
        await api.uploadPost(data);
    }
    catch(e){
        console.log(e);
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