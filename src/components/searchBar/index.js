import React, { useState, useEffect } from "react";
import { Flex, SearchField, Box, Spinner } from "gestalt";
import axios from "axios";
import StackGrid from "react-stack-grid";
import { Card, UserCard } from "../../components";
import {
    MainContainer,
    SearchBarContainer,
    SearchedDataContainer,
    SearchedDataName,
    SearchedDataNameContainer,
    SearchedDataGridContainer,
    SearchedDataNone,
} from "./style";
function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState([{ nickname: null }]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [isUserUsed, setIsUserUsed] = useState(false);
    const [show, setShow] = useState(false);

    const regexSpace = /\u0020/gi;
    const processedValue = searchValue.replace(regexSpace, "%2B");
    const getSearchedData = async () => {
        setLoading(true);
        setShow(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        await axios
            .get(`${API_DOMAIN}/search/?q=${processedValue}`)
            //http://ec2-3-36-100-177.ap-northeast-2.compute.amazonaws.com/api/search/q?=gdgd
            .then((res) => {
                try {
                    console.log(res.data);
                    setSearchedPosts(res.data.post);
                    setSearchedUsers(res.data.user);
                    setIsUserUsed(true);
                } catch (e) {
                    console.log(e);
                }
            });
        setLoading(false);
    };

    const onKeyDownTagManagement = ({ event: { keyCode } }) => {
        if (keyCode === 13 /* Enter */) {
            console.log(processedValue);
            console.log("엔터");
            getSearchedData();
        }
    };

    return (
        <MainContainer>
            <Box paddingY={12}>
                <SearchBarContainer>
                    <SearchField
                        onChange={({ value }) => setSearchValue(value)}
                        value={searchValue}
                        onKeyDown={onKeyDownTagManagement}
                    />
                </SearchBarContainer>
            </Box>
            {loading === false ? (
                isUserUsed === true ? (
                    <SearchedDataContainer>
                        <SearchedDataNameContainer>
                            <SearchedDataName>USERS</SearchedDataName>
                        </SearchedDataNameContainer>
                        {searchedUsers !== null ? (
                            searchedUsers.map((searchedUser, idx) => (
                                <SearchedDataGridContainer>
                                    <UserCard
                                        nickname={searchedUser.nickname}
                                        introduce={searchedUser.self_introduce}
                                        badge={searchedUser.badge}
                                        avatar={searchedUser.avatar}
                                    />
                                </SearchedDataGridContainer>
                            ))
                        ) : (
                            <SearchedDataGridContainer>
                                <SearchedDataNone>no result.</SearchedDataNone>
                            </SearchedDataGridContainer>
                        )}
                        <SearchedDataNameContainer>
                            <SearchedDataName>POSTS</SearchedDataName>
                        </SearchedDataNameContainer>

                        <StackGrid
                            columnWidth={300}
                            gutterWidth={4}
                            duration={0}
                            monitorImagesLoaded={true}
                            style={{ width: "100%" }}
                        >
                            {searchedPosts !== null ? (
                                searchedPosts.map((searchedPost, idx) => (
                                    <>
                                        <Card
                                            image={searchedPost.image}
                                            title={searchedPost.title}
                                            idx={searchedPost.idx}
                                            liked={searchedPost.liked}
                                            avatar={searchedPost.writer_avatar}
                                            writer={searchedPost.writer}
                                            views={searchedPost.views}
                                            likes={searchedPost.likes}
                                        />
                                    </>
                                ))
                            ) : (
                                <SearchedDataGridContainer>
                                    <SearchedDataNone>
                                        no result.
                                    </SearchedDataNone>
                                </SearchedDataGridContainer>
                            )}
                        </StackGrid>
                    </SearchedDataContainer>
                ) : (
                    <></>
                )
            ) : (
                <Spinner show={show} />
            )}
        </MainContainer>
    );
}

export default SearchBar;
