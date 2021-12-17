import React, { useState } from "react";
import { Banner, Label, Highlight, Paragraph, Span } from "./style";
import { motion } from "framer";
function BannerContainer() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <Banner>
                <Label>
                    Who's your <Highlight>MUSE?</Highlight>
                </Label>
                <Paragraph>
                    영감을 나누는 공간 <Span>MUSE</Span>
                </Paragraph>
            </Banner>
        </div>
    );
}

export default BannerContainer;
