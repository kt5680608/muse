import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
export const PostButton = styled(Button)`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    &:hover{
        background-color: transparent;
    }
    .btn-check:focus + &, &:focus{
        background-color: transparent;
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