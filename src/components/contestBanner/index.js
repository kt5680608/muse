import React, { useState } from "react";
import {
    Banner,
    Label,
    Highlight,
    Paragraph,
    Span,
    PostButtonContainer,
} from "./style";
import { ContestPostButton } from "../../components";
import { motion } from "framer";
function ContestBannerContainer() {
    return (
        <div>
            <Banner>
                <Label>
                    Who's your <Highlight>MUSE?</Highlight>
                </Label>
                <Paragraph>
                    영감을 나누는 공간 <Span>MUSE</Span>
                </Paragraph>
                <PostButtonContainer>
                    <ContestPostButton />
                </PostButtonContainer>
            </Banner>
        </div>
    );
}

export default ContestBannerContainer;
