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
    return (
        <CardContainer>
            <ImageContainerDiv>
                <ImageContainer
                    src={`${image}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
            </ImageContainerDiv>
            <InfoContainer>
                <Avatar src={avatar} alt="" />
                <PostWriter>{writer}</PostWriter>

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
