import styled from "styled-components";

export const TagName = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 900;
`;

export const MainContainer = styled.div`
    background-color: black;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const TagCard = styled.div`
    margin: 12px;
    width: 360px;
    height: 144px;
    background-color: red;

    justify-content: space-between;
    align-items: center;
`;
