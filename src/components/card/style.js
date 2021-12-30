import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { motion } from "framer";
import { Modal } from "gestalt";
import "./style.css";
export const CardContainer = styled(motion.div)`
    width: 300px;
    z-index: -1;
    max-height: 600px;
    cursor: pointer;
    margin: 0;
    @media (max-width: 320px) {
        width: 300px;
        max-height: 600px;
    }
`;
export const ImageContainer = styled.div`
    width: 300px;
    max-height: 600px;
    border-radius: 16px;
    overflow: hidden;
`;

export const Image = styled(motion.img)`
    width: 100%;
    max-height: 600px;
    vertical-align: top;
    justify-content: center;
    overflow: hidden;
    position: relative;
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

//Modal Styling

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-height: 100vh;
    overflow-y: auto;
`;

export const ModalHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ModalWriterInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
`;
export const ModalImage = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: fill;
`;

export const Writer = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 600;
`;

export const Title = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 600;
`;

export const Date = styled(Writer)`
    font-size: var(--g-text-font-size-3);
    font-weight: 400;
`;

export const ModalAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const ReactModal = styled(Modal)`
    background-color: black;
    padding: 0;
`;
