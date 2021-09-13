import { AUTH, LOG_OUT } from '../constants/actionTypes'
export const authReducer = (state = { authData: false }, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('token', JSON.stringify({...action?.payload}))
            console.log('로그인 완료')
            return { ...state, authData: true, loading: false, errors: null}
        case LOG_OUT:
            console.log('로그아웃 완료')
            localStorage.clear();
            return {...state, authData: false, loading : false, errors: null};
        default:
            if(localStorage.getItem('token') != null){
                return{...state, authData: true, loading: false, errors: null};
            }
            return state;
    }
}