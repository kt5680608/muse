import {UPDATE_USER} from '../constants/actionTypes'

export const updateUser = (action)=>{
    switch(action.type){
        case UPDATE_USER:
        return action.payload
    }        
}