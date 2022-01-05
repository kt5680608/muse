import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    padding: 12px;
    box-shadow: 8px 10px 12px 6px rgba(156, 156, 156, 0.64);
    -webkit-box-shadow: 8px 8px 12px 4px rgba(156, 156, 156, 0.64);
`;
export const InfoContainer = styled.div`
    display: flex;
    margin-left: 12px;
    flex-direction: column;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 48px;
    height: 48px;
`;

export const Nickname = styled.h1`
    font-size: var(--g-text-font-size-5);
    font-weight: 600;
`;

export const Introduce = styled.p`
    font-size: var(--g-text-font-size-3);
    font-weight: 400;
`;
