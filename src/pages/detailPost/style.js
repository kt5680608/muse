import styled from 'styled-components'

export const Viewport = styled.div`
    width: 100vw;
    height: 100vh;    
`
export const MainContainer = styled.div`
    height: calc(96/var(--g-ncols)*12)vw;
    display: flex;
    justify-content : center;
    align-items: flex-start;
`
export const DetailContainer = styled.div`
    margin-top: 60px;
    width: 72vw;
    height: calc(72/var(--g-ncols)*12)vw;
    display: flex;
    border-radius: 40px;
    box-shadow: 10px 10px 28px 4px rgba(156,156,156,0.64);
    -webkit-box-shadow: 10px 10px 28px 4px rgba(156,156,156,0.64);
    -moz-box-shadow: 10px 10px 28px 4px rgba(156,156,156,0.64);
`
   
export const DetailImage = styled.img`
    width: calc(6/var(--g-ncols)*100%);
    object-fit: fill;
    height: 100%;
    border-radius: 40px 0px 0px 40px;
`

export const DetailTitle = styled.h1`
    font-family: Noto-Sans-KR;
    font-weight: 900;
    font-size: 48px;
`

export const DetailInfoContainer = styled.div`
    padding: 36px;
    width: calc(6/var(--g-ncols)*100%);
    background-color: white;
    border-radius: 0px 40px 40px 0px;
`

export const HashTagContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 20px;
    margin-right: 100px;
    background-color: red;
    flex-direction: row;
    border-radius: 20px;
    display: inline-block;
`

export const HashTag = styled.p`
    margin-right: 100px;
    font-size: var(--g-text-font-size-1);
    font-family: Noto-Sans-KR;
    font-weight: 600;
    color: var(--color-white);
    margin: 0;
    background-color: var(--g-color-gray100);
    border-radius: 16px;
`

export const CustomUl = styled.ul`
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
`

export const CustomLi = styled.li`
    margin: 0 6px 0 0;
    padding: 6px 12px 6px 12px;
    list-style-type: none;
    border-radius: 24px;
    font-size: 12px;
    font-family: Noto-Sans-KR;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    background-color: var(--g-color-gray100);
    &:hover{
        background-color: var(--g-color-blue);
        color: var(--g-color-white)
    }
`

export const DetailText = styled.p`
    font-family: Noto-Sans-KR;
    font-weight: 600;
    font-size: 24px;
`