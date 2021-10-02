import { DISPLAY_POST } from '../constants/actionTypes'

export const displayPost = (postList = [], action)=>{
    switch(action.type){
        case DISPLAY_POST:
            return [...postList, action.payload.postdata]
        default:
            return action.payload;
    }
}