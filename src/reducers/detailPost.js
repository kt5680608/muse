import { DETAIL_POST } from '../constants/actionTypes'
export const detailPost = (state = { title: null, image: null, hashTag:[]}, action) => {
    switch(action.type) {
        case DETAIL_POST:
            const titleData = action.payload.title;
            const imageData = action.payload.body_image.replaceAll('"', '')
            return { ...state, title: titleData, image: imageData, hashTag:[action.payload.hashtags]}
        default:
            return {...state, title: null, image: null, hashTag: null};
    }
}