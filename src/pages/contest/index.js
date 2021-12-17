import React, { useEffect } from "react";
import { Navbar, Banner, PostButton, Container } from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch } from "react-redux";
function Contest() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Container name="cur-contest" />
            <PostButton />
        </div>
    );
}

export default Contest;
