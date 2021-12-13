import styled from 'styled-components'
import { motion } from 'framer'

export const FollowButton = styled(motion.button)`
    width: 80px;
    max-width: 100px;
    height: 30px;
    background-color: var(--g-color-blue);
    border: none;
    border-radius: 20px;
    color: var(--g-color-white);
    font-family: "Helvetica";
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        opacity: 0.8;
    }
`