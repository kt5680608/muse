import { DETAIL_POST } from '../constants/actionTypes'
export const detailPost = (state = { title: null, image: null, hashTag: null}, action) => {
    switch(action.type) {
        case DETAIL_POST:
            const titleData = action.payload.title;
            const imageData = action.payload.body_image.replaceAll('"', '')
            const hashTagData = action.payload.hashtags
            console.log(hashTagData);
            return { ...state, title: titleData, image: imageData, hashTag: hashTagData}
        default:
            return state;
    }
}