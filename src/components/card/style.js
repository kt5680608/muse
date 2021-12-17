import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { Modal } from "react-bootstrap";
import { motion } from "framer";
export const CardContainer = styled(motion.div)`
    width: 312px;
    max-height: 600px;
    cursor: pointer;
    margin: 0;
    @media (max-width: 320px) {
        width: 300px;
        max-height: 600px;
    }
`;
export const FourSquareCardContainer = styled(motion.div)`
    width: 312px;
    height: 280px;
    cursor: pointer;
    margin: 0;
    @media (max-width: 320px) {
        width: 300px;
        height: 280px;
    }
`;

export const ImageContainerDiv = styled.div`
    width: 312px;
    max-height: 600px;
    border-radius: 16px;
    overflow: hidden;
`;

export const ImageContainer = styled(motion.img)`
    width: 100%;
    max-height: 600px;
    vertical-align: top;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
`;

export const InfoContainer = styled.figcaption`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const PostStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PostWriter = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
`;

export const EyeIcon = styled(FiEye)`
    font-size: 14px;
    margin: 0 2px 0 2px;
`;
export const LikesIcon = styled(BiHeart)`
    font-size: 14px;
    margin: 0 2px 0 2px;
`;

export const CustomModal = styled(Modal)`
    .modal-dialog {
        display: flex;
        justify-content: center;
    }
    .modal-content {
        width: 80vw;
        height: 90vh;
    }
    .modal-header {
    }
    .modal-body {
        width: 80vw;
        height: 90vh;
    }
    .modal-footer {
        width: 80vw;
        height: 100%;
    }
`;

export const FullImageContainer = styled.img`
    width: 600px;
    height: 600px;
`;

export const WriterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const CustomSpan = styled.span`
    font-size: 14px;
    display: flex;
`;
