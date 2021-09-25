import {USER_INFO, USER_AVATAR} from '../constants/actionTypes'

export const userInfo = (state = { infoState: null, userAvatar: null } , action)=>{
    switch(action.type){
        case USER_INFO:
            const nickname = action.payload.user.nickname
            const avatar = action.payload.user.avatar
        return {...state, infoState: nickname, userAvatar: avatar}
        default:
            return{...state, infoState: null, userAvatar: null};
    }
}