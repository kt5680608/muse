import React, {useState} from 'react'
import { FollowButton } from './style'

function FollowerListLi(props) {
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState(true);
    const followAction = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN
        const token = JSON.parse(localStorage.getItem('token'));  
        return fetch(`${API_DOMAIN}/accounts/follow/`,{
            method:'POST',
            headers:{
                'Authorization': `${token.token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                'follower' : props.nickname
            })
        })
        .then(() => {
            setIsLoginUserFollowed(!isLoginUserFollowed);
        })
      }
    return (
        <>
            <h1>{props.nickname}</h1>
            { isLoginUserFollowed == true ?
            <FollowButton onClick = {followAction}>팔로잉</FollowButton>
            :
            <FollowButton onClick = {followAction}>팔로우</FollowButton>
            }
        </>
    )
}

export default FollowerListLi
