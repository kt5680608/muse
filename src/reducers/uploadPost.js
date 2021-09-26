import {POST_UPLOAD} from '../constants/actionTypes'

export const updateUser = (action)=>{
    switch(action.type){
        case POST_UPLOAD:
        return action.payload
    }        
}