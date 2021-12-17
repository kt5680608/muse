import React from "react";
import "react-router-modal/css/react-router-modal.css";
import {
    CardContainer,
    ImageContainer,
    PostWriter,
    LikesIcon,
    InfoContainer,
    EyeIcon,
    PostStatusContainer,
    FourSquareCardContainer,
    CustomModal,
    FullImageContainer,
    Avatar,
    WriterContainer,
    CustomSpan,
    ImageContainerDiv,
} from "./style";
import { useHistory } from "react-router-dom";
import { likeBtn } from "../../actions/likeBtn";
import {
    Box,
    Button,
    Checkbox,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
    Image,
} from "gestalt";

function PreviewCard({
    idx,
    title,
    image,
    liked,
    avatar,
    views,
    likes,
    writer,
    rect,
}) {
    const history = useHistory();
    const handleHistoryPushIdx = () => {
        history.push(`/display-details/${idx}`);
    };

    const handleHistoryPushNickname = () => {
        history.push(`/my-page/${writer}`);
    };

    const rectStyle = () => {
        if (rect == "fourSquare") {
            return (
                <FourSquareCardContainer>
                    <ImageContainerDiv>
                        <ImageContainer
                            src={`${image}`}
                            onClick={handleHistoryPushIdx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
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
                </FourSquareCardContainer>
            );
        }
    };
    return (
        <CardContainer>
            <ImageContainerDiv>
                <ImageContainer
                    src={`${image}`}
                    onClick={handleHistoryPushIdx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
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

export default PreviewCard;
