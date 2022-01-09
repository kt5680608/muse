import React, { useState } from "react";
import {
    Banner,
    Label,
    Highlight,
    Paragraph,
    Span,
    PostButtonContainer,
} from "./style";
import { ContestPostButton } from "../../../components";
function GlobalBanner(props) {
    return (
        <div>
            <Banner>
                <Label>
                    Who's your <Highlight>MUSE?</Highlight>
                </Label>
                <Paragraph>
                    영감을 나누는 공간 <Span>MUSE</Span>
                </Paragraph>
                {props.name === "contest" && (
                    <PostButtonContainer>
                        <ContestPostButton />
                    </PostButtonContainer>
                )}
            </Banner>
        </div>
    );
}

export default GlobalBanner;
