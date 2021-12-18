import React, { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../card";
import axios from "axios";
import { Button, Flex, Dropdown, FixedZIndex } from "gestalt";
import StackGrid from "react-stack-grid";
import {
    CustomDropdown,
    DropdownContainer,
    ListItem,
    ToggleH1,
    MainContainer,
} from "./style";
import "gestalt/dist/gestalt.css";
import { motion } from "framer";

function ReferenceContainer(props) {
    const [posts, setPosts] = useState([]);
    const [label, setLabel] = useState("인기순");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState("likes");
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });
    const [contestBool, setContestBool] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const anchorRef = React.useRef(null);
    const DROPDOWN_ZINDEX = new FixedZIndex(10);

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

    const likesOrder = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        setOptions("likes");
        setLabel("인기순");
        getPosts();
    };

    const viewsOrder = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        setOptions("views");
        setLabel("조회수순");
        getPosts();
    };

    const recentOrder = ({ item }) => {
        setSelected(item);
        setPosts([]);
        setPage(1);
        setOptions("recent");
        setLabel("최신순");
        getPosts();
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
        <MainContainer>
            <DropdownContainer>
                <Flex justifyContent="center">
                    <Button
                        accessibilityControls="action-variant-dropdown-example"
                        accessibilityExpanded={open}
                        accessibilityHaspopup
                        iconEnd="arrow-down"
                        onClick={() => setOpen((prevVal) => !prevVal)}
                        ref={anchorRef}
                        selected={open}
                        size="lg"
                        text={selected ? selected.label : "Display"}
                    />
                    {open && (
                        <Dropdown
                            zIndex={DROPDOWN_ZINDEX}
                            anchor={anchorRef.current}
                            id="action-variant-dropdown-example"
                            onDismiss={() => setOpen(false)}
                        >
                            <Dropdown.Item
                                onSelect={likesOrder}
                                option={{ value: "인기순", label: "인기순" }}
                                selected={selected}
                            />
                            <Dropdown.Item
                                onSelect={viewsOrder}
                                option={{
                                    value: "조회수순",
                                    label: "조회수순",
                                }}
                                selected={selected}
                            />
                            <Dropdown.Item
                                onSelect={recentOrder}
                                option={{ value: "최신순", label: "최신순" }}
                                selected={selected}
                            />
                        </Dropdown>
                    )}
                </Flex>
                {/* <CustomDropdown>
                    <CustomDropdown.Toggle id="style.CustomDropdown-basic">
                        {label}
                    </CustomDropdown.Toggle>
                    <CustomDropdown.Menu>
                        <CustomDropdown.Item
                            href="#/action-1"
                            onClick={likesOrder}
                        >
                            인기순
                        </CustomDropdown.Item>
                        <CustomDropdown.Item
                            href="#/action-2"
                            onClick={viewsOrder}
                        >
                            조회수순
                        </CustomDropdown.Item>
                        <CustomDropdown.Item
                            href="#/action-3"
                            onClick={recentOrder}
                        >
                            최신순
                        </CustomDropdown.Item>
                    </CustomDropdown.Menu>
                </CustomDropdown> */}
            </DropdownContainer>

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
        </MainContainer>
    );
}

export default ReferenceContainer;
