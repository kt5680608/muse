import React, { useState, useEffect } from "react";
import {
    Navbar,
    Banner,
    Container,
    PostButton,
    PreviewReference,
} from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { HomeContainer } from "./style";

function Home() {
    return (
        <HomeContainer>
            <Navbar />
            <Banner />
            <PostButton />
            <PreviewReference name="reference" />
            <PreviewReference name="contest" />
        </HomeContainer>
    );
}

export default Home;
