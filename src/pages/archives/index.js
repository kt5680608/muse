import React, { useEffect } from "react";
import { Navbar, Banner, PostButton, PreviewReference } from "../../components";
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
            <PreviewReference />
            <PostButton />
        </div>
    );
}

export default Archives;
