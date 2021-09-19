import {USER_INFO} from '../constants/actionTypes'

export const userInfo = (state = { infoState: null } , action)=>{
    switch(action.type){
        case USER_INFO:
            const nickname = action.payload.user.nickname
        return {...state, infoState: nickname}
        default:
            return{...state, infoState: null};
    }
}