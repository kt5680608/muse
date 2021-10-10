import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
export const PostButton = styled(Button)`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 0;
    border: none;
    padding: 0;
    background-color: transparent;
    border: none;
    position: fixed;
    left: 93%;
    top: 80%;
    &:hover{
        background-color: transparent;
    }
    .btn-check:focus + &, &:focus{
        background-color: transparent;
        box-shadow: none;
    }
`
export const PlusButton = styled(AiFillPlusCircle)`
    width:64px;
    height: 64px;
    margin: 0;
    padding: 0;
    color: var(--color-blue);
    cursor: pointer;
`