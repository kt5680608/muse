import React, { useState, useEffect } from "react";
import {
    UnFollowButton,
    FollowButton,
    FollowingModalContainer,
    FollowingNickname,
} from "./style";
import { useHistory } from "react-router-dom";
import { Box, Flex } from "gestalt";

function FollowingListLi(props) {
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState(true);
    const [submit, setSubmit] = useState(false);
    const history = useHistory();

    const handleHistoryPushNickname = () => {
        history.push(`/my-page/${props.nickname}`);
        window.location.reload();
    };

    useEffect(() => {
        console.log("팔로우 액션");
    }, [setIsLoginUserFollowed]);

    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/account/follow/`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: props.nickname,
            }),
        }).then(() => {
            console.log("완료");
            setIsLoginUserFollowed(!isLoginUserFollowed);
            setSubmit(!submit);
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
