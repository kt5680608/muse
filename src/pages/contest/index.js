import React, { useEffect } from "react";
import { Navbar, ContestBanner, Container } from "../../components";
import { userInfo } from "../../actions/userInfo";
import { useDispatch } from "react-redux";
function Contest() {
    return (
        <div>
            <Navbar />
            <ContestBanner />
            <Container name="cur-contest" />
        </div>
    );
}

export default Contest;
