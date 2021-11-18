import styled from 'styled-components'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import{ motion } from 'framer'

export const MyPageContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
export const Avatar = styled.img`
    width: 144px;
    height: 144px;
    border-radius: 50%;
`

export const OwnerInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 92vw;
`

export const OwnerNicknameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 12px;
`

export const OwnerNickname = styled.h1`
    font-weight: 900;
    font-size: var(--g-text-font-size-6);
    display: inline;
    margin: 12px 12px 12px 12px;
`

export const OwnerFollower = styled(motion.p)`
    font-weight: 600;
    font-size: var(--g-text-font-size-4);
    text-align: center;
`

export const FollowCountContainer = styled(motion.div)`
    background-color: var(--g-color-gray100);
    padding: 6px 18px 6px 18px;
    margin: 0px 6px 0px 6px;
    display: flex;
    
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    &:hover{
        background-color: var(--g-color-blue);
        color: var(--g-color-white);
    }
`

export const FollowButton = styled(motion.button)`
    background-color: var(--g-color-blue);
    border: none;
    border-radius: 36px;
    color: var(--g-color-white);
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    padding: 0 16px 0 16px;
    line-height: 36px;
    &:hover{
        opacity: 0.8;
    }
`

export const OrderButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const DisplayOrderButton = styled(FollowButton)`
    margin-bottom: 24px;
    width: 50%;
    margin-right: 12px;
    border-radius: 0px;
    background-color: var(--g-color-gray100);
    color: black;
`

export const DislayOrderButton2 = styled(FollowButton)`
    margin-bottom: 24px;
    background-color: transparent;
    width: 50%;
    border-radius: 0px;
    color: black;
`


export const FollowContainer = styled.div`
    display: flex !important;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`

export const ProfileUpdateButton = styled(FollowButton)`
    background-color: var(--g-color-gray100);
    color: black;
    border: none;
    border-radius: 36px;
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    text-align: center;
    margin: 0 0 0 12px;
    padding: 8px 16px 8px 16px;
    line-height: 33px;
    &:hover{
        opacity: 0.8;
    }
`

export const UpdateIcon = styled(HiOutlinePencilAlt)`
    font-size: 24px;
    margin-left: 6px;
    cursor: pointer;
    &:hover{
        color: var(--g-color-blue);
    }
`

export const GridContainer = styled.div`
    display: grid;
    margin-top: 24px;
    grid-template-columns: auto auto auto auto;
    grid-gap: 100px 300px;
    z-index: -1;
`

export const ListItem = styled.div`
`

export const MyPostContainer = styled.div`
    margin: 24px 96px 24px 96px
    
`

export const Introduce = styled.h2`
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
`

export const Pre = styled.pre`
    font-weight: 600;
    background-color: var(--g-color-gray100);
    padding: 12px 24px 12px 24px;
    border-radius: 16px;
    margin-bottom: 24px;
`

export const FollowedButton = styled(FollowButton)`
    background-color: var(--g-color-gray100);
`