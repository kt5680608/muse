import { Modal, Button, ListGroup } from 'react-bootstrap'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

export const CustomModal = styled(Modal)`
    .modal-title{
        font-family: R-FLEX-BLACK;
        font-weight: 900;
        font-size: 24px;
        color: var(--color-blue);
    }
    
    .modal-body a{
        color: black;
        font-family: Noto-Sans-KR;
        font-weight: 600;
    }
`

export const CustomButton = styled(Button)`
    background-color: white;
    
    border: none;
    color: var(--color-blue);
    &:hover{
        color: var(--color-blue);
        background-color: white;
    }
    &:focus {
    color: var(--color-blue);
    background-color: white;
    border: none;
    box-shadow: none;
    }
`

export const CustomListGroup = styled(ListGroup)`

`

export const BurgerIcon = styled(GiHamburgerMenu)`
    font-size: 24px;
    &:hover{
        color: var(--color-blue);
    }
`
