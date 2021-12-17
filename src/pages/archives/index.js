import React, { useEffect } from "react";
import { Navbar, Banner, PostButton, Container } from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch } from "react-redux";
import * as style from "./style";
function Archives() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Container name="reference" />
            <PostButton />
        </div>
    );
}

export default Archives;
