import { AUTH, LOG_OUT } from '../constants/actionTypes'
export const authReducer = (state = { authData: null}, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('token', JSON.stringify({...action?.payload}))
            const token = JSON.parse(localStorage.getItem('token'));
            console.log('로그인 완료')
            console.log(token.token);
            return { ...state, authData: true}
        case LOG_OUT:
            localStorage.clear();
            console.log('로그아웃 완료')
            return {...state, authData: false };
        default:
            if(localStorage.getItem('token') != null){
                return{...state, authData: true };
            }
            return state;
    }
}