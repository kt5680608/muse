import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 36px 0 36px;
    overflow-x: hidden;

    flex-direction: column;
`;

export const SearchBarContainer = styled.div`
    width: 80vw;
`;

export const SearchedDataContainer = styled.div`
    overflow: hidden;
`;

export const SearchedDataName = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: var(--g-text-font-size-6);
`;

export const SearchedDataNameContainer = styled.div`
    width: 92vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 24px;
    margin-top: 24px;
`;

export const SearchedDataGridContainer = styled.div`
    width: 92vw;
    display: flex;
    justify-content: flex-start;
`;

export const SearchedDataNone = styled.h1`
    font-size: var(--g-text-font-size-4);
    color: var(--g-color-gray150);
    font-weight: 600;
`;
