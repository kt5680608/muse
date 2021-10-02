import { DISPLAY_POST } from '../constants/actionTypes'
import * as api from '../api'

export const displayPost = (page) => async(dispatch) => {
    try{
        const response = await api.displayPost(page);
        dispatch({type: DISPLAY_POST, payload: response });
    }
    catch(error){
        console.log('actions/displayPost 에러', error)
    }
}

