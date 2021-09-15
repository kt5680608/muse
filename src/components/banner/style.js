import styled from 'styled-components'

export const Banner = styled.div`
    width: 100vw;
    height: 240px;
    background-color: white;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    font-size: 24px;
    flex-direction: column;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (max-width: 425px) {
        font-size: 12px;
    }
`
export const Label = styled.h1`
    color: black;
    font-family: R-FLEX-BLACK;
    font-size: 3em;
    
`
export const Paragraph = styled.h2`
    margin-top: 24px;
    color: black;
    font-family: Noto-Sans-KR-Black;
    font-weight: 900;
    font-size: 1.2em;
`
export const Highlight = styled.span`
    color: var(--color-blue);
    font-family: R-FLEX-BLACK;
`