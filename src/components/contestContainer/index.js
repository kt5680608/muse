import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../card";
import axios from "axios";
import * as style from "./style";
import StackGrid from "react-stack-grid";
import { Container, ListItem, ToggleH1, ToggleContainer } from "./style";
import { motion } from "framer";

function ToggleButton(props) {
    return (
        <ToggleContainer>
            <div
                name="Switch"
                style={{
                    width: 60,
                    height: 30,
                    backgroundColor: "#0057ff",
                    borderRadius: 50,
                    padding: 10,
                    cursor: "pointer",
                    // Flexbox
                    display: "flex",
                    justifyContent: props.isOn ? "flex-end" : "flex-start",
                    alignItems: "center",
                }}
                href="#/action-4"
                onClick={props.handleContest}
            >
                <motion.div
                    name="Handle"
                    style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 50,
                    }}
                    // Animation
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                />
            </div>
            {props.contestBool === true ? (
                <ToggleH1>Current Contest</ToggleH1>
            ) : (
                <ToggleH1>Past Contest</ToggleH1>
            )}
        </ToggleContainer>
    );
}
function MainContainer(props) {
    const [posts, setPosts] = useState([]);
    const [label, setLabel] = useState("인기순");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState("likes");
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });
    const [contestBool, setContestBool] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const getPosts = useCallback(() => {
        setLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        let contestT = "cur-contest";
        if (contestBool == false) {
            contestT = "past-contest";
        }
        axios
            .get(
                `${API_DOMAIN}/posts/display/all/?type=${contestT}&page=${page}&order=${options}`
            )
            .then((res) => {
                try {
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
                    console.log("hi");
                } catch (e) {
                    console.error(e);
                }
            });
        setLoading(false);
    }, [page, options, contestBool]);

    const likesOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions("likes");
        setLabel("인기순");
    };

    const viewsOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions("views");
        setLabel("조회수순");
    };

    const recentOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions("recent");
        setLabel("최신순");
    };

    const handleContest = () => {
        setPosts([]);
        setPage(1);
        setIsOn(!isOn);
        setContestBool(!contestBool);
    };

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage((state) => state + 1);
        }
    }, [inView, loading]);
    return (
        <style.MainContainer>
            <style.DropDownContainer>
                <ToggleButton
                    isOn={isOn}
                    contestBool={contestBool}
                    handleContest={handleContest}
                />
                <style.CustomDropdown>
                    <style.CustomDropdown.Toggle id="style.CustomDropdown-basic">
                        {label}
                    </style.CustomDropdown.Toggle>
                    <style.CustomDropdown.Menu>
                        <style.CustomDropdown.Item
                            href="#/action-1"
                            onClick={likesOrder}
                        >
                            인기순
                        </style.CustomDropdown.Item>
                        <style.CustomDropdown.Item
                            href="#/action-2"
                            onClick={viewsOrder}
                        >
                            조회수순
                        </style.CustomDropdown.Item>
                        <style.CustomDropdown.Item
                            href="#/action-3"
                            onClick={recentOrder}
                        >
                            최신순
                        </style.CustomDropdown.Item>
                    </style.CustomDropdown.Menu>
                </style.CustomDropdown>
            </style.DropDownContainer>

            <StackGrid
                columnWidth={300}
                gutterWidth={4}
                duration={0}
                monitorImagesLoaded={true}
                style={{ width: "100%" }}
            >
                {posts.map((post, idx) => (
                    <React.Fragment key={idx}>
                        {posts.length - 1 === idx ? (
                            <ListItem ref={ref}>
                                <Card
                                    rect="rect"
                                    image={post.image}
                                    title={post.title}
                                    idx={post.idx}
                                    liked={post.liked}
                                    avatar={post.writer_avatar}
                                    writer={post.writer}
                                    views={post.views}
                                    likes={post.likes}
                                />
                            </ListItem>
                        ) : (
                            <ListItem>
                                <Card
                                    image={post.image}
                                    title={post.title}
                                    idx={post.idx}
                                    liked={post.liked}
                                    avatar={post.writer_avatar}
                                    writer={post.writer}
                                    views={post.views}
                                    likes={post.likes}
                                />
                            </ListItem>
                        )}
                    </React.Fragment>
                ))}
            </StackGrid>
        </style.MainContainer>
    );
}

export default MainContainer;
