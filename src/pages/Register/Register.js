import React, { useEffect } from 'react'

function Auth() {

    const { Kakao } = window;
    const redirectUri = "http://localhost:3000/redirect-register"
    const onClickToAuthorize = () =>{
        Kakao.Auth.authorize({
        redirectUri : redirectUri
        })
    }

    useEffect(()=>{
        onClickToAuthorize()
      })
  
    return (
        <div>
        </div>
    )
}

export default Auth