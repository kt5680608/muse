import React from "react";
import Loader from "react-loader-spinner";
import * as style from "./style";
function Loading() {
    return (
        <style.LoadingContainer>
            <style.LoadingH1
                animate={{
                    x: [1000, -80, 20, 0, -1000],
                }}
                transition={{
                    ease: "easeInOut",
                    times: [0, 0.75, 1.2],
                }}
            >
                MUSE coming...
            </style.LoadingH1>
            <Loader
                type="TailSpin"
                color="var(--g-color-blue)"
                height={70}
                width={70}
                timeout={560}
            />
        </style.LoadingContainer>
    );
}

export default Loading;
