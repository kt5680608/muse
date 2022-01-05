import React from "react";
import {
    MainContainer,
    InfoContainer,
    Avatar,
    Nickname,
    Introduce,
} from "./style";

function UserCard(props) {
    return (
        <MainContainer>
            <Avatar src={`${props.avatar}`} alt="" />
            <InfoContainer>
                <Nickname>{props.nickname}</Nickname>
                <Introduce>{props.introduce}</Introduce>
            </InfoContainer>
        </MainContainer>
    );
}

export default UserCard;
