import React, { useState } from "react";
import {
    UnFollowButton,
    FollowButton,
    FollowingModalContainer,
    FollowingNickname,
} from "./style";
import { useHistory } from "react-router-dom";

function FollowingListLi(props) {
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState(true);
    const history = useHistory();

    const handleHistoryPushNickname = () => {
        history.push(`/my-page/${props.nickname}`);
        window.location.reload();
    };

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
        <FollowingModalContainer>
            <FollowingNickname onClick={handleHistoryPushNickname}>
                {props.nickname}
            </FollowingNickname>
            {isLoginUserFollowed == true ? (
                <UnFollowButton onClick={handleFollow}>
                    팔로잉 취소
                </UnFollowButton>
            ) : (
                <FollowButton onClick={handleFollow}>팔로우</FollowButton>
            )}
        </FollowingModalContainer>
    );
}

export default FollowingListLi;
