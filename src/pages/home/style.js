import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
export const PostButton = styled(Button)`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    background-color: white;
    border: none;
    position: fixed;
    left: 94%;
    top: 80%;
    &:hover{
        background-color: white;
    }
    .btn-check:focus + &, &:focus{
        background-color: white;
        box-shadow: none;
    }
`
export const PlusButton = styled(AiFillPlusCircle)`
    width: 48px;
    height: 48px;
    margin: 0;
    padding: 0;
    color: var(--color-blue);
`