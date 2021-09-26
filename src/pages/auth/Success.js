import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { kakaoLogin } from '../../actions/auth'
import { userInfo } from '../../actions/userInfo'
import { useHistory } from 'react-router-dom'

function Success() {
    const authorizeCodeFromKakao = window.location.search.split("=")[1]
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(()=>{
        // 카카오 로그인 페이지 -> 로그인 -> 코드 발급 -> 코드 있으면 백엔드 보내고 -> 코드가 없어야돼
        if(authorizeCodeFromKakao !== null){
            console.log('authorizeCodeFromKakao TRUE')
            try{
                dispatch(kakaoLogin(authorizeCodeFromKakao));
                console.log('로그인완료')
                history.push('/');
            }
            catch(e){
                console.error(e);
                console.log('error in Auth component')
            }
        }
    }, [])
    return (
        <div>
        </div>
    )
}

export default Success
