import React, { useEffect } from "react";
import { Navbar, Banner, PostButton, Container } from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch } from "react-redux";
import * as style from "./style";
function Archives() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userInfo());
    }, []);
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
