import { LIKE_BTN } from '../constants/actionTypes'
import * as api from '../api/index'

export const likeBtn = (post_idx) => async(dispatch) => {
    try{
        const response = await api.liked(post_idx);
        console.log(response);
        dispatch({type: LIKE_BTN, payload: response});
    }
    catch(error){
        console.log("actions/likeBtn 에러", error);
    }
}   