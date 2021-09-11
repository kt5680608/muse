import {UPDATE_USER} from '../constants/actionTypes'

export default(nickname,action)=>{
    switch(action.type){
        case UPDATE_USER:
        return action.payload.nickname
    }
}