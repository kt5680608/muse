import { USER_INFO,USER_AVATAR } from '../constants/actionTypes'
import * as api from '../api'

export const userInfo = () => async(dispatch) => {
    try{
        const response = await api.userInfo();
        dispatch({type: USER_INFO, payload: response });
    }
    catch(error){
        console.log('actions/userInfo 에러', error)
    }
}
