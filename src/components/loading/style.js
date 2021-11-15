import styled from 'styled-components'
import { motion } from 'framer'

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
export const LoadingH1 = styled(motion.h1)`
    font-family: R-FLEX-BLACK;
    font-size: 40px;
    margin-bottom: 24px;
`