import React, { useEffect } from "react";
import {
    Navbar,
    Banner,
    PostButton,
    ReferenceContainer,
} from "../../components";
function Archives() {
    return (
        <div>
            <Navbar />
            <Banner />
            <ReferenceContainer name="reference" />
            <PostButton />
        </div>
    );
}

export default Archives;
