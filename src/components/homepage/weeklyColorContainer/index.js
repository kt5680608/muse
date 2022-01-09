import React, { useState, useEffect } from "react";
import axios from "axios";
import { ColorCard } from "../../../components";
import { MainContainer, ColorContainerName, ColorContainer } from "./style";
import { framer } from "framer";

function WeeklyColorContainer() {
    const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
    const [weeklyColors, setWeeklyColors] = useState([]);
    const [weeklyColorsHexa, setWeeklyColorsHexa] = useState([]);
    useEffect(() => {
        axios.get(`${API_DOMAIN}/post/color_of_week/`).then((res) => {
            try {
                console.log(res.data);
                setWeeklyColors(res.data.color);
                setWeeklyColorsHexa(res.data.hexa_code);
                console.log(weeklyColors);
            } catch (e) {
                console.error(e);
            }
        });
    }, []);
    return (
        <MainContainer>
            <ColorContainerName>Weekly Colour</ColorContainerName>
            <ColorContainer>
                {weeklyColors.map((weeklyColor, idx) => (
                    <ColorCard
                        color={`${weeklyColor}`}
                        hexa={weeklyColorsHexa[idx]}
                    />
                ))}
            </ColorContainer>
        </MainContainer>
    );
}

export default WeeklyColorContainer;
