import React, { useState, useEffect } from "react";
import { Flex, SearchField, Box } from "gestalt";
import axios from "axios";
import { MainContainer, SearchBarContainer } from "./style";
function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState([{ nickname: null }]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const regexSpace = /\u0020/gi;
    const processedValue = searchValue.replace(regexSpace, "%2B");
    const getSearchedData = async () => {
        setLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        await axios
            .get(`${API_DOMAIN}/search/?q=${processedValue}`)
            //http://ec2-3-36-100-177.ap-northeast-2.compute.amazonaws.com/api/search/q?=gdgd
            .then((res) => {
                try {
                    setSearchedPosts(res.data.post);
                    setSearchedUsers(res.data.user);
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
            <button
                onClick={() => {
                    console.log(searchedUsers[0].nickname);
                }}
            >
                a;ldkjfa
            </button>
            {searchedUsers[0].nickname && <h1>{searchedUsers[0].nickname}</h1>}
        </MainContainer>
    );
}

export default SearchBar;

function CardC(props) {
    return <h1>{props.writer}</h1>;
}
