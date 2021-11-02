import styled from 'styled-components'
import { motion } from 'framer';
export const Viewport = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    overflow-y: visible;
    width: 94vw;
`

export const MuseInfoContainer = styled.div`
  
`

export const MuseContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
`

export const MuseImg = styled(motion.img)`
    width: 500px;
    height: 500px;
    object-fit: cover;

`

export const MuseNumber = styled.h1`
    display: block;
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-7);
    margin-bottom: 24px;
`

export const MuseH1 = styled.h1`
    display: block;
    font-family: Noto-Sans-KR;
    font-weight: 900;
    font-size: var(--g-text-font-size-5);
    margin-bottom: 12px;


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