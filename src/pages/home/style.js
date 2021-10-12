import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'

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