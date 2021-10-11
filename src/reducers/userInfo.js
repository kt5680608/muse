import { USER_INFO } from '../constants/actionTypes'

export const userInfo = (state = { nickname: null, avatar: null } , action)=>{
    switch(action.type){
        case USER_INFO:
            const nicknameData = action.payload.user.nickname
            const avatarData = action.payload.user.avatar
            return {...state, nickname: nicknameData, avatar: avatarData}
        default:
            return state;
    }
}