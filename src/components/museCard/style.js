import styled from 'styled-components'
import { motion } from 'framer';
export const Viewport = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    overflow-y: visible;
    width: 80vw;
`

export const MuseNumContainer = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`

export const MuseContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
`

export const MuseImg = styled(motion.img)`
    width: 50%;
`

export const MuseNumber = styled.h1`
    display: block;
    padding: 24px;
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-7);
    margin: 0;
`

export const MuseImgContainer = styled.div`
    width: 50%;
`

export const MuseUserContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 6px;
`

export const MuseName = styled.h1`
    margin: 0;
    padding: 0;
    font-family: Noto-Sans-KR;
    font-weight: 900; 
    font-size: var(--g-text-font-size-5);
`