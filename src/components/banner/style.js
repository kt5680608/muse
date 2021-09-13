import styled from 'styled-components'

export const Banner = styled.div`
    width: 100vw;
    height: 360px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Label = styled.h1`
    color: black;
    font-family: R-FLEX-BLACK;
    font-size: 84px;
    @media (max-width:768px){
        font-size: 48px;
    }
`

export const Highlight = styled.span`
    color: var(--color-blue);
    font-family: R-FLEX-BLACK;
    font-size: 84px;
    @media (max-width:768px){
        font-size: 48px;
    }
`