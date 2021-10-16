import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'
import { Modal, Button } from 'react-bootstrap'

export const PostButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 0;
    border: none;
    padding: 0;
    border: none;
    position: fixed;
    left: 93%;
    top: 80%;
    border-radius: 50%;
    background-color: var(--g-color-blue);   
`

export const CustomModal = styled(Modal)`
`

export const PlusButton = styled(FiPlus)`
    width: 36px;
    height: 36px;
    margin: 0;
    color: var(--g-color-white);
    padding: 0;
    border: none;
    border-radius: 50%;
    stroke-width: 3;
`

export const CustomInput = styled.input`
    background-color: var(--g-color-gray100);
    padding: 16px;
    border: none;
    width: 80%;
    height: 36px;
    border-radius: 24px;
    margin: 12px;
`

export const CustomInputFile = styled.input`
    padding: 0px;
    width: 80%;
`

export const CustomButton = styled.button`
    border: none;
    color: white;
    padding: 4px 16px 4px 16px;
    background-color: var(--g-color-blue);
    border-radius: 16px;
    &:hover{
        opacity: .7;
    }
`

export const CustomForm = styled.form`
    display: flex;
`

export const ImageContainer = styled.div`

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: flex-start;
`

export const ImgPreview = styled.img`
    width: 50%;
    max-height: 80vh;
    width: 80%;
    border-radius: 16px;
`

export const CustomTextarea = styled.textarea`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    width: 80%;
    border: none;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
    padding: 16px;
`

export const Pre = styled.pre`
    display: flex;
    justify-content: center;
`