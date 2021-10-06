import { DISPLAY_POST } from '../constants/actionTypes'

export const displayPost = (state = { postList: null }, action)=>{
    switch(action.type){
        case DISPLAY_POST:
            return {...state, postList: action.payload}
        default:
            return action.payload;
    }
}