import React, { useState, useEffect } from "react";
import { Flex, SearchField, Box, Spinner } from "gestalt";
import axios from "axios";
import StackGrid from "react-stack-grid";
import { Card, UserCard, SearchTag } from "../../../components";
import {
    MainContainer,
    SearchBarContainer,
    SearchedDataContainer,
    SearchedDataName,
    SearchedDataNameContainer,
    SearchedDataGridContainer,
    SearchedDataNone,
    TagMainContainer,
    TagContainer,
    TagName,
} from "./style";
function SearchContainer() {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState([{ nickname: null }]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [isUserUsed, setIsUserUsed] = useState(false);
    const [show, setShow] = useState(false);
    const [tagArray, setTagArray] = useState(["adsf", "일러스트", "포스터"]);
    const [isSearched, setIsSearched] = useState(false);

    const regexSpace = /\u0020/gi;
    const getSearchedDataWithValue = async () => {
        setLoading(true);
        const processedValue = searchValue.replace(regexSpace, "%2B");
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
        setIsSearched(true);
        setLoading(false);
    };

    const getSearchedDataWithTag = async (tag) => {
        setLoading(true);
        setShow(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        await axios
            .get(`${API_DOMAIN}/search/?q=${tag}`)
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
        setIsSearched(true);
        setLoading(false);
    };
    const onKeyDownTagManagement = ({ event: { keyCode } }) => {
        if (keyCode === 13 /* Enter */) {
            getSearchedDataWithValue();
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
            <TagMainContainer>
                {tagArray.map((tag) => (
                    <TagContainer
                        onClick={() => {
                            getSearchedDataWithTag(tag);
                        }}
                    >
                        <TagName>{tag}</TagName>
                    </TagContainer>
                ))}
            </TagMainContainer>
            {loading === false ? (
                isUserUsed === true ? (
                    <SearchedDataContainer>
                        <SearchedDataNameContainer>
                            <SearchedDataName>USERS</SearchedDataName>
                        </SearchedDataNameContainer>
                        <StackGrid
                            columnWidth={300}
                            gutterWidth={12}
                            duration={0}
                            monitorImagesLoaded={true}
                            style={{ width: "100%" }}
                        >
                            {searchedUsers !== null ? (
                                searchedUsers.map((searchedUser, idx) => (
                                    <SearchedDataGridContainer>
                                        <UserCard
                                            nickname={searchedUser.nickname}
                                            introduce={
                                                searchedUser.self_introduce
                                            }
                                            badge={searchedUser.badge}
                                            avatar={searchedUser.avatar}
                                        />
                                    </SearchedDataGridContainer>
                                ))
                            ) : (
                                <SearchedDataGridContainer>
                                    <SearchedDataNone>
                                        no result.
                                    </SearchedDataNone>
                                </SearchedDataGridContainer>
                            )}
                        </StackGrid>
                        <SearchedDataNameContainer>
                            <SearchedDataName>POSTS</SearchedDataName>
                        </SearchedDataNameContainer>

                        <StackGrid
                            columnWidth={300}
                            gutterWidth={12}
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

export default SearchContainer;