import { LIKE_BTN} from '../constants/actionTypes'

export const likeStatus = (state = { isLiked : false } , action)=>{
    switch(action.type){
        case LIKE_BTN:
                const liked = action.payload.is_liked
                console.log(liked)
            return {...state, isLiked: liked }
        default:
            return state;
    }
}