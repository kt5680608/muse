import styled from 'styled-components'
import { HiOutlinePencilAlt } from 'react-icons/hi'

export const UpdateIcon = styled(HiOutlinePencilAlt)`
    font-size: 24px;
    margin-left: 6px;
    cursor: pointer;
    &:hover{
        color: var(--g-color-blue);
    }
`

export const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`

export const NicknameInput = styled.input`
    width: 240px;
    height: 48px;
    font-size: var(--g-text-font-size-5);
    color: var(--g-color-gray200);
    border-radius: 16px;
    border: none;
    background-color: var(--g-color-gray100);
    padding: 12px;
    &:focus{
        outline: none;
    }
`

export const NicknameLabel = styled.label`
    font-weight: 900;
    font-size: var(--g-text-font-size-5);
    margin-right: 12px;
`