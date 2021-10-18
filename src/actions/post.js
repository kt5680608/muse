import { POST_UPLOAD, DETAIL_POST } from '../constants/actionTypes'
import * as api from '../api/index'

export const getUploadPost = (data) => async() => {
    try{
        api.uploadPost(data);
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

export const getCommentPost = (postIdx, data) => async() => {
    try{
        await api.CommentUpload(postIdx, data);
    }
    catch(e){
        console.error(e);
    }
}

export const updatePost = (postIdx, formData) => async() => {
    try{
        await api.updatePost(postIdx, formData);
    }
    catch(e){
        console.error(e);
    }
}

export const deletePost = (postIdx) => async() => {
    try{
        await api.deletePost(postIdx);
    }
    catch(e){
        console.error(e);
    }
}