import React, { useState } from "react";
import {
    FollowButton,
    FollowerNickname,
    UnFollowButton,
    FollowerModalContainer,
} from "./style";

function FollowerListLi(props) {
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState(true);

    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/account/follow/`, {
            method: "POST",
            headers: {
                Authorization: `${token.token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: props.nickname,
            }),
        }).then(() => {
            setIsLoginUserFollowed(!isLoginUserFollowed);
        });
    };
    return (
        <FollowerModalContainer>
            <FollowerNickname>{props.nickname}</FollowerNickname>
            {/* {isLoginUserFollowed == true ? (
                <FollowButton onClick={handleFollow}>팔로잉</FollowButton>
            ) : (
                <FollowButton onClick={handleFollow}>팔로우</FollowButton>
            )} */}
        </FollowerModalContainer>
    );
}

export default FollowerListLi;
