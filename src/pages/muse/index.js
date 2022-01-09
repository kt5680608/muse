import React, { useState, useCallback, useEffect } from "react";
import { GlobalNavbar, GlobalBanner } from "../../components";
import * as style from "./style";
import axios from "axios";
function Muse() {
    return (
        <style.MusePage>
            <GlobalNavbar />
            <GlobalBanner />
        </style.MusePage>
    );
}

export default Muse;
