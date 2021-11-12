import styled from 'styled-components'
import { HiOutlinePencilAlt } from 'react-icons/hi'

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 12px;
    display: block;
    cursor: pointer;
    &:hover{
        opacity: .7;
    }
`

export const NicknameInput = styled.input`
    width: 360px;
    height: 48px;
    font-size: var(--g-text-font-size-4);
    color: var(--g-color-gray200);
    border-radius: 16px;
    border: none;
    background-color: var(--g-color-gray100);
    padding: 12px;
    margin-bottom: 24px;
    &:focus{
        outline: none;
    }
`

export const NicknameLabel = styled.label`
    font-weight: 900;
    font-size: var(--g-text-font-size-5);
    margin-right: 12px;
    display: block;
`

export const SubmitButton = styled.button`
    border: none;
    height: 48px;
    width: 72px;
    font-weight: 900;
    font-size: var(--g-text-font-size-3);
    border-radius: 24px;
    &:hover{
        background-color: var(--g-color-blue);
        color: var(--g-color-white);
    }
`

export const DeleteButton = styled.button`
    border: none;
    height: 24px;
    width: 48px;
    font-weight: 900;
    font-size: var(--g-text-font-size-2);
    background-color: #cc3300;
    border-radius: 24px;
    color: var(--g-color-white);
`

export const SubmitButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    margin-top: 24px;
`

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalName = styled.h1`
    font-weight: 900;
    font-size: var(--g-text-font-size-5);
    margin-bottom: 24px;
`

export const Form = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Textarea = styled.textarea`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    width: 360px;
    height: 96px;
    border: none;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
    padding: 16px;
    display: inline;
    font-size: var(--g-text-font-size-4);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

export const Pre = styled.pre`
    justify-content: center;
`