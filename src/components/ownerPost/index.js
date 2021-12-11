import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-router-modal/css/react-router-modal.css";
import {
    CardContainer,
    ImageContainer,
    PostWriter,
    LikesIcon,
    InfoContainer,
    EyeIcon,
    PostStatusContainer,
    CustomModal,
    FullImageContainer,
    Avatar,
    WriterContainer,
    CustomSpan,
    ImageContainerDiv,
} from "./style";
import { useHistory } from "react-router-dom";
import { likeBtn } from "../../actions/likeBtn";

function OwnerPost({ idx, title, image, liked, avatar, views, likes, writer }) {
    const history = useHistory();
    const handleHistoryPushIdx = () => {
        console.log(idx);
        history.push(`/display-details/${idx}`);
    };

    const handleHistoryPushNickname = () => {
        console.log(writer);
        history.push(`/my-page/${writer}`);
    };

    return (
        <CardContainer>
            <ImageContainerDiv>
                <ImageContainer
                    src={`${image}`}
                    onClick={handleHistoryPushIdx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
            </ImageContainerDiv>
            <InfoContainer>
                <WriterContainer onClick={handleHistoryPushNickname}>
                    <Avatar src={avatar} alt="" />
                    <PostWriter>{writer}</PostWriter>
                </WriterContainer>
                <PostStatusContainer>
                    <LikesIcon />
                    <CustomSpan>{likes}</CustomSpan>
                    <EyeIcon />
                    <CustomSpan>{views}</CustomSpan>
                </PostStatusContainer>
            </InfoContainer>
        </CardContainer>
    );
}

export default OwnerPost;
