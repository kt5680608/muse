import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser, profileImageUpload } from "../../actions/updateUser";
import {
    Navbar,
    NicknameUpdateButton,
    OwnerPost,
    LikedPost,
    FollowingListModal,
    FollowerListLi,
    FollowerListModal,
    Loading,
    Card,
} from "../../components";
import StackGrid from "react-stack-grid";
import {
    Avatar,
    MyPageContainer,
    OwnerInfoContainer,
    OwnerNicknameContainer,
    OwnerNickname,
    OwnerFollower,
    FollowButton,
    FollowContainer,
    FollowCountContainer,
    MyPostContainer,
    Introduce,
    Pre,
    DisplayOrderButton,
    DisplayOrderButton2,
    OrderButtonContainer,
    PostContainer,
    FollowedButton,
    ButtonH1,
} from "./style";

function MyPage({ match }) {
    const getUserNickname = useSelector((state) => state.userInfo.nickname);

    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");
    const [isOwner, setIsOwner] = useState();
    const [isLoginUserFollow, setIsLoginUserFollow] = useState();
    const [ownerInfo, setOwnerInfo] = useState([]);
    const [followingCount, setFollowingCount] = useState();
    const [followingLists, setFollowingLists] = useState([]);
    const [followerCount, setFollowerCount] = useState();
    const [followerLists, setFollowerLists] = useState([]);
    const [ownerPosts, setOwnerPosts] = useState([]);
    const [introduce, setIntroduce] = useState("");
    const myPageOwner = match.params;
    const [cover, setCover] = useState();
    const [displayOwnerPosts, setDisplayOwnerPosts] = useState(true);
    const [loading, setLoading] = useState();
    const [submit, setSubmit] = useState(false);

    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/account/follow/`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: ownerInfo.nickname,
            }),
        }).then(() => {
            setIsLoginUserFollow(!isLoginUserFollow);
            if (isLoginUserFollow == false) {
                setFollowerCount(followerCount + 1);
                const myData = {
                    following: `${getUserNickname}`,
                    avatar: {},
                };
            }
            if (isLoginUserFollow == true) {
                setFollowerCount(followerCount - 1);
            }
            setSubmit(!submit);
        });
    };

    const getOwnerInfo = () => {
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/, "").split("/");
        urlParts.shift();
        if (urlParts === null || undefined) {
            urlParts = getUserNickname;
        }
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(`${API_DOMAIN}/account/${urlParts[1]}/my_page`, {
            method: "GET",
            headers: {
                Authorization: `${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsOwner(data.is_owner);
                setIsLoginUserFollow(data.is_login_user_follow);
                setOwnerInfo(data.owner_info);
                setFollowingCount(data.following_count);
                setFollowingLists(data.following_list);
                setFollowerCount(data.follower_count);
                setFollowerLists(data.follower_list);
            });
    };

    const getOwnerPosts = () => {
        setLoading(true);
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/, "").split("/");
        urlParts.shift();
        console.log(urlParts);
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(`${API_DOMAIN}/account/${urlParts[1]}/owner_post/`, {
            method: "GET",
            headers: {
                Authorization: `${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOwnerPosts(data);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const getSavedPosts = () => {
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/, "").split("/");
        urlParts.shift();
        const token = JSON.parse(localStorage.getItem("token"));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        return fetch(
            `${API_DOMAIN}/account/${urlParts[1]}/owner_bookmark_post/`,
            {
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setOwnerPosts(data);
            });
    };
    // ----------------------------------------------------------------정렬--------------------------------------------------------
    const likesOrder = () => {
        setDisplayOwnerPosts(false);
        setOwnerPosts([]);
        getSavedPosts();
    };

    const ownerOrder = () => {
        setDisplayOwnerPosts(true);
        setOwnerPosts([]);
        getOwnerPosts();
    };

    // --------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        getOwnerInfo();
        getOwnerPosts();
    }, []);

    return (
        <div>
            <Navbar />
            <MyPageContainer>
                <OwnerInfoContainer>
                    <Avatar src={ownerInfo.avatar} />
                    <OwnerNicknameContainer>
                        <OwnerNickname>{ownerInfo.nickname}</OwnerNickname>

                        {isOwner == true ? (
                            <NicknameUpdateButton
                                avatar={ownerInfo.avatar}
                                nickname={ownerInfo.nickname}
                                selfIntroduce={ownerInfo.self_introduce}
                            />
                        ) : (
                            <></>
                        )}
                        {isOwner == false ? (
                            isLoginUserFollow == false ? (
                                <FollowButton onClick={handleFollow}>
                                    팔로우
                                </FollowButton>
                            ) : (
                                <FollowedButton onClick={handleFollow}>
                                    팔로잉
                                </FollowedButton>
                            )
                        ) : (
                            <></>
                        )}
                    </OwnerNicknameContainer>
                    <div>
                        <Pre>
                            <Introduce>{ownerInfo.self_introduce}</Introduce>
                        </Pre>
                    </div>

                    <FollowContainer>
                        <FollowerListModal
                            followerCount={followerCount}
                            followerLists={followerLists}
                            submit={submit}
                        />
                        <FollowingListModal
                            followingCount={followingCount}
                            followingLists={followingLists}
                        />
                    </FollowContainer>
                </OwnerInfoContainer>
            </MyPageContainer>
            <PostContainer>
                <MyPostContainer>
                    <OrderButtonContainer>
                        {isOwner == true ? (
                            <>
                                <DisplayOrderButton onClick={ownerOrder}>
                                    {" "}
                                    <ButtonH1>내 게시물</ButtonH1>
                                </DisplayOrderButton>
                                <DisplayOrderButton2 onClick={likesOrder}>
                                    {" "}
                                    <ButtonH1>저장된 게시물</ButtonH1>
                                </DisplayOrderButton2>
                            </>
                        ) : (
                            <></>
                        )}
                    </OrderButtonContainer>
                    {displayOwnerPosts == true ? (
                        <StackGrid
                            columnWidth={300}
                            gutterWidth={4}
                            duration={0}
                            monitorImagesLoaded={true}
                            style={{ width: "100%" }}
                        >
                            {ownerPosts.map((post) => (
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
                            ))}
                        </StackGrid>
                    ) : (
                        <StackGrid
                            columnWidth={300}
                            gutterWidth={4}
                            duration={0}
                            monitorImagesLoaded={true}
                            style={{ width: "100%" }}
                        >
                            {ownerPosts.map((post) => (
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
                            ))}
                        </StackGrid>
                    )}
                </MyPostContainer>
            </PostContainer>
        </div>
    );
}

export default MyPage;
