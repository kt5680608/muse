import { DETAIL_POST } from '../constants/actionTypes'
export const detailPost = (state = { title: null, image: null, hashTag:null, bodyText: null}, action) => {
    switch(action.type) {
        case DETAIL_POST:
            const titleData = action.payload.title;
            const imageData = action.payload.image;
            const contentData = action.payload.content;
            return { ...state, title: titleData, image: imageData, hashTag:action.payload.hashtag, content: contentData, writer: action.payload.writer}
        default:
            return state;
    }
}