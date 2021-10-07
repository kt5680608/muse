import styled from 'styled-components'
import { BiHeart } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
export const CardContainer = styled.div`
    width: 300px;
    height: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
`

export const ImageContainer = styled.img`
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    overflow: hidden;
`

export const InfoContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const PostStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PostTitle = styled.h1`
    font-size: 16px;
    font-family: Noto-Sans-KR-Bold;
    font-weight: 600;
    margin: 0;
`

export const EyeIcon = styled(FiEye)`
    font-size: 16px;
`
export const LikesIcon = styled(BiHeart)`
    font-size: 16px;
`