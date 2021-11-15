import React, { useEffect } from 'react'

function Auth() {

    const { Kakao } = window;
    const MUSE_DOMAIN = process.env.REACT_APP_MUSE_DOMAIN;
    const redirectUri = `${MUSE_DOMAIN}/redirect-login`
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
